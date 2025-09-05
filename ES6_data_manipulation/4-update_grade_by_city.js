export default function updateStudentGradeByCity(studentList, city, newGrades = 'N/A'){
    const filteredStudents = studentList.filter((student) => student.location == city);

    const updatedStudents = filteredStudents.map((student) =>{
        const updatedGrades = newGrades.find((entry)=> entry.studentId == student.id);
        const updatedStudent = {...student};
        if(updatedGrades) {
            updatedStudent.grade = updatedGrades.grade;
        }else{
            updatedStudent.grade = 'N/A';
        }
        return updatedStudent;
    });
    return updatedStudents
}