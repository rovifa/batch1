import { dbPool } from "../utils/dbcon.js";

async function createBatch1(nama, jenisKel){
    try{
        let query = "INSERT INTO batch1 (nama, jenis_kelamin) values ('"+nama+"','"+jenisKel+"')";
        console.log(query);
        const [result] = await dbPool.query(query)
        // let query = "INSERT INTO batch1 (nama, jenis_kelamin) values (?,?)";
        // const [result] = await dbPool.query(query,[nama,jenisKel])
       // console.log(result);
        if (result.affectedRows > 0){
            return result
        }
    }catch(error){
        throw error;
    }
}

export {createBatch1}