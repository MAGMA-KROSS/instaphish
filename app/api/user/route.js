import mongodb from '@/lib/mongodb';
import user from '@/model/user';

export async function POST(request) {
  try {
    await mongodb();
    
    const body = await request.json();
    const { username, password } = body;
    
    if (!username || !password) {
      return Response.json(
        { error: 'username and password are required' },
        { status: 400 }
      );
    }
    
    const newuser = new user({ username, password });
    await newuser.save();
    
    return Response.json(newuser, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}