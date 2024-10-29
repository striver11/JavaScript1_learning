class Employee{
    constructor(name,id,salary){
        this.EmpName=name;
        this.EmpId=id;
        this.EmpSalary=salary
        console.log('constructor method : Employee Class')
    }
    
    info(){
        console.log(`
            **Employee Details**
            Employee Name:${this.EmpName}
            Employee Id:${this.EmpId}
            Employee Salary:${this.EmpSalary}`)
    }
}

class Manager extends Employee{
    constructor(name,id,salary,address){
        super(name,id,salary)
        this.EmpAddress=address;
    }

    info(){
        console.log(`
            **Manager Details**
            Manager Name: ${this.EmpName}
            Manager Id :${this.EmpId}
            Managers Salary : ${this.EmpSalary}
            Manager Address : ${this.EmpAddress}`)
    }

    //call the mehtod of parent class
   /*  super.info(); */
}

let manager=new Manager('Ram',12323,3423423.23,'goa')
console.log(manager)
manager.info();