
export default function getLstStudents(arr) {
    if (!Array.isArray(arr)){
        return [];
    }
    const ids =arr.map((obj)=> obj.id);
    return ids;  // new array
}