"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutesConfiguration = void 0;
class CommonRoutesConfiguration {
    app;
    name;
    constructor(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
}
exports.CommonRoutesConfiguration = CommonRoutesConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnJvdXRlcy5jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29tbW9uL2NvbW1vbi5yb3V0ZXMuY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFzQix5QkFBeUI7SUFDN0MsR0FBRyxDQUFzQjtJQUN6QixJQUFJLENBQVM7SUFFYixZQUFZLEdBQXdCLEVBQUUsSUFBWTtRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0NBR0Y7QUFmRCw4REFlQyJ9