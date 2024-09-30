import saveGamingData from "../../../../custom-functions/file-system/saveGamingData.js";
import getGamingData from "../../get-gaming-data/getGamingData.js";

const stopTheGameOfTheRoom = async (roomId: string) => {
  const gameData = await getGamingData();
  for (let i = 0; i < gameData.length; i++) {
    const singleRoomData = gameData[i];
    if (singleRoomData.roomId === roomId) {
      singleRoomData.gameRunningStatus = "NOT_RUNNING";
    }
  }
  await saveGamingData(gameData);
};

export default stopTheGameOfTheRoom;
