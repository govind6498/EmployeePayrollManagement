let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem("editEmp")
});
const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
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
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Narayan Mahadevan',
            _gender: "male",
            _department: [
                "Engineering",
                "Finance"
            ],
            _salary: "520000",
            _startDate: "15 Oct 2021",
            _note: "Hello Narayan",
            id: new Date().getTime(),
            _profilePic: "../assets/profile3.webp"
        },
        {
            _name: 'Govind Singh',
            _gender: "male",
            _department: [
                "Manager"
            ],
            _salary: "500000",
            _startDate: "12 Nov 2021",
            _note: "",
            id: new Date().getTime() + 1,
            _profilePic: "../assets/profile2.webp"
        },
        {
            _name: 'Anoo Sing',
            _gender: "Female",
            _department: [
                "HR",
                "finance"
            ],
            _salary: "426000",
            _startDate: "10 December 2021",
            _note: "",
            id: new Date().getTime() + 1,
            _profilePic: "../assets/profile1.webp"
        }
    ];
    return empPayrollListLocal;
}