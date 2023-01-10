"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const axios_1 = __importDefault(require("axios"));
const REDDIT_URL = 'https://www.reddit.com';
const API_URL = '/api';
const V1_URL = '/v1';
const ACCESS_TOKEN_URL = REDDIT_URL + API_URL + V1_URL + '/access_token';
class API {
    path;
    constructor(path) {
        this.path = path;
    }
    async fetchToken() {
        const returnValue = await axios_1.default.post(ACCESS_TOKEN_URL, 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        }).then((response) => response.data);
        return returnValue;
    }
}
exports.API = API;
const at = new API("access_token");
const atValue = at.fetchToken();
console.log('atValue', atValue);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmljZXMvQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUEwQjtBQUUxQixNQUFNLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQztBQUM1QyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsZUFBZSxDQUFDO0FBRXpFLE1BQWEsR0FBRztJQUNkLElBQUksQ0FBUztJQUViLFlBQVksSUFBWTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVU7UUFDZCxNQUFNLFdBQVcsR0FBRyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQ2xDLGdCQUFnQixFQUNoQiwrQkFBK0IsRUFDL0I7WUFDRSxPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLFNBQVMsTUFBTSxDQUFDLElBQUksQ0FDakMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsQ0FDdEUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3RCLGNBQWMsRUFBRSxpREFBaUQ7YUFDbEU7U0FDRixDQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBdEJELGtCQXNCQztBQUVELE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyJ9