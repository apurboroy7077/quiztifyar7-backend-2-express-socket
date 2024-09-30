import getGamingData from "../get-gaming-data/getGamingData.js";

export const getGamingDataOfRoom = async (roomId: string) => {
  return new Promise(async (resolve, reject) => {
    const wholeData = (await getGamingData()) as RoomDataArray;
    const matchedData = wholeData.filter((data) => data.roomId === roomId);
    if (matchedData.length > 0) {
      resolve(matchedData[0]);
    } else {
      resolve(null);
    }
  });
};
