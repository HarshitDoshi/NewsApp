"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsRoutes = void 0;
const common_routes_configuration_1 = require("../common/common.routes.configuration");
const API_1 = __importDefault(require("../services/API"));
class ItemsRoutes extends common_routes_configuration_1.CommonRoutesConfiguration {
    constructor(app) {
        super(app, 'ItemsRoutes');
    }
    configureRoutes() {
        this.app
            .route('/items/maximum')
            .all((request, response, next) => {
            next();
        })
            .get(async (request, response) => {
            const maximumItemAPI = new API_1.default('/maxitem');
            const maximumItem = await maximumItemAPI.fetch();
            response.status(200).json(maximumItem);
        });
        this.app
            .route('/items/max')
            .all((request, response, next) => {
            next();
        })
            .get(async (request, response) => {
            response.redirect('/item/maximum');
        });
        this.app
            .route('/items/:itemID')
            .all((request, response, next) => {
            next();
        })
            .get(async (request, response) => {
            const itemAPI = new API_1.default(`/item/${request.params.itemID}`);
            const item = await itemAPI.fetch();
            response.status(200).json(item);
        });
        return this.app;
    }
}
exports.ItemsRoutes = ItemsRoutes;
const fetchItems = async (IDs) => {
    let items = [];
    IDs.forEach(async (ID) => {
        const item = new API_1.default(`/item/${ID}`);
        items.push(item);
    });
    return items;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMucm91dGVzLmNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pdGVtcy9pdGVtcy5yb3V0ZXMuY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1RkFBa0Y7QUFFbEYsMERBQWtDO0FBRWxDLE1BQWEsV0FBWSxTQUFRLHVEQUF5QjtJQUN4RCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUN2QixHQUFHLENBQ0YsQ0FDRSxPQUF3QixFQUN4QixRQUEwQixFQUMxQixJQUEwQixFQUMxQixFQUFFO1lBQ0YsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQ0Y7YUFDQSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUMvQixNQUFNLGNBQWMsR0FBRyxJQUFJLGFBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqRCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLFlBQVksQ0FBQzthQUNuQixHQUFHLENBQ0YsQ0FDRSxPQUF3QixFQUN4QixRQUEwQixFQUMxQixJQUEwQixFQUMxQixFQUFFO1lBQ0YsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQ0Y7YUFDQSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUMvQixRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDdkIsR0FBRyxDQUNGLENBQ0UsT0FBd0IsRUFDeEIsUUFBMEIsRUFDMUIsSUFBMEIsRUFDMUIsRUFBRTtZQUNGLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUNGO2FBQ0EsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFHLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDMUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBeERELGtDQXdEQztBQUVELE1BQU0sVUFBVSxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEVBQUU7SUFDOUMsSUFBSSxLQUFLLEdBQWUsRUFBRSxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksYUFBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUMifQ==