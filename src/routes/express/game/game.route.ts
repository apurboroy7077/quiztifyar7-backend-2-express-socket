import express from "express";
import createRoomController from "../../../controllers/game/createRoom/createRoomController.js";
import joinRoomController from "../../../controllers/game/join-room/joinRoomController.js";
import { checkRoomController } from "../../../controllers/game/check-room/checkRoom.controller.js";
const gameRouter = express.Router();

gameRouter.post("/create-room", createRoomController);
gameRouter.post("/join-room", joinRoomController);
gameRouter.post("/check-room", checkRoomController);
export default gameRouter;
