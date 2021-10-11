class Employee{
    constructor(...params){
        this.name=params[0];
    }
    get name(){
        return this._name
    }
    set name(name){
        let nameRegex=RegExp("^[A-Z]{1}[a-zA-Z]{2,}$")
        if(nameRegex.test(name)){
            this._name = name;
        }
        else throw "----------Name is Incorrect------";
    }
    toString(){
        return "Name:"+this.name
    }
}
let employee= new Employee("Govind")
console.log(employee)
try{
    employee.name="govnd";
}
catch(e){
    console.error(e)
}