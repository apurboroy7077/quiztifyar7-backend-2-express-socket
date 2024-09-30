import { startGameOfTheRoomController } from "../../../controllers/game/start-game/startGame.js";
import { sendRoomDataController } from "../../../controllers/game/send-room-data/sendRoomDataController.js";
import { submitAnswerController } from "../../../controllers/game/submit-answer/submitAnswer.controller.js";
export const socketGameRoute = (socket) => {
    socket.on("startGame", startGameOfTheRoomController);
    socket.on("roomDataRequest", (data) => {
        sendRoomDataController(data, socket);
    });
    socket.on("submitAnswer", (data) => {
        submitAnswerController(data);
    });
};
//# sourceMappingURL=socketGame.route.js.map