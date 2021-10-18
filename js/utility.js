let stringfyDate=(date)=>{
    const options = {days:"numeric", month:"short",year:"numeric"};
    const newDate = !date?"undefined":new date(Date.parse(date)).toLocaleDateString("en-GB",options);
    return newDate
}
const checkName = (name)=>{
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if(!nameRegex.test(name)){
        throw "Name is Incorrect";
    }
}
const checkStartDate = (startdate)=>{
    var today = new Date();
    if(today<startdate){
        throw "Start date is in the Future";
    }
    const minDate = new Date(today.setDate(today.getDate()-30));
    today = new date();
    if(startdate<minDate){
        throw "Start date is beyond 30 days"
    }
}