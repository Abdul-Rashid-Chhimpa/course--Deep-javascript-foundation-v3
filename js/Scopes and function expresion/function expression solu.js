var staudentRecords = [
    { id: 1, name: "abdul", paid: true }
];

function getStudentById(studentId) {
    return staudentRecords.find(function matchId(record) {
        return (record.id == studentId);
    });

}
// console.log(staudentRecords);
// console.log(getStudentById);

var getStudentById = (studentId) => {
    return studentId;
}
var getStudentById = [
    { id: 100, name: "abdul" }
];
console.log(getStudentById.name);