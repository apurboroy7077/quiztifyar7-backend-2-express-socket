import getGamingData from "../../../custom-functions-2/game/get-gaming-data/getGamingData.js";
import saveGamingData from "../../../custom-functions/file-system/saveGamingData.js";
export const startGameOfTheRoomController = async (data) => {
    const { roomId } = data;
    const dataOfGame = await getGamingData();
    for (let i = 0; i < dataOfGame.length; i++) {
        const dataOfSingleRoom = dataOfGame[i];
        if (dataOfSingleRoom.roomId === roomId) {
            dataOfSingleRoom.gameRunningStatus = "RUNNING";
        }
    }
    await saveGamingData(dataOfGame);
};
//# sourceMappingURL=startGame.js.map