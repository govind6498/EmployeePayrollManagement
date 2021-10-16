let stringfyDate=(date)=>{
    const options = {days:"numeric", month:"short",year:"numeric"};
    const newDate = !date?"undefined":new date(Date.parse(date)).toLocaleDateString("en-GB",options);
    return newDate
}

const update = (node)=>{
    let employeePayrollData = empPayrollList.find(empData=>empData._id==node._id)
    if(!employeePayrollData) return;
    localStorage.setItem("editEmp",JSON.stringify(employeePayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
}
