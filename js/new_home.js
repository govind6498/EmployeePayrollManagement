window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

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
      let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
      <tr>
          <td>
          <img class="profile" alt="" src="${empPayrollData._profilePic}">
          </td>
          <td>${empPayrollData._name}</td>
          <td>${empPayrollData._gender}</td>
          <td>
            <div class="deptartment">${empPayrollData._department[0]}</div>
            <div class="deptartment">${empPayrollData._department[1]}</div>
           </td>
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
    document.querySelector('#table-display').innerHTML = innerHtml;
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
            _note:"",
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
        }
    ];
    return empPayrollListLocal;
}