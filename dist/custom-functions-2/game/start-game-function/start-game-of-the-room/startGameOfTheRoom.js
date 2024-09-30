import getGamingData from "../../get-gaming-data/getGamingData.js";
import saveGamingData from "../../../../custom-functions/file-system/saveGamingData.js";
const startGameOfTheRoom = async (roomId) => {
    const dataOfGame = await getGamingData();
    for (let i = 0; i < dataOfGame.length; i++) {
        const dataOfSingleRoom = dataOfGame[i];
        if (dataOfSingleRoom.roomId === roomId) {
            dataOfSingleRoom.gameRunningStatus = "RUNNING";
        }
    }
    await saveGamingData(dataOfGame);
};
export default startGameOfTheRoom;
//# sourceMappingURL=startGameOfTheRoom.js.map