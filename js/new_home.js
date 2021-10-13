window.addEventListener("DOMContentLoaded",(event)=>{
    createIneerHtml();
});
//Template literal ES6 feature
const createIneerHtml=()=>{
    const innerHtml=`
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>
                           <img class="profile" alt="" src="../assets/profile2.webp">
                        </td>
                        <td>Govind Kumar</td>
                        <td>Male</td>
                        <td>
                            <div class="department-label">Sales</div>
                            <div class="department-label">Engineer</div>
                            <div class="department-label">Finance</div>
                        </td>
                        <td>3000000</td>
                        <td>1 Nov 2021</td>
                        <td>
                            <img id ="1" onclick="remove(this)" alt="delete" src="../assets/delete.png">
                            <img id="1" alt="edit" onclick="update(this)" src="../assets/edit.png">
                        </td>
                    </tr>
                    `;
                    console.log("Running new_home.css")
                    document.querySelector("#table-display").innerHtml=innerHtml;
}