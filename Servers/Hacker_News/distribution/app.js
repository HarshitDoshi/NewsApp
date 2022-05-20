"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const logging_1 = require("./services/logging");
const cors_1 = __importDefault(require("cors"));
const users_routes_configuration_1 = require("./users/users.routes.configuration");
const stories_routes_configuration_1 = require("./stories/stories.routes.configuration");
const items_routes_configuration_1 = require("./items/items.routes.configuration");
const app = (0, express_1.default)();
const server = http.createServer(app);
const SERVER_PORT = 3108;
const routes = [];
app.use(express_1.default.json());
app.use((0, cors_1.default)());
routes.push(new items_routes_configuration_1.ItemsRoutes(app));
routes.push(new users_routes_configuration_1.UsersRoutes(app));
routes.push(new stories_routes_configuration_1.StoriesRoutes(app));
const SERVER_MESSAGE = `Server running at http://localhost:${SERVER_PORT}`;
app.get('/status', (request, response) => {
    response.status(200).json({ message: SERVER_MESSAGE });
});
app.get('/', (request, response) => {
    logging_1.logger.log('info', `${request.path}`);
    response.status(200).json({ message: SERVER_MESSAGE });
});
server.listen(SERVER_PORT, () => {
    routes.forEach((route) => {
        (0, logging_1.debugLogger)(`Routes configured for ${route.getName()}`);
    });
    console.log(SERVER_MESSAGE);
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsMkNBQTZCO0FBQzdCLGdEQUF5RDtBQUN6RCxnREFBd0I7QUFFeEIsbUZBQWlFO0FBQ2pFLHlGQUF1RTtBQUN2RSxtRkFBaUU7QUFFakUsTUFBTSxHQUFHLEdBQXdCLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQzNDLE1BQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQztBQUNqQyxNQUFNLE1BQU0sR0FBcUMsRUFBRSxDQUFDO0FBRXBELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO0FBRWhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSx3Q0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHdDQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksNENBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRXBDLE1BQU0sY0FBYyxHQUFHLHNDQUFzQyxXQUFXLEVBQUUsQ0FBQztBQUUzRSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQXdCLEVBQUUsUUFBMEIsRUFBRSxFQUFFO0lBQzFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQXdCLEVBQUUsUUFBMEIsRUFBRSxFQUFFO0lBQ3BFLGdCQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWdDLEVBQUUsRUFBRTtRQUNsRCxJQUFBLHFCQUFXLEVBQUMseUJBQXlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsR0FBRyxDQUFDIn0=