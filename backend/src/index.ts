import express, { Request, Response, RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors';


const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/users/:walletAddress', async (req, res) => {
  const { walletAddress } = req.params;
  const user = await prisma.user.findUnique({
    where: { walletAddress }
  })
  if (!user) {
    res.status(200).json(user);
  }
})

app.post('/create-user', async (req, res) => {
  const { username, walletAddress } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        walletAddress
      }
    })
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'User already exists' });
  }


});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


