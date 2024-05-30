

/*router.get('/',(req,res)=>{
    res.send('Hello world')
})*/
 
const router = require('express').Router();
router.post('/test/register',(req,res)=>{
    res.json({
         companyName: "Taslasoft",
          ownerName:"Sai sruthi",
    rollNo:"24552173022",
    ownerEmail : "Saisruthikambampati22@gmail.com",
    accessCode:"osDvxf"

    })
});
 

module.exports = router;
