import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, description } = req.body;

    // 1. Validate form data (add your validation logic here)

    // 2. Process the form data (e.g., send an email, save to a database)
    // ... your logic to handle the form data ...

    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
