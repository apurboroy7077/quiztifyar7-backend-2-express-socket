import saveGamingData from "../../../custom-functions/file-system/saveGamingData.js";
import getGamingData from "../get-gaming-data/getGamingData.js";
import { giveDataAfterMovingToNextQuestion } from "../give-data-after-moving-to-next-question/giveDataAfterMovingToNextQuestion.js";
import makeCountDown from "./make-countdown/makeCountDown.js";
import moveToNextQuestion from "./move-to-next-question/moveToNextQuestion.js";
import removeRoomWithoutUsers from "./remove-room-without-users/removeRoomWithoutUsers.js";
import removeUnactivePlayer from "./remove-unactive-player/removeUnactivePlayer.js";

const refineGamingData = async () => {
  try {
    const gamingData = await getGamingData();
    const dataAfterRemovingUnactivePlayer = removeUnactivePlayer(gamingData);
    const dataAfterRemovingRoomWithoutUsers = removeRoomWithoutUsers(
      dataAfterRemovingUnactivePlayer
    );
    // const dataAfterMakingCountdown = makeCountDown(
    //   dataAfterRemovingRoomWithoutUsers
    // );
    // const dataAfterMovingToNextQuestion = moveToNextQuestion(
    //   dataAfterMakingCountdown
    // );
    const dataAfterMovingToNextQuestion: any =
      await giveDataAfterMovingToNextQuestion(
        dataAfterRemovingRoomWithoutUsers
      );

    await saveGamingData(dataAfterMovingToNextQuestion);
  } catch (error) {
    console.log(error);
  }
};

export default refineGamingData;
//
