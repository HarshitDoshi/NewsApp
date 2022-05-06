"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_configuration_1 = require("../common/common.routes.configuration");
const API_1 = __importDefault(require("../services/API"));
class UsersRoutes extends common_routes_configuration_1.CommonRoutesConfiguration {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
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
            .all((request, response, next) => {
            next();
        })
            .get(async (request, response) => {
            const usersAPI = new API_1.default(`/user/${request.params.userID}`);
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
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1RkFBa0Y7QUFFbEYsMERBQWtDO0FBRWxDLE1BQWEsV0FBWSxTQUFRLHVEQUF5QjtJQUN4RCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDYixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLHFFQUFxRTtRQUNyRSxnRUFBZ0U7UUFDaEUsT0FBTztRQUNQLHNFQUFzRTtRQUN0RSwrREFBK0Q7UUFDL0QsUUFBUTtRQUVSLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQ3ZCLEdBQUcsQ0FDRixDQUNFLE9BQXdCLEVBQ3hCLFFBQTBCLEVBQzFCLElBQTBCLEVBQzFCLEVBQUU7WUFDRixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FDRjthQUNBLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBd0IsRUFBRSxRQUEwQixFQUFFLEVBQUU7WUFDbEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFHLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxtRUFBbUU7UUFDbkUsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw0RUFBNEU7UUFDNUUsS0FBSztRQUNMLHFFQUFxRTtRQUNyRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxxRUFBcUU7UUFDckUsVUFBVTtRQUNWLEtBQUs7UUFDTCxzRUFBc0U7UUFDdEUsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2Qsc0VBQXNFO1FBQ3RFLFVBQVU7UUFDVixNQUFNO1FBRU4sT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQXJERCxrQ0FxREMifQ==