/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const crypto = require('crypto');
const sha256 = require('js-sha256');

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

  let checkCookie = (data,callback)=>{
    let query = 'SELECT * FROM users WHERE id = $1'
    let values = [data.id]
    Pool.query(query,values,(err,res,cookie)=>{
        if (err) {
            callback(err,null)
        } else {
            let cookie = res.rows[0].salt + sha256(res.rows[0].name);
            callback(null,res,cookie)
        }
    })
  }

  let newUser = (data, callback) => {
    let salt;
    let newPassword;
    crypto.randomBytes(16, (err, buf) => {
        if (err) throw err;
            salt = buf.toString('hex');
            newPassword = sha256(data.password + salt);
            let query = 'INSERT INTO users (name,password,salt) VALUES ($1,$2,$3) RETURNING id, name';
            let values = [data.username, newPassword , salt];
            Pool.query(query,values,(err,res,cookie)=>{
        if(err){
                callback(err,null)
            } else {
                let cookie = salt + sha256(data.username);
                callback(null,res,cookie)
            }
        });
    })
  }

  let findUser = (data,callback)=> {
    let query = 'SELECT * from users WHERE name = $1';
    let values = [data.username];
    Pool.query(query,values,(err,res,cookie)=>{
        if(err){
            callback(err,null)
        } else {
            let cookie = res.rows[0].salt + sha256(data.username);
            callback(null,res,cookie)
        }
    })
}

  return {
    checkCookie:checkCookie,
    getAll:getAll,
    newUser:newUser,
    findUser:findUser
  };
};