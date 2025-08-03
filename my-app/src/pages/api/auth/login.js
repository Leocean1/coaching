// pages/api/auth/login.js

import { db } from '../../../lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed.' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required.' });
    }

    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid email.' });
    }

    // Check if multiple teacher/admin accounts exist for this email
    const teacherOrAdminUsers = users.filter(u => u.role === 'teacher' || u.role === 'admin');
    if (teacherOrAdminUsers.length > 1) {
      // Check password for all teacher/admin accounts
      const validRoles = [];
      for (const u of teacherOrAdminUsers) {
        const match = await bcrypt.compare(password, u.password);
        if (match) {
          validRoles.push({ id: u.id, role: u.role });
        }
      }
      if (validRoles.length > 1) {
        // Password matches for multiple roles, ask user to choose
        return res.status(200).json({
          message: 'Multiple roles found for this email. Please select your role.',
          roles: validRoles.map(r => r.role),
          selectRole: true
        });
      } else if (validRoles.length === 1) {
        // Only one valid role, proceed to login
        const user = teacherOrAdminUsers.find(u => u.role === validRoles[0].role);
        const token = jwt.sign(
          { id: user.id, email: user.email, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: '2h' }
        );
        res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${2 * 60 * 60}; SameSite=Lax`);
        return res.status(200).json({ message: 'Login successful', role: user.role });
      } else {
        return res.status(401).json({ error: 'Invalid password.' });
      }
    }

    // If not multiple teacher/admin, check all users for password
    let user = null;
    for (const u of users) {
      const match = await bcrypt.compare(password, u.password);
      if (match) {
        user = u;
        break;
      }
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    // Set JWT in cookie
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${2 * 60 * 60}; SameSite=Lax`);

    return res.status(200).json({ message: 'Login successful', role: user.role });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
