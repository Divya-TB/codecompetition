const nodemailer = require('nodemailer');
const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
app.use(express.static('public'));
app.use(express.json())
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.post('./email',(req,res)=>
{
    console.log(req.body);
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tb1341994@gmail.com',
            pass: '4991431tb'
        }
    });
    
    let mailDetails = {
        from: 'divyabalan1341994@gmail.com',
        to: req.body.email,
        subject: 'Test mail',
        text: 'Welcome to Coding Competition #2 by Divya , NORKA B2'
        
    };
    
    mailTransporter.sendMail(mailDetails, function(err, info) {
        if(err) {
            console.log('Error Occurs');
        } else
         {
            console.log('Email sent successfully'+info.response);
        }
    });
    
})
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`)
    
});

