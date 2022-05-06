"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const database_1 = require("./database");
const database_2 = require("firebase/database");
const API = async (path) => {
    const childDatabaseReference = (0, database_2.child)(database_1.backendDatabaseReference, `v0${path}`);
    const returnValue = await (0, database_2.get)(childDatabaseReference)
        .then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.toJSON());
            return snapshot.val();
        }
        else {
            return 'No data available!';
        }
    })
        .catch((error) => {
        console.error({ error });
        return error;
    });
    return returnValue;
};
exports.API = API;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzRDtBQUN0RCxnREFBNkQ7QUFFN0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFFO0lBQ2pDLE1BQU0sc0JBQXNCLEdBQUcsSUFBQSxnQkFBSyxFQUFDLG1DQUF3QixFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RSxNQUFNLFdBQVcsR0FBUSxNQUFNLElBQUEsY0FBRyxFQUFDLHNCQUFzQixDQUFDO1NBQ3ZELElBQUksQ0FBQyxDQUFDLFFBQXNCLEVBQUUsRUFBRTtRQUMvQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLG9CQUFvQixDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN6QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0wsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRU8sa0JBQUcifQ==