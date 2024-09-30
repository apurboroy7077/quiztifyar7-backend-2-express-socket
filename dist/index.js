import myExpressServer from "./app.js";
import refineGamingData from "./custom-functions-2/game/refine-gaming-data/refineGamingData.js";
import { EXPRESS_SERVER_PORT } from "./data/quiz-game/environment-variable.js";
myExpressServer.listen(EXPRESS_SERVER_PORT, () => {
    console.log(`Express and Socket both server started at port http://localhost:${EXPRESS_SERVER_PORT}`);
    setInterval(() => {
        refineGamingData();
    }, 1000);
});
export default myExpressServer;
//# sourceMappingURL=index.js.map