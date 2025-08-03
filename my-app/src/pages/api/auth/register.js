import { db } from '@/lib/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Allow multiple teacher/admin accounts with same email, but only one student
    const [existingUsers] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (role === 'student' && existingUsers.length > 0) {
      return res.status(409).json({ error: 'Email already in use.' });
    }
    if ((role === 'teacher' || role === 'admin') && existingUsers.some(u => u.role === role)) {
      return res.status(409).json({ error: `You already have a ${role} account with this email.` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, role]
    );

    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ error: 'Server error.' });
  }
}
