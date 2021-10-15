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

    const salary = document.querySelector('#salary');
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
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
    setValue("#salary");
    setValue("#notes");
    setValue("#day", "1");
    setValue("#month", "january");
    setValue("#Year", "2020");
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
