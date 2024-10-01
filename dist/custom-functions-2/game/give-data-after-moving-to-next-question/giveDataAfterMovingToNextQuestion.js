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
                if (numberOfUserWhoAnsweredCurrentQuestion >= usersData.length) {
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