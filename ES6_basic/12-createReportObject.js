export default function createReportObject(employeesList) {
    return {
        allEmployees: { ...employeesList },
        getNumberOfDepartments(employeesList) {
            const count = Object.keys(employeesList);
            return count.length
        }
    }
}