import { createBatch1 } from "../repositories/batch1.js";
import { responseTemplate } from "../utils/response.js";

export async function controlCreateBatch1(req, res, next){
    let message
    let data
    let response_code
    try{
       data = await createBatch1(req.body.name, req.body.jenis_kelamin);
       console.log(data)
       response_code = 200
       message = "success" 
    }catch(error){
        response_code = 500
        message = "error"
    }
    responseTemplate(res,data,message,response_code)
}