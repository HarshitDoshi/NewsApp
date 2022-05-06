"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendAnalytics = void 0;
const analytics_1 = require("firebase/analytics");
const backend_1 = require("./backend");
const backendAnalytics = (0, analytics_1.getAnalytics)(backend_1.backendApp);
exports.backendAnalytics = backendAnalytics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYW5hbHl0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUE2RDtBQUM3RCx1Q0FBdUM7QUFDdkMsTUFBTSxnQkFBZ0IsR0FBYyxJQUFBLHdCQUFZLEVBQUMsb0JBQVUsQ0FBQyxDQUFDO0FBRXBELDRDQUFnQiJ9