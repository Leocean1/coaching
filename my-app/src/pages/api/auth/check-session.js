import { verify } from 'jsonwebtoken';
import { db } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get token from cookie
    const token = req.cookies.token;
    
    if (!token) {
      console.log('No token found in cookies');
      return res.status(401).json({ error: 'Not authenticated' });
    }

    // Verify token
    let decoded;
    try {
      decoded = verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.error('Token verification failed:', err.message);
      return res.status(401).json({ error: 'Invalid token' });
    }

    if (!decoded.id) {
      console.error('No user ID in token');
      return res.status(401).json({ error: 'Invalid token structure' });
    }

    // Get user from database with role check
    const [users] = await db.query(
      'SELECT id, name, email, role FROM users WHERE id = ? AND role = "teacher"',
      [decoded.id]
    );

    if (users.length === 0) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    const user = users[0];
    
    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    console.error('Session check error:', error);
    return res.status(401).json({ error: 'Not authenticated' });
  }
}
