import express from 'express';
import cors from 'cors';
import helloController
  from "/Users/shreyamitra/Desktop/2022/spring/full-stack-developer-server-node/controllers/hello-controllers.js";
import userController
   from "/Users/shreyamitra/Desktop/2022/spring/full-stack-developer-server-node/controllers/users-controller.js";
import tuitController
   from "/Users/shreyamitra/Desktop/2022/spring/full-stack-developer-server-node/controllers/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitController(app);
app.get('/hello', (req, res) => {res.send('Hello World!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);
