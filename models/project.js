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
    let query = 'SELECT * from workout WHERE user_id = $1'
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
            callback(null,res)
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

 let selectedWorkout = (callback)=>{
    let query = 'Select exercise_workout.workout_id , exercise.name, exercise.id from exercise inner join exercise_workout on(exercise_workout.exercise_id = exercise.id);'
     Pool.query(query,(err,res)=>{
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
    showAllExercises:showAllExercises,
    findExercise:findExercise,
    pullExercise:pullExercise,
    inputExercise:inputExercise,
    selectedWorkout:selectedWorkout
  };
};