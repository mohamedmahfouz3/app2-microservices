import express from 'express';
const router=express.Router();

router.get('/api/users/signout',(req,res)=>{

  res.send("mohmaed ahmmed ebrahim")

  


});


export {router as signoutRouter}