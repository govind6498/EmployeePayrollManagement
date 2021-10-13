window.addEventListener("DOMContentLoaded",(event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector(".text-error");
    name.addEventListener('input',function(){
        if(name.lenght == 0){
            textError.textContent ="";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent ="";
        }
        catch(e){
            textError.textContent =e;
        }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    })
});

const save=()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
    }
    catch(e){
        return;
    }
}
const createEmployeePayroll=()=>{
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById("#name");
    }
    catch(e){
        setTextValue(".text-error",e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.department = getSelectedValues("[name=department]").pop();
    employeePayrollData.salary = getSelectedValues("#salary");
    employeePayrollData.note = getSelectedValues("#notes");
    let date = getInputValueById("#day")+" "+getInputValueById("#month")+" "+
                getInputValueById("#year");
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues = (propertyValue)=>{
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item=>{
        if(item.chacked) selItems.push(item.value);
    });
    return selItems;
}
const getInputValueById = (id)=>{
    let value = document.querySelector(id).value
    return value;
}