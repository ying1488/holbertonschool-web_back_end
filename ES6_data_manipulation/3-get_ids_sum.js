export default function getListStudents (studentList){
    const sumOfId = Array.reduce((accumulator, item) => accumulator + item.id, 0 );
    return sumOfId;
}
