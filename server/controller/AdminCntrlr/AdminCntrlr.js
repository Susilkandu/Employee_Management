const {Admin ,Employee} = require('../../model/employee');
const CreateEmployee = ((req, res)=>{
  const {Name,Email,MobileNo,Designation,Gender,Course,Image} = req.body;
  if(!Name || !Email || !MobileNo || !Designation || !Gender || !Course || !Image){
    return res.status(400).json({message:"Please fill all the fields"});
  }else{
    const employee = new Employee(req.body);
    const ack = employee.save();
    return res.send(ack+"saved");
  }
});

module.exports={
CreateEmployee
}