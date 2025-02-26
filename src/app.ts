import express from 'express';

const app = express();

app.use(express.json());

const POST = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(POST, () => {
  console.log(`Server is running on port ${POST}`);
});
