"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendDatabaseReference = exports.backendDatabase = void 0;
const database_1 = require("firebase/database");
const backend_1 = require("./backend");
const backendDatabase = (0, database_1.getDatabase)(backend_1.backendApp);
exports.backendDatabase = backendDatabase;
const backendDatabaseReference = (0, database_1.ref)(backendDatabase);
exports.backendDatabaseReference = backendDatabaseReference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnREFLMkI7QUFDM0IsdUNBQXVDO0FBRXZDLE1BQU0sZUFBZSxHQUFhLElBQUEsc0JBQVcsRUFBQyxvQkFBVSxDQUFDLENBQUM7QUFHakQsMENBQWU7QUFGeEIsTUFBTSx3QkFBd0IsR0FBc0IsSUFBQSxjQUFHLEVBQUMsZUFBZSxDQUFDLENBQUM7QUFFL0MsNERBQXdCIn0=