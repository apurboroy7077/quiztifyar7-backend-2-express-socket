import { adjustUserScoreAndData } from "../../../custom-functions-2/game/adjust-user-score/adjustUserScore.js";
import getGamingData from "../../../custom-functions-2/game/get-gaming-data/getGamingData.js";
export const submitAnswerController = async (data) => {
    const { roomId, answer, questionData, playerId } = data;
    await adjustUserScoreAndData(roomId, playerId, questionData, answer);
    const gameData = await getGamingData();
};
//# sourceMappingURL=submitAnswer.controller.js.map