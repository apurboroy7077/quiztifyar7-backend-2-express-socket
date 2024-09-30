import { DefaultEventsMap, Socket } from "socket.io";
import startGame from "../../../custom-functions-2/game/start-game-function/startGame.js";
import { startGameOfTheRoomController } from "../../../controllers/game/start-game/startGame.js";
import { sendRoomDataController } from "../../../controllers/game/send-room-data/sendRoomDataController.js";
import { submitAnswerController } from "../../../controllers/game/submit-answer/submitAnswer.controller.js";

export const socketGameRoute = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  socket.on("startGame", startGameOfTheRoomController);
  socket.on("roomDataRequest", (data: any) => {
    sendRoomDataController(data, socket);
  });
  socket.on("submitAnswer", (data: any) => {
    submitAnswerController(data);
  });
};
