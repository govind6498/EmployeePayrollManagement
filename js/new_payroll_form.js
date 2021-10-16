let isUpdate = false;
let employeePayrollObj={};
window.addEventListener("DOMContentLoaded", (event) => {
    let name = document.getElementById("name")
    const textError = document.querySelector(".text-error");
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
            var pointer = document.getElementById("name");
            pointer.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }
    });
    const date = document.querySelector("#date");
    date.addEventListener("input",function(){
        const startDate = new Date(Date.parse(getInputValueById("#day")+" "+
                                            getInputValueById("#month")+" "+
                                            getInputValueById("#year")));
        try{
            (new EmployeePayrollData()).startDate = startDate;
                setTextValue(".date-error","");
        }
        catch(e){
            setTextValue(".date-error",e)
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
    checkForUpdate();
});

const save = () => {
    let employeePayrollData;
    try {
        employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }
    catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById("#name");
    }
    catch (e) {
        setTextValue(".text-error", e);
        throw e;
    }

    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById("#salary");
    employeePayrollData.notes = getInputValueById("#notes");
    let date = getInputValueById("#day") + " " + getInputValueById("#month") + " " +
        getInputValueById("#year");
    employeePayrollData.startDate = new Date(Date.parse(date));
    return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = new Array();
    allItems.forEach(item => {
        if (item.checked)
            selectedItems.push(item.value);
    });
    return selectedItems;
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value
    return value;
}
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const setForm=()=>{
    setvalue("#name",employeePayrollObj._name);
    setSelectedValues('[name=profile]',employeePayrollObj._profilePic);
    setSelectedValues('[name=gender]',employeePayrollObj._gender);
    setSelectedValues('[name=department]',employeePayrollObj._department);
    setvalue("#salary",employeePayrollObj._salary);
    setTextValue(".salary-output",employeePayrollObj._salary);
    setValue("#notes",employeePayrollObj._notes);
    let date = stringfyDate(employeePayrollObj._startDate).split();
    setvalue("#day",date[0]);
    setValue("#month",date[1]);
    setvalue("#year",day[2]);
}
// USE CASE 4
function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    }
    else {
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}
// USE CSE 5
const resetForm = () => {
    setvalue("#name", "");
    unsetSelectValues('[name=profile]');
    unsetSelectValues('[name=gender]');
    unsetSelectValues('[name=department');
    setValue("#salary","300000");
    setValue("#notes");
    setValue("#day", "1");
    setValue("#month", "january");
    setValue("#Year", "2020");
}
const setSelectedValues = (propertyValue,value)=>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        if(Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked = true;
            }
            else if(item.value === value){
                item.checked = true
            }
        }
    });
}
const unsetSelectValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach((item) => {
        item.checked = false
    });
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
const setvalue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
const setSelectedIndex = (id,index)=>{
    const element = document.querySelector(id);
    element.selectedIndex = index;
}
const checkForUpdate=()=>{
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson?true:false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
}
