import saveGamingData from "../../../custom-functions/file-system/saveGamingData.js";
import getGamingData from "../get-gaming-data/getGamingData.js";

export const adjustUserScoreAndData = (
  roomId: string,
  playerId: string,
  questionData: any,
  answerOfUser: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const gamingData = await getGamingData();
      let thisRoomData: any;
      for (let i = 0; i < gamingData.length; i++) {
        const singleData = gamingData[i];
        if (singleData.roomId === roomId) {
          thisRoomData = singleData;
        }
      }
      const usersData = thisRoomData.usersData;
      let dataOfThisUser: any;
      for (let i = 0; i < usersData.length; i++) {
        const singleUserData = usersData[i];

        if (playerId === singleUserData.id) {
          dataOfThisUser = singleUserData;
        }
      }

      const question = questionData.question;
      const isCorrect = questionData.correctAnswer === answerOfUser;
      const timeStamp = Date.now();
      const thisQuestionHistory = {
        question,
        isCorrect,
        timeStamp,
        answerOfUser,
        correctAnswer: questionData.correctAnswer,
      };
      if (isCorrect) {
        dataOfThisUser.score = dataOfThisUser.score + 5;
      }
      dataOfThisUser.answeredQuestion = [
        ...dataOfThisUser.answeredQuestion,
        thisQuestionHistory,
      ];

      await saveGamingData(gamingData);
      resolve("");
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
