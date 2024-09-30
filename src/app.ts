import express from "express";

import { connectDB } from "./custom-functions/database/connectDB.js";

import cors from "cors";
import morgan from "morgan";

// import { connectToMySqlDatabase } from "./custom-functions/database/mysql/connectMySql.js";

import { createServer } from "http";
import { Server } from "socket.io";

import { authenticationRouter } from "./routes/express/authentication/authenticationRoutes.route.js";
import { testingRouter } from "./routes/express/test/testingRouter.route.js";
import { productsRouter } from "./routes/express/products/products.route.js";
import { userActivityRouter } from "./routes/express/user-activity/userActivity.route.js";
import { adminRouter } from "./routes/express/admin/admin.route.js";
import { projectsRouter } from "./routes/express/projects/projects.route.js";
import gameRouter from "./routes/express/game/game.route.js";
import { mySqlRouter } from "./routes/express/mysql/mysql.route.js";
import { socketGameRoute } from "./routes/socket/game/socketGame.route.js";
import { connectToMySqlDatabase } from "./custom-functions/database/mysql/connectMySql.js";

const app = express(); // Create an Express app

// USING SOME BASIC PACKAGES STARTS-----------------------------------------------------------------------------------------------------------------------------

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// USING SOME BASIC PACKAGES ENDS-----------------------------------------------------------------------------------------------------------------------------
// USING SOME CUSTOM MIDDLEWARE STARTS------------------------------------------------------------------------------------------------------------------
app.use((req, res, next) => {
  setTimeout(next, 0); // Introduce a delay (adjust time if needed) before passing control to the next middleware
});
// USING SOME CUSTOM MIDDLEWARE ENDS------------------------------------------------------------------------------------------------------------------

// USING ROUTES STARTS------------------------------------------------------------------------------------------------------------------------
app.use(authenticationRouter);
app.use(testingRouter);
app.use(productsRouter);
app.use(userActivityRouter);
app.use(adminRouter);
app.use(projectsRouter);
app.use(gameRouter);
app.use(mySqlRouter);
// USING ROUTES ENDS------------------------------------------------------------------------------------------------------------------------

// connectDB();
// connectToMySqlDatabase();
app.get("/", (request, response) => {
  response.send("Server Started");
});

// ATTACH SOCKET AND EXPRESS SERVER-----------------------------------------------------------------------------------------------------------------------------
const myExpressServer = createServer(app);
const mySocketServer = new Server(myExpressServer, {
  cors: {
    origin: "*",
  },
});
mySocketServer.on("connect", (socket) => {
  socketGameRoute(socket);
});
export default myExpressServer;
