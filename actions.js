var allStudents=[]
var allTeachers=[]
var allSections=[]

//all display container functions
function start() {
    changeTeacher();
    changeSection();
    changeStudent();
    var dis = document.getElementById("container1").style.display;

    if(dis == "inline"){
        document.getElementById("container1").style.display = "none";
    }else{

        document.getElementById("container1").style.display = "inline";
    }
}

function displayAddStudent(){
    var dis = document.getElementById("container2").style.display;

    if(dis == "inline"){
        document.getElementById("container2").style.display = "none";
    }else{

        document.getElementById("container2").style.display = "inline";
    }

}
function displayAddTeacher() {
    var dis = document.getElementById("container3").style.display;

    if(dis == "inline"){
        document.getElementById("container3").style.display = "none";
    }else{

        document.getElementById("container3").style.display = "inline";
    }
}
function displayAddSection() {
    var dis = document.getElementById("container4").style.display;

    if(dis == "inline"){
        document.getElementById("container4").style.display = "none";
    }else{

        document.getElementById("container4").style.display = "inline";
    }
}
function displayAddStudentToSection() {
    var dis = document.getElementById("container5").style.display;

    if(dis == "inline"){
        document.getElementById("container5").style.display = "none";
    }else{

        document.getElementById("container5").style.display = "inline";
    }
}
function displayRemoveStudentFromSection() {
    var dis = document.getElementById("container6").style.display;

    if(dis == "inline"){
        document.getElementById("container6").style.display = "none";
    }else{

        document.getElementById("container6").style.display = "inline";
    }
}


function addStudent(){

    var firstName=document.getElementById("inputStudentFirstName").value;
    var lastName=document.getElementById("inputStudentLasttName").value;
    var grade=(document.getElementById("inputStudentGrade")).value;
    console.log(grade);
    allStudents.push(new Student(firstName, lastName, grade));
    changeStudent();
    console.log(allStudents);
}

function addTeacher(){
    var firstName=document.getElementById("inputTeacherFirstName").value;
    var lastName=document.getElementById("inputTeacherLastName").value;
    var subject=document.getElementById("inputTeacherSubject").value;
    allTeachers.push(new Teacher(firstName, lastName, subject));
    changeTeacher();
    console.log(allTeachers);
}

function addSection(){
    var name=document.getElementById("inputSectionName").value;
    var maxSize=document.getElementById("inputSectionMaxSize").value;
    var teacher=idToTeacher(document.getElementById("inputSectionTeacher").value);
    console.log(teacher);

    allSections.push(new Section(name, maxSize, teacher));
    changeSection();
    console.log(allSections);
}

// function addStudentToSection(student,sectionId)
// function removeStudentFromSection(student,sectionId)
// function listSectionInfo(sectionId)

//Drop down for students
function changeStudent(){
    document.getElementById("studentToAdd").innerHTML="";
    for(var i=0; i<(allStudents.length); i++){
        var string= "<option value=" + allStudents[i].id  +  ">"+ allStudents[i].firstName + "</option>";
        document.getElementById("studentToAdd").innerHTML+=string;
        document.getElementById("studentToRemove").innerHTML+=string;

    }

}

//Drop down for sections

function changeSection(){
    document.getElementById("sectionToAddTo").innerHTML="";
    for(var i=0; i<(allSections.length); i++){
        var string= "<option value=" + allSections[i].id  +  ">"+ allSections[i].name + "</option>";
        document.getElementById("sectionToAddTo").innerHTML+=string;
        document.getElementById("sectionToRemoveFrom").innerHTML+=string;

    }

}

//Drop down for teachers

function changeTeacher(){
    document.getElementById("inputSectionTeacher").innerHTML="";
    for(var i=0; i<(allTeachers.length); i++){
        var string= "<option value=" + allTeachers[i].id  +  ">"+ allTeachers[i].firstName + "</option>";
        document.getElementById("inputSectionTeacher").innerHTML+=string;
    }

}

//converts id from student dropdown into an object to pass to addStudent to section function
function idToStudent(id){
    for (var i=0; i<allStudents.length; i++){
        if (allStudents[i].id==id){
            return(allStudents[i])
        }
    }
}



//converts id from section dropdown into an object to pass to addStudent to section function
function idToSection(id){
    for (var i=0; i<allSections.length; i++){
        if (allSections[i].id==id){
            return(allSections[i]);
        }
    }
}

//converts id from teacher into an object
function idToTeacher(id){
    for (var i=0; i<allTeachers.length; i++){
        if (allTeachers[i].id==id){
            return(allTeachers[i]);
        }
    }
}

//On button click for add student to section, this pulls object of the student and section and passes them to the object constructor
function addStudentToSection(){
    var stud=idToStudent((document.getElementById('studentToAdd').value));
    var sect=idToSection((document.getElementById('sectionToAddTo').value));
    sect.addStudent(stud);

}

function removeStudentFromSection() {
    var stud = idToStudent((document.getElementById('studentToRemove').value));
    var sect = idToSection((document.getElementById('sectionToRemoveFrom').value));
    sect.removeStudent(stud);
}

//list teachers
function listTeachers(){

    var html="<table border='1'>";

    for (var i=0; i<allTeachers.length; i++){
        html+="<tr>";
        html+="<td>" + allTeachers[i].firstName + "</td>";
        html+="<td>" + allTeachers[i].lastName + "</td>";
        html+="<td>" + allTeachers[i].subject + "</td>";
        html+="</td>"
    }
    html+="</table>"
    document.getElementById("printTeacherList").innerHTML=html
    var dis = document.getElementById("container7").style.display;

    if(dis == "inline"){
        document.getElementById("container7").style.display = "none";
    }else {

        document.getElementById("container7").style.display = "inline";
    }
}
//list students
function listStudents(){

    var html="<table border='1'>";

    for (var i=0; i<allStudents.length; i++){
        html+="<tr>";
        html+="<td>" + allStudents[i].firstName + "</td>";
        html+="<td>" + allStudents[i].lastName + "</td>";
        html+="<td>" + allStudents[i].grade + "</td>";
        html+="</td>"
    }
    html+="</table>"
    document.getElementById("printStudentList").innerHTML=html
    var dis = document.getElementById("container8").style.display;

    if(dis == "inline"){
        document.getElementById("container8").style.display = "none";
    }else {

        document.getElementById("container8").style.display = "inline";
    }
}

//generates list of students in section for list section function
function studentList(section){
   var output="";
    for (var i=0; i<section.students.length; i++){
        output+=section.students[i].firstName + ", ";
    }
    console.log(output);

    return output;

}
//list sections
function listSections(){

    var html="<table border='1'>";

    for (var i=0; i<allSections.length; i++){
        html+="<tr>";
        html+="<td>" + allSections[i].name + "</td>";
        html+="<td>" + allSections[i].maxSize + "</td>";
        html+="<td>" + allSections[i].currentSize + "</td>";
        html+="<td>" + studentList(allSections[i]) + "</td>";
        html+="<td>" + allSections[i].teacher.firstName + "</td>";

        html+="</td>"
    }
    html+="</table>"
    document.getElementById("printSectionList").innerHTML=html;
    var dis = document.getElementById("container9").style.display;

    if(dis == "inline"){
        document.getElementById("container9").style.display = "none";
    }else {

        document.getElementById("container9").style.display = "inline";
    }
}