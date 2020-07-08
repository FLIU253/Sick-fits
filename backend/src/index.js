// let's go!
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

//TODO Use express middleware to handle cookies (JWT)
//TODO use express middleware to populate current user
server.express.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:7777');
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
