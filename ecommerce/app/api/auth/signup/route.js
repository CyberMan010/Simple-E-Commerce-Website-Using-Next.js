import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import { createToken } from '../../../../utils/jwt';
import { cookies } from 'next/headers';

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    const { username, email, password } = body;
    const user = await User.create({ username, email, password });
    const token = createToken(user._id);
    cookies().set('token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
    return NextResponse.json({ success: true, user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}