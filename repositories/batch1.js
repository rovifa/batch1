import { dbPool } from "../utils/dbcon.js";

async function createBatch1(nama, jenisKel, pass){
    try{
        // let query = "INSERT INTO batch1 (nama, jenis_kelamin, password) values ('"+nama+"','"+jenisKel+"')";
        // console.log(query);
        // const [result] = await dbPool.query(query)
        let query = "INSERT INTO batch1 (nama, jenis_kelamin,password) values (?,?,?)";
        const [result] = await dbPool.query(query,[nama,jenisKel,pass])
       // console.log(result);
       console.log(result.affectedRows);
        return result.affectedRows
        
    }catch(error){
        throw error;
    }
}

async function selectData(nama){
    try{
       
         let query = "SELECT * from batch1 where nama = '"+nama+"'";
        console.log(query);
        const [result] = await dbPool.query(query)
        console.log("hasil query select = ",result[0])
       if(result.length > 0){
        console.log("test")
            return result[0];
       }
           
        
       
        
    }catch(error){
        throw error;
    }
}

async function selectAllData(){
    try{
       
         let query = "SELECT * from batch1 ";
      
        const [result] = await dbPool.query(query)
            return result;
       
        
    }catch(error){
        throw error;
    }
}

export {createBatch1, selectData, selectAllData}