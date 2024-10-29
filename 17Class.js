class Student{
    //constructor method

    constructor(name,age,course){
        this.StudName=name;
        this.StudAge=age;
        this.Course=course;
        console.log('Constuctor Method')
    }

    Message(){
        console.log(`Hello ${this.StudName}, you have successfully enrolled in ${this.Course} course`)
    }
}

let student1=new Student('praveen',25,'javascript')
console.log(student1)
student1.Message();

let student2=new Student('rajesh',23,'Java')
console.log(student1)
student1.Message();