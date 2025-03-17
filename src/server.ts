import cors from 'cors';
import 'dotenv/config';
import { Express } from 'express'


export default function Start(app : Express): void {
  const port = process.env.PORT || 3000;

  app.use(cors());

  app.get('/', (req, res) => res.send('Server is running!'));

  app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
  });
}
