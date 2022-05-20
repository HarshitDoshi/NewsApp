import { CommonRoutesConfiguration } from '../common/common.routes.configuration';
import express from 'express';
import API from '../services/API';

export class ItemsRoutes extends CommonRoutesConfiguration {
  constructor(app: express.Application) {
    super(app, 'ItemsRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route('/items/maximum')
      .all(
        (
          request: express.Request,
          response: express.Response,
          next: express.NextFunction
        ) => {
          next();
        }
      )
      .get(async (request, response) => {
        const maximumItemAPI = new API('/maxitem');
        const maximumItem = await maximumItemAPI.fetch();
        response.status(200).json(maximumItem);
      });

    this.app
      .route('/items/max')
      .all(
        (
          request: express.Request,
          response: express.Response,
          next: express.NextFunction
        ) => {
          next();
        }
      )
      .get(async (request, response) => {
        response.redirect('/item/maximum');
      });

    this.app
      .route('/items/:itemID')
      .all(
        (
          request: express.Request,
          response: express.Response,
          next: express.NextFunction
        ) => {
          next();
        }
      )
      .get(async (request, response) => {
        const itemAPI = new API(`/item/${request.params.itemID}`);
        const item = await itemAPI.fetch();
        response.status(200).json(item);
      });
    return this.app;
  }
}

const fetchItems = async (IDs: Array<Number>) => {
  let items: Array<any> = [];
  IDs.forEach(async (ID) => {
    const item = new API(`/item/${ID}`);
    items.push(item);
  });
  return items;
};
