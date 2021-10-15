let stringfyDate=(date)=>{
    const options = {days:"numeric", month:"short",year:"numeric"};
    const newDate = !date?"undefined":new date(Date.parse(date)).toLocaleDateString("en-GB",options);
    return newDate
}