import express from 'express';
const router=express.Router();

router.get('/api/users/currentuser',(req,res)=>{

  res.send("mohmaed ahmmed ebrahim")

  


});


export {router as currentUserRouter}