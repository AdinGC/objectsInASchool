var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Joe","Cohn",11));
allStudents.push(new Student("Jane","Smith",12));
allStudents.push(new Student("Trent","Arrington",10));
allStudents.push(new Student("Becky","Powers",9));
allStudents.push(new Student("Jen","Ramirez",12));

allTeachers.push(new Teacher("Masha","Albrecht","Math"));
allTeachers.push(new Teacher("Nakia","Baird","Math"));
allTeachers.push(new Teacher("Keldon","Clegg","History"));
allTeachers.push(new Teacher("Matt","Albinson","CS"));
allTeachers.push(new Teacher("Carl","Rogers","English"));

// allSections.push(new Section("CS",3,allTeachers[2]));
//
// allSections[0].students = [allStudents[0],allStudents[1]];

var allItems = [allStudents,allTeachers,allSections];

console.log(allItems);