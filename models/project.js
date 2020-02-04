/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const crypto = require('crypto');
const sha256 = require('js-sha256');

module.exports = (Pool) => {

  // `dbPoolInstance` is accessible within this function scope


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
            let query = 'INSERT INTO users (name,password,salt,level) VALUES ($1,$2,$3,$4) RETURNING *';
            let values = [data.username, newPassword , salt, data.level];
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

  let findBody = (callback)=>{
    let query = 'SELECT * from bodypart'

    Pool.query(query,(err,res)=>{
        if(err){
            callback(err,null);
        } else {
            callback(null,res);
        }
    })
  }

  let inputWorkouts = (data , callback)=>{
    let query = 'INSERT into workout (name , bodypart ,bodypart_id , user_id) VALUES ($1, $2, $3, $4) RETURNING *'

    let values = [data.name,data.part,data.bodypartid,data.id];

    Pool.query(query,values,(err,res)=>{
        if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
    })
  }

  let showWorkouts = (data,callback)=>{
    let query = 'SELECT * from workout WHERE user_id = $1 ORDER BY name ASC'
    let values = [data.id]

    Pool.query(query,values,(err,res)=>{
             if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
    })
  }

  let showAllExercises = (callback)=>{
    let query = 'SELECT * from exercise'
     Pool.query(query,(err,res)=>{
             if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
    })
  }

  let findExercise = (data, callback)=>{
      let query = 'SELECT * from exercise WHERE id = $1'
      let values = [data.exerciseid]
     Pool.query(query,values,(err,res)=>{
             if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
    })
  }

  let pullExercise = (callback)=>{
    let query = 'Select workout.user_id,workout.id AS workout_id, bodypart.name AS bodypart,bodypart.id AS bodypart_id, exercise.name,exercise.id from workout Inner join bodypart on(workout.bodypart_id = bodypart.id) inner join exercise on(exercise.bodypart_id = bodypart.id);'
    Pool.query(query,(err,res)=>{
             if(err){
            callback(err,null)
        } else {
            callback("null",res)
        }
  })
}

  let inputExercise = (data,callback)=>{
    let query = 'INSERT into exercise_workout (workout_id,exercise_id,user_id) VALUES ($1, $2, $3)'

    let values = [data.workoutid, data.exerciseid, data.userid]
    Pool.query(query,values,(err,res)=>{
             if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
  })
}

 let selectedWorkout = (data, callback)=>{
    let query = 'Select exercise_workout.workout_id, exercise_workout.user_id , exercise.name, exercise.id, workout.name AS date, workout.bodypart from exercise inner join exercise_workout on(exercise_workout.exercise_id = exercise.id) inner join workout on(exercise_workout.workout_id = workout.id) WHERE exercise_workout.user_id = $1 AND workout_id = $2 '
    let values = [data.id , data.workoutid];
     Pool.query(query,values,(err,res)=>{
             if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
  })
 }

 let checkFav = (data, callback) => {
    let query = 'SELECT * FROM favorite WHERE user_id = $1 AND exercise_id = $2 RETURNING *'
    let values = [data.id, data.exerciseid]
    Pool.query(query, values, (err,res)=>{
          if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
    })
 }

 let addFav = (data,callback)=>{
    console.log(data.id, data.exerciseid)
    let query = 'INSERT INTO favorite (user_id, exercise_id) VALUES ($1, $2) RETURNING *';
    let values = [data.id, data.exerciseid]
    Pool.query(query,values, (err,res1)=>{
        if(err){
            let delQuery = 'DELETE FROM favorite WHERE user_id = $1 AND exercise_id = $2';
            Pool.query(delQuery,values,(err,res2)=>{
            if (err) callback("ERROR DELETEING", null);
                else {
            callback("delete", res2);
                }
            })
        } else {
            callback("insert", res1)
        }
    })
 }

 let showFav = (data,callback) =>{
    let query = 'SELECT favorite.id, favorite.exercise_id, exercise.id, exercise.name FROM favorite INNER JOIN exercise ON(favorite.exercise_id = exercise.id) WHERE favorite.user_id = $1';
    let values = [data.id];
    Pool.query(query,values,(err,res)=>{
        if(err){
            callback(err,null)
        } else {
            callback(null,res)
        }
    })
 }


  return {
    checkCookie:checkCookie,
    newUser:newUser,
    findUser:findUser,
    findBody:findBody,

    inputWorkouts:inputWorkouts,
    showWorkouts:showWorkouts,
    selectedWorkout:selectedWorkout,

    showAllExercises:showAllExercises,
    findExercise:findExercise,
    pullExercise:pullExercise,
    inputExercise:inputExercise,

    checkFav:checkFav,
    addFav:addFav,
    showFav:showFav
  };
};