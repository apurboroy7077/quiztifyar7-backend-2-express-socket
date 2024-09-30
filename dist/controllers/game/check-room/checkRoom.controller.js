import { checkIfRoomExists } from "../../../custom-functions-2/game/check-if-room-exists/checkIfRoomExists.js";
export const checkRoomController = async (request, response) => {
    try {
        const receivedData = request.body;
        console.log("Check Room Request Received");
        const { roomId } = receivedData;
        await checkIfRoomExists(roomId);
        response.status(200).json({ _: "" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
//# sourceMappingURL=checkRoom.controller.js.map