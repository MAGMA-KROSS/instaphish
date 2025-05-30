import mongodb from '@/lib/mongodb';
import user from '@/model/user';

export async function POST(request) {
  try {
    // Connect to database
    await mongodb();
    
    // Parse request body
    const body = await request.json();
    const { username, password } = body;
    
    // Validate input
    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: 'Username and password are required' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Create new user
    const newUser = new user({ 
      username: username.trim(), 
      password: password 
    });
    
    // Save to database
    const savedUser = await newUser.save();
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'User created successfully',
        userId: savedUser._id 
      }),
      { 
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    
    // Handle duplicate key error (if username is unique)
    if (error.code === 11000) {
      return new Response(
        JSON.stringify({ error: 'Username already exists' }),
        { 
          status: 409,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return new Response(
        JSON.stringify({ error: 'Invalid data provided' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Generic server error
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Optional: Add GET method for testing
export async function GET() {
  return new Response(
    JSON.stringify({ 
      message: 'User API endpoint is working',
      methods: ['POST'] 
    }),
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}