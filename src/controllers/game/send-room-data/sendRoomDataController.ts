import { getGamingDataOfRoom } from "../../../custom-functions-2/game/get-gaming-data-according-to-room/getGamingDataOfRoom.js";
import updatePlayerRequestTimestamp from "../../../custom-functions-2/game/update-player-request-timestamp/updatePlayerRequestTimestamp.js";

export const sendRoomDataController = async (data: any, socket: any) => {
  try {
    const { roomId, timeStamp, playerId } = data;
    const roomData = await getGamingDataOfRoom(roomId);
    await updatePlayerRequestTimestamp(roomId, playerId, timeStamp);

    socket.emit("clientSideGameDataReceiver", roomData);
  } catch (error) {
    console.log(error);
  }
};
