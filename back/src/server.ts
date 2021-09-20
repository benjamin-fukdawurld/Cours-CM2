import './config';

import http from 'http';
import { Mongoose } from 'mongoose';

import { createApp } from './app';

import logger from './logger';

import { AppProps } from './interfaces/App';

import { connectDatabase } from './mongo-utils';

import studentRouter from './routes/students';
import teacherRouter from './routes/teachers';
import schoolClassRouter from './routes/schoolClass';

let mongoDbConnection: Mongoose | undefined;

const appProps: AppProps = {
  routes: [
    {
      path: '/students',
      router: studentRouter,
    },
    {
      path: '/classes',
      router: schoolClassRouter,
    },
    {
      path: '/teachers',
      router: teacherRouter,
    },
  ],
};

function normalizePort(port: string | number): number {
  let value = 0;
  if (typeof port === 'string') {
    value = parseInt(port, 10);
  } else {
    value = port;
  }

  if (Number.isNaN(value) || value <= 0) {
    throw new Error(`Port value must be a positive integer, received '${value}'`);
  }

  return value;
}

const port = normalizePort(process.env.SERVER_PORT ?? 5000);

const server = http.createServer(createApp(appProps));

server.on('error', (error: Error | any) => {
  if (error.syscall && error.syscall !== 'listen') {
    throw error;
  }

  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port: ${port}`;
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', async () => {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port: ${port}`;
  logger.info(`Listening on ${bind}`);
  try {
    mongoDbConnection = await connectDatabase();
  } catch (error: any) {
    logger.error(error);
    process.exit(-1);
  }
  logger.info(`Connection established with database`);
});

server.listen(port);
