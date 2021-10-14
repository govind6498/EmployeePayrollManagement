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
    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }
    get department() {
        return this._department;
    }

    set department(department) {
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
        let future=new Date();
        future.setDate(future.getDate()+30);
        if(startDate<new Date() || startDate<future)
            this._startDate = startDate;
        else 
            throw "***********Start date is Incorrect**********";
    }
    //method
    toString() {
        const format = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", format);
        return "Name = " + this.name + ", Gender = " + this.gender + ", ProfilePic = \"" + this.profilePic + "\", Department = [" + this.department + "], Salary = " + this.salary +
            ", StartDate = " + date + ", Note = \"" + this.note + "\"";
    }
}
