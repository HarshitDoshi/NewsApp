import { CommonRoutesConfiguration } from '../common/common.routes.configuration';
import express from 'express';
import API from '../services/API';

export class StoriesRoutes extends CommonRoutesConfiguration {
  constructor(app: express.Application) {
    super(app, 'ItemsRoutes');
  }

  handler(backendPath: string) {
    return async (request: express.Request, response: express.Response) => {
      const APIClient = new API(`/${backendPath}`);
      const data = await APIClient.fetch();
      const payload = data.payload as Array<Number>;
      const values = await APIClient.fetchItems(payload);
      response.status(200).json(values);
    };
  };

  configureRoutes(): express.Application {
    this.app.route('/ask').get(this.handler('askstories'));
    this.app.route('/show').get(this.handler('showstories'));
    this.app.route('/jobs').get(this.handler('jobstories'));
    this.app.route('/new').get(this.handler('newstories'));
    this.app.route('/top').get(this.handler('topstories'));
    this.app.route('/best').get(this.handler('beststories'));

    this.app.route('/updates').get(async (request, response) => {
      const updatesAPI = new API('/updates');
      const updates = await updatesAPI.fetch();
      response.status(200).json(updates);
    });

    return this.app;
  }
}
