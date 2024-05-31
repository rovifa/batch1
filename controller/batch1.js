import { createBatch1, selectAllData } from "../repositories/batch1.js";
import { responseTemplate } from "../utils/response.js";
import bcrypt from "bcrypt"

export async function controlCreateBatch1(req, res, next){
   
    let message
    let data
    let response_code
    try{
        bcrypt.hash(req.body.password,10, async (error, hashedPass) => {
          
            data = await createBatch1(req.body.name, req.body.jenis_kelamin, hashedPass);
           
            if (data > 0){
              
                response_code = 200
                message = "success" 
                
            }else{
               
                response_code = 500
                message = "error" 
            }
            responseTemplate(res,data,message,response_code)
    })
    }catch(error){
      next(error)
    }
   
}

export async function ctrlSelectAllData(req,res,next){
    data = await selectAllData();
    if (data.length > 0){
        response_code = 400
        message = "tidak ada data" 
    }else{
        response_code = 200
        message = "success" 
    }
    responseTemplate(res,data,message,response_code)
}