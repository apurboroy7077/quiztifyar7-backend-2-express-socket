import { Socket } from "socket.io";
import startGameOfTheRoom from "./start-game-of-the-room/startGameOfTheRoom.js";
import getGamingData from "../get-gaming-data/getGamingData.js";
import saveGamingData from "../../../custom-functions/file-system/saveGamingData.js";

type dataFromClientType = {
  roomId: string;
  playerId: string;
};

const startGame = async (dataFromClient: dataFromClientType) => {
  const { roomId, playerId } = dataFromClient;

  const dataOfGame = await getGamingData();
  for (let i = 0; i < dataOfGame.length; i++) {
    const dataOfSingleRoom = dataOfGame[i];
    if (dataOfSingleRoom.roomId === roomId) {
      dataOfSingleRoom.gameRunningStatus = "RUNNING";
    }
  }
  await saveGamingData(dataOfGame);
};

export default startGame;
