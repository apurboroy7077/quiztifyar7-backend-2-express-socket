export const giveDataAfterMovingToNextQuestion = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < data.length; i++) {
                const singleData = data[i];
                const usersData = singleData.usersData;
                const currentQuestion = singleData.currentQuestionData.question;
                const allQuestionsData = singleData.allQuestions;
                let doesAllUserHasAnsweredCurrentQuestion = false;
                let numberOfUserWhoAnsweredCurrentQuestion = 0;
                let does3secondsPassedSinceUserAnsweredLastQuestion = false;
                for (let i = 0; i < usersData.length; i++) {
                    const singleUserData = usersData[i];
                    const answeredQuestionData = singleUserData.answeredQuestion;
                    for (let i = 0; i < answeredQuestionData.length; i++) {
                        const singleAnsweredQuestionData = answeredQuestionData[i];
                        const questionOfSingleAnswer = singleAnsweredQuestionData.question;
                        if (questionOfSingleAnswer === currentQuestion) {
                            numberOfUserWhoAnsweredCurrentQuestion++;
                        }
                    }
                }
                // If all user answered the current question
                if (numberOfUserWhoAnsweredCurrentQuestion >= usersData.length) {
                    const lastAnsweredQuestionOfEveryUser = [];
                    for (let i = 0; i < usersData.length; i++) {
                        const singleUserData = usersData[i];
                        const answeredQuestionData = singleUserData.answeredQuestion;
                        const lastQuestion = answeredQuestionData[answeredQuestionData.length - 1];
                        lastAnsweredQuestionOfEveryUser.push(lastQuestion);
                    }
                    let does3SecondsPassedSinceEveryoneAnsweredLastQuestion = true;
                    for (let i = 0; i < lastAnsweredQuestionOfEveryUser.length; i++) {
                        const singleData = lastAnsweredQuestionOfEveryUser[i];
                        const timeStamp = singleData.timeStamp;
                        const timeToCross = timeStamp + 3000;
                        const currentTime = Date.now();
                        if (timeToCross > currentTime) {
                            does3SecondsPassedSinceEveryoneAnsweredLastQuestion = false;
                        }
                    }
                    if (does3SecondsPassedSinceEveryoneAnsweredLastQuestion) {
                        let currentQuestionIndex = 0;
                        for (let i = 0; i < allQuestionsData.length; i++) {
                            const singleQuestion = allQuestionsData[i].question;
                            if (singleQuestion === currentQuestion) {
                                currentQuestionIndex = i;
                            }
                        }
                        const nextQuestionIndex = currentQuestionIndex + 1;
                        const nextQuestion = allQuestionsData[nextQuestionIndex];
                        if (nextQuestion) {
                            singleData.currentQuestionData = nextQuestion;
                        }
                        else {
                            singleData.gameRunningStatus = "GAME_OVER";
                        }
                    }
                }
            }
            resolve(data);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
//# sourceMappingURL=giveDataAfterMovingToNextQuestion.js.map