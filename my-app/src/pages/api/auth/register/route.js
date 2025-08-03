import { db } from '../../../../lib/db.js';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password} = body;

    // Basic validation
    if (!name || !email || !password) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Check if user already exists
    const [existingUser] = await db.query('SELECT email FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return Response.json({ error: 'Email already in use.' }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into DB
    await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    return Response.json({ message: 'User registered successfully.' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ error: 'Server error.' }, { status: 500 });
  }
}
