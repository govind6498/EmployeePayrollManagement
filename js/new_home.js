let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    if (site_properties.use_local_storage.match("true")) {
        getEmployeePayrollDataFromStorage();
    }
    else {
        getEmployeePayrollDataFromServer();
    }
});
const getEmployeePayrollDataFromStorage = () => {
    empPayrollList = localStorage.getItem("EmployeePayrollList") ? JSON.parse(localStorage.getItem("EmployeePayrollList")) : []
    processEmployeePayrollDataResponse();
}
const processEmployeePayrollDataResponse = () => {
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem("editEmp");
}
const getEmployeePayrollDataFromServer = () => {
    makeServiceCall("GET", site_properties.server_url, true)
        .then(ResponseText => {
            empPayrollList = JSON.parse(ResponseText);
            processEmployeePayrollDataResponse();
        })
        .catch(error => {
            console.log("GET Error Status:" + JSON.stringify(error));
            empPayrollList = [];
            processEmployeePayrollDataResponse();
        });
}
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
        const date = new Date(empPayrollData._startDate);
        const month = date.toLocaleString('default', { month: 'short' });
        let dateString = date.getDate() + " " + month + " " + date.getFullYear();
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile"  src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${(getDeptHtml(empPayrollData._department))}</td>
            <td>₹ ${empPayrollData._salary}</td>
            <td>${dateString}</td>
            <td>
                <img id="${empPayrollData.id}" onclick="remove(this)" alt="delete" src="../assets/delete.png">
                <img id="${empPayrollData.id}" alt="edit" onclick="update(this)" src="../assets/edit.png">
            </td>
        </tr>
      `;
    }
    document.querySelector(".table").innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class="deptartment">${dept}</div>`
    }
    return deptHtml;
}
const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData.id == node.id);
    if (!empPayrollData) return;
    const index = empPayrollList
        .map(empData => empData.id)
        .indexOf(empPayrollData.id);
    empPayrollList.splice(index, 1, employeePayrollObj);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}
const update = (node) => {
    let employeePayrollData = empPayrollList.find(empData => empData._id == node._id)
    if (!employeePayrollData) return;
    localStorage.setItem("editEmp", JSON.stringify(employeePayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
}

