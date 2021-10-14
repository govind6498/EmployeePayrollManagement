let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    createInnerHtml();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    localStorage.removeItem("editEmp");
});
const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem("EmployeePayrollList")?JSON.parse(localStorage.getItem("EmployeePayrollList")):[];
}
const createInnerHtml = () => {
    const headerHtml = ` 
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
      `;
      
      let innerHtml= `${headerHtml}`;
      empPayrollList = createEmployeePayrollJSON();
      if(empPayrollList.length==0) return;
      for(const empPayrollData of empPayrollList){
          innerHtml = `${innerHtml}
          <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" 
                        src="../assets/delete.png">
                <img name="${empPayrollData._id}" alt="edit" onclick="update(this)"
                        src="../assets/edit.png">
            </td>
      </tr>
      `;
      }
      document.querySelector("#table-display").innerHTML = innerHtml;
} 

const getDeptHtml =(deptList)=>{
    let deptHtml="";
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class="deptartment">${dept}</div>`
    }
    return deptHtml;
}
const createEmployeePayrollJSON=()=>{
    let empPayrollListLocal=[
        {
            _name:'Narayan Mahadevan',
            _gender:"male",
            _department:[
                "Engineering",
                "Finance"
            ],
            _salary:"520000",
            _startDate:"15 Oct 2021",
            _note:"Hello Narayan",
            _id:new Date().getTime(),
            _profilePic:"../assets/profile1.webp"
        },
        {
            _name:'Govind Singh',
            _gender:"male",
            _department:[
                "Manager"
            ],
            _salary:"500000",
            _startDate:"12 Nov 2021",
            _note:"",
            _id:new Date().getTime()+1,
            _profilePic:"../assets/profile4.webp"
        },
        {
            _name:'Anoo Sing',
            _gender:"Female",
            _department:[
                "HR",
                "finance"
            ],
            _salary:"426000",
            _startDate:"10 December 2021",
            _note:"",
            _id:new Date().getTime()+1,
            _profilePic:"../assets/profile2.webp"
        }
    ];
    return empPayrollListLocal;
}