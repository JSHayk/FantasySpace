import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import db from '@/db/db';
import config from '@/config/config';
import router from '@/routes/router';

const { port } = config;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
  })
);
app.use('/api', router);

db.getConnection((err, connection) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('DB connected!');
  connection.release();
});

app.listen(port, () => console.log(`Run on ${port}`));
