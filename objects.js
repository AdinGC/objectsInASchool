var id = 0;

//student object constructor
function Student(firstName, lastName, grade){
    this.id=id++;
    this.firstName=firstName;
    this.lastName=lastName;
    this.grade=grade;

}
//teacher object constructor
function Teacher(firstName, lastName, subject){
    this.id=id++;
    this.firstName=firstName;
    this.lastName=lastName;
    this.subject=subject;
}

//section object constructor
function Section (name, maxSize, teacher){
    var i=0
    this.id=id++;
    this.name=name;
    this.maxSize=maxSize;
    this.currentSize=i;
    this.students=[];
    this.teacher=teacher;
    //add student function
    this.addStudent=function(student){
        this.students.push(student);
        i+=1
        console.log(this.students);
    };



    this.removeStudent=function(student){
        for (var i=0; i<this.students.length; i++){
            if (this.students[i].id==student.id){
                this.students.splice(i);
                console.log(this.students);


            }
        }
    }



    this.sectionSeatsRemaining= this.maxSize-this.currentSize;
}


