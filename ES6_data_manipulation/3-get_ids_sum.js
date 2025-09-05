export default function getListStudents (studentList){
    const sumOfId = studentList.reduce((accumulator, item) => accumulator + item.id, 0 );
    return sumOfId;
}
