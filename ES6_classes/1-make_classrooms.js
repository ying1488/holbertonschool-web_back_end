import ClassRoom from "./0-classroom.js";

export default function initializeRooms(){
    const ClassRoomArray = [];
    const classRoomOne = new ClassRoom(19);
    const classRoomTwo = new ClassRoom(20);
    const classRoomThree = new ClassRoom(34);

    ClassRoomArray.push(classRoomOne, classRoomTwo, classRoomThree);

    return ClassRoomArray;
};
