class EmployeePayrollData{
    //getter and setter method
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp("^[A-Z][a-zA-Z]{2,}$");
        if(nameRegex.test(name)){
            this._name = name;
        }
        else throw "Name is Incorrect!";
    }
    get profilePic(){
        return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }
    get department(){
        this._department;
    }
    set department(department){
        this._department = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes = notes;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        // let difference = Date.now()-startDate;
        // difference = Math.ceil(difference/(1000*60*60*24));
        // if(difference>30 || difference<0){
        //     throw "Start Date is Invalid";
        // }
        // else{
        //     this.startDate = startDate;
        // }
        let future=new Date();
        future.setDate(future.getDate()+30);
        if(startDate<new Date() || startDate<future)
            this._startDate = startDate;
        else 
            throw "***********Start date is Incorrect**********";
    }
    //method
    toString(){
        const options = {year:"numeric",month:'long',day:"numeric"};
        const empDate = this.startDate==undefined?"undefined":this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+", name="+this.name+", gender="+this.gender+", profilePic="+
                    this.profilePic+", department="+this.department+", salary="+this.salary+", startDate="+empDate+", notes="+this.notes;

    }
}
