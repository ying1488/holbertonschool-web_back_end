export default function getLstStudents ( studentList, city){
    return studentList.filter((c) => c.location === city);
}
