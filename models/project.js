/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (Pool) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

    Pool.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let newUser = (data, callback) => {
    let query = 'INSERT INTO users (name,password) VALUES ($1,$2)';
    let values = [data.username, data.password];
    Pool.query(query,values,(err,res)=>{

    })
  }
  let findUser = (data,callback)=> {
    let query = 'SELECT * from users WHERE name = $1';
    let values = [data.username];
    Pool.query(query,values,(err,res)=>{
        if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
    })
}

  return {
    getAll:getAll,
    newUser:newUser,
    findUser:findUser
  };
};