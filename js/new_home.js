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
    const innerHtml = `${headerHtml}
      <tr>
          <td>
          <img class="profile" alt="" src="../assets/profile1.webp">
          </td>
          <td>Govind Kumar</td>
          <td>Male</td>
          <td><div class="dept-label">Finance</div>
              <div class="dept-label">Engineer</div>
              <div class="dept-label">Sales</div>
              <div class="dept-label">others</div></td>
          <td>495969</td>
          <td>1 August 2021</td>
          <td>
          <img id="1" onclick="remove(this)" alt="delete" 
                  src="../assets/delete.png">
          <img id="1" alt="edit" onclick="update(this)"
                  src="../assets/edit.png">
          </td>
      </tr>
      `;
    document.querySelector('#table-display').innerHTML = innerHtml;
} 