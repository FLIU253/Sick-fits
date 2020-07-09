// let's go!
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');
const jwt = require('jsonwebtoken');
const server = createServer();

server.express.use(cookieParser());

//decode the jwt so we can get the user id on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    //put the userid onto the req for future requests to access
    req.userId = userId;
  }

  next();
});

server.express.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: [process.env.FRONTEND_URL],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  },
  (deets) => {
    console.log(`server now running on port http://localhost:${deets.port}`);
  }
);
