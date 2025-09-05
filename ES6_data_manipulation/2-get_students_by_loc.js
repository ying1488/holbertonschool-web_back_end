export default function getListStudents ( studentList, city){
    return studentList.filter((c) => c.location === city);
}
