const removeUnactivePlayer = (gameData: any) => {
  for (let i = 0; i < gameData.length; i++) {
    const roomData = gameData[i];
    const processedUsersData = [] as any;
    for (let i = 0; i < roomData.usersData.length; i++) {
      const singleUserData = roomData.usersData[i];
      const lastRequestTimeStamp = singleUserData.lastRequestTimeStamp;
      const currentTimeStamp = Date.now();
      const passedTimeStamp = currentTimeStamp - lastRequestTimeStamp;
      const differenceInSeconds = Math.floor(passedTimeStamp / 1000);
      if (differenceInSeconds < 60) {
        processedUsersData.push(singleUserData);
      }
    }
    roomData.usersData = processedUsersData;
  }
  return gameData;
};

export default removeUnactivePlayer;
