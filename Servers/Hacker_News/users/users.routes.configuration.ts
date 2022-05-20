import { CommonRoutesConfiguration } from '../common/common.routes.configuration';
import express from 'express';
import API from '../services/API';

export class UsersRoutes extends CommonRoutesConfiguration {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): express.Application {
    // this.app
    //   .route('/users')
    //   .get((request: express.Request, response: express.Response) => {
    //     response.status(200).json({ message: 'Read all users' });
    //   })
    //   .post((request: express.Request, response: express.Response) => {
    //     response.status(200).json({ message: 'Create a user' });
    //   });

    this.app
      .route('/users/:userID')
      .all(
        (
          request: express.Request,
          response: express.Response,
          next: express.NextFunction
        ) => {
          next();
        }
      )
      .get(async (request: express.Request, response: express.Response) => {
        const usersAPI = new API(`/user/${request.params.userID}`);
        const user = await usersAPI.fetch();
        response.status(200).json(user);
      });
    // .put((request: express.Request, response: express.Response) => {
    //   response
    //     .status(200)
    //     .json({ message: `PUT requested for ID: ${request.params.userID}` });
    // })
    // .patch((request: express.Request, response: express.Response) => {
    //   response
    //     .status(200)
    //     .json({
    //       message: `PATCH requested for ID: ${request.params.userID}`,
    //     });
    // })
    // .delete((request: express.Request, response: express.Response) => {
    //   response
    //     .status(200)
    //     .json({
    //       message: `DELETE requested for ID: ${request.params.userID}`,
    //     });
    // });

    return this.app;
  }
}
