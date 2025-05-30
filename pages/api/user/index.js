import mongodb from '@/lib/mongodb';
import user from '@/model/user';

export default async function handler(req, res) {
  await mongodb();

  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: 'username and password are required' });
      }
      const newuser = new user({ username, password });
      await newuser.save();
      res.status(201).json(newuser);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}