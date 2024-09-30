import getGamingData from "../get-gaming-data/getGamingData.js";
export const checkIfRoomExists = (roomId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await getGamingData();
            let matchingRoom = [];
            for (let i = 0; i < data.length; i++) {
                const singleRoomData = data[i];
                const singleRoomId = singleRoomData.roomId;
                if (singleRoomId === roomId) {
                    matchingRoom.push(singleRoomData);
                }
            }
            if (matchingRoom.length > 0) {
                resolve("Room Exists.");
            }
            else {
                reject("Room Does not Exists.");
            }
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
//# sourceMappingURL=checkIfRoomExists.js.map