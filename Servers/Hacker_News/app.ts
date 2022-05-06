import express from 'express';
import * as http from 'http';
import { logger, debugLogger } from './services/logging';
import cors from 'cors';
import { CommonRoutesConfiguration } from './common/common.routes.configuration';
import { UsersRoutes } from './users/users.routes.configuration';
import { StoriesRoutes } from './stories/stories.routes.configuration';
import { ItemsRoutes } from './items/items.routes.configuration';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const SERVER_PORT: Number = 3108;
const routes: Array<CommonRoutesConfiguration> = [];

app.use(express.json());
app.use(cors());

routes.push(new ItemsRoutes(app));
routes.push(new UsersRoutes(app));
routes.push(new StoriesRoutes(app));

const SERVER_MESSAGE = `Server running at http://localhost:${SERVER_PORT}`;

app.get('/status', (request: express.Request, response: express.Response) => {
  response.status(200).json({ message: SERVER_MESSAGE });
});

app.get('/', (request: express.Request, response: express.Response) => {
  logger.log('info', `${request.path}`);
  response.status(200).json({ message: SERVER_MESSAGE });
});

server.listen(SERVER_PORT, () => {
  routes.forEach((route: CommonRoutesConfiguration) => {
    debugLogger(`Routes configured for ${route.getName()}`);
  });
  console.log(SERVER_MESSAGE);
});

export default app;
