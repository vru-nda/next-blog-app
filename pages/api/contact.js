import {MongoClient} from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {email, name, message} = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(422).json({message: 'Invalid input'});
    }

    const newMessage = {
      name,
      email,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO_URI);
    } catch (error) {
      return res.status(500).json({message: 'Could not connect to database'});
    }

    const db = client.db('next-demo');
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage._id = result.insertedId;

      client.close();

      res
        .status(201)
        .json({message: 'Message sent successfully', data: newMessage});
    } catch (error) {
      client.close();
      return res.status(500).json({message: 'Failed to send the message'});
    }
  }
}
