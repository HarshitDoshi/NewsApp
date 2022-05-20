"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const database_1 = require("./database");
const database_2 = require("firebase/database");
class API {
    path;
    constructor(path) {
        this.path = path;
    }
    async fetch(path = this.path) {
        const returnValue = await (0, database_2.get)((0, database_2.child)(database_1.backendDatabaseReference, `v0${path}`))
            .then((snapshot) => {
            if (snapshot.exists()) {
                const response = {
                    message: 'Data available!',
                    payload: snapshot.val(),
                };
                return response;
            }
            else {
                const response = {
                    message: 'No data available!',
                    payload: [],
                };
                return response;
            }
        })
            .catch((error) => {
            const response = {
                message: error.toString(),
                payload: [],
            };
            return response;
        });
        return returnValue;
    }
    async fetchItems(IDs) {
        let items = [];
        for await (const ID of IDs.map(async (ID) => {
            let item = await this.fetch(`/item/${ID}`);
            let itemPayload = item.payload;
            if (itemPayload.kids) {
                const kids = await this.fetchItems(itemPayload.kids);
                let comments = kids.map((kid) => {
                    const comment = kid.payload;
                    return comment;
                });
                itemPayload.comments = comments;
            }
            return item;
        })) {
            items.push(ID);
        }
        return items;
    }
}
exports.API = API;
exports.default = API;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzRDtBQUN0RCxnREFBZ0Y7QUFHaEYsTUFBYSxHQUFHO0lBQ2QsSUFBSSxDQUFTO0lBRWIsWUFBWSxJQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQWUsSUFBSSxDQUFDLElBQUk7UUFDbEMsTUFBTSxXQUFXLEdBQW9CLE1BQU0sSUFBQSxjQUFHLEVBQzVDLElBQUEsZ0JBQUssRUFBQyxtQ0FBd0IsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLENBQzdDO2FBQ0UsSUFBSSxDQUFDLENBQUMsUUFBc0IsRUFBRSxFQUFFO1lBQy9CLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNyQixNQUFNLFFBQVEsR0FBb0I7b0JBQ2hDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFO2lCQUN4QixDQUFDO2dCQUNGLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLE1BQU0sUUFBUSxHQUFvQjtvQkFDaEMsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsT0FBTyxFQUFFLEVBQUU7aUJBQ1osQ0FBQztnQkFDRixPQUFPLFFBQVEsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2YsTUFBTSxRQUFRLEdBQW9CO2dCQUNoQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDekIsT0FBTyxFQUFFLEVBQUU7YUFDWixDQUFDO1lBQ0YsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFrQjtRQUNqQyxJQUFJLEtBQUssR0FBMkIsRUFBRSxDQUFDO1FBQ3ZDLElBQUksS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQzFDLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQW1CLENBQUM7WUFDM0MsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFO2dCQUNwQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQzlCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFtQixDQUFDO29CQUN4QyxPQUFPLE9BQU8sQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxFQUFFO1lBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBdkRELGtCQXVEQztBQUVELGtCQUFlLEdBQUcsQ0FBQyJ9