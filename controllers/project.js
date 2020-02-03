
const sha256 = require('js-sha256')
module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let showLoginPage = (req, res) => {
        res.render('loginPage/login');
  };

  let registerUser = (req,res) => {
    let data = {
        username: req.body.username,
        password: req.body.password
    }
    db.key.newUser(data,(error,result,cookie)=>{
        console.log("ahsjdgsasdjkadhasjkdhsakdhaskdhsajhdja" ,result);
        // console.log(hashedCookie)
        let user_id = result.rows[0].id
        res.cookie('loggedIn', cookie);
        res.cookie('userId', user_id);
        // //redirect to home page!
        res.redirect('/home');
        });
    }

  let loginUser = (req,res)=> {
    let data = {
        username: req.body.username
    }
    db.key.findUser(data,(err,result,cookie)=>{
        if(result.rows.length === 0){
            console.log(err);
            res.status(400).send("Invalid Username");
        } else {
            console.log(result.rows);
            let hashedPw = sha256(req.body.password + result.rows[0].salt)
            if(result.rows[0].password === hashedPw){

                let user_id = result.rows[0].id
                res.cookie('loggedIn', cookie);
                res.cookie('userId', user_id);
                //redirect to home page!
                res.redirect('/home');
            }
        }
    })
  }

  let logOut = (req, res) => {
        res.clearCookie("loggedIn");
        res.clearCookie("userId");
        res.redirect('/');
  };

  let showHomePage = (req,res)=>{
    let user = req.cookies.loggedIn
    let data = {
        username:user
    }
    res.render('main/index',data)
  };

  let showSchedulePage = (req,res)=>{
    let user = req.cookies.loggedIn
    let id = req.cookies.userId

    let data = {
        username:user,
        id:id
    }
    db.key.checkCookie(data, (err,result,cookie)=>{
        console.log("Cccccccccccccccccc", cookie)
        console.log("USERERERERERRERERERER COOKIEE", user)
        console.log("SASDDADSDADSDADSDASDSASASS",result)
        if(cookie !== user){
            res.send("WRONGOWNTOGNWEOGNWEGNEWOGOJIEWGEWIJOJIPEFWIJFEJIPFWEJIPFWEJOPIWEF");
        } else {
            let input = {};
            db.key.findBody((err,result2)=>{
                console.log("YOU FOUND MY BODY PART" , result2);
                input = {
                    bodyparts:result2.rows
                }
                res.render('main/schedule', input);
            })

        }
    })
  };

  let inputWorkout = (req,res)=>{
    console.log("HElLO TIME TO PUT SOME WORK OUT")
    console.log("THIS IS THE RESPONEESAASD", req.body)

    let user = req.cookies.loggedIn;
    let id = req.cookies.userId;
    let workoutArray = req.body;

    console.log(req.body)

    let data = {
        username:user,
        id:id
    }

    db.key.checkCookie(data, (err,result,cookie)=>{
        if(cookie !== user){
            res.send("WRONGOWNTOGNWEOGNWEGNEWOGOJIEWGEWIJOJIPEFWIJFEJIPFWEJIPFWEJOPIWEF");
        } else {
            console.log("CHECKED")
            for (var i = 0; i < workoutArray.length; i++) {
                let name = workoutArray[i].day;
                let bodypartid = workoutArray[i].bodypart_id
                let parts = workoutArray[i].part
                data = {
                    id:id,
                    name:name,
                    bodypartid:bodypartid,
                    part:parts
                }
                db.key.inputWorkouts(data, (err,result1)=>{
                    db.key.pullExercise((err,result2)=>{
                            console.log("DATA TAKEN")
                            for (var i = 0; i < result2.rows.length; i++) {
                                console.log("WOOOO LOOP LOOP LOOP")
                                let dataEx = result2.rows[i];
                                console.log(dataEx.bodypart_id)
                                if(parseInt(bodypartid) === parseInt(dataEx.bodypart_id)){
                                    console.log("INSIDE INSIDE INSIDE")
                                    data = {
                                        workoutid:dataEx.workout_id,
                                        exerciseid:dataEx.id,
                                        userid:dataEx.user_id
                                        }
                                    db.key.inputExercise(data, (err,result3)=>{
                                    //inputExercise closing
                                    })
                                }
                            }
                        //PullExercise closing
                        })
                    //InputWorkout closing
                    })
                }
            }
        //CheckCookie closing
        })
}

  let showWorkoutPage = (req,res)=>{

    let user = req.cookies.loggedIn;
    let id = req.cookies.userId;

    console.log(req.body)
    let data = {
        username:user,
        id:id
    }
    db.key.checkCookie(data, (err,result,cookie)=>{
        if(cookie !== user){
            res.send("WRONGOWNTOGNWEOGNWEGNEWOGOJIEWGEWIJOJIPEFWIJFEJIPFWEJIPFWEJOPIWEF");
        } else {
            db.key.showWorkouts(data, (err,result1)=>{
                console.log(result1.rows)
                data = {
                    id:id,
                    workouts:result1.rows
                }
                res.render('main/workout', data)
            })
        }
    })
  }

  let showExercisePage = (req,res)=>{

    let user = req.cookies.loggedIn;
    let id = req.cookies.userId;

    console.log(req.body)
    let data = {
        username:user,
        id:id
    }
    db.key.checkCookie(data, (err,result,cookie)=>{
        if(cookie !== user){
            res.send("WRONGOWNTOGNWEOGNWEGNEWOGOJIEWGEWIJOJIPEFWIJFEJIPFWEJIPFWEJOPIWEF");
        } else {
            db.key.findBody((err,result1)=>{
                console.log(result1.rows)

                db.key.showAllExercises((err,result2)=>{
                    data = {
                        id:id,
                        bodypart:result1.rows,
                        exercise:result2.rows
                    }
                    res.render('main/exercise', data)
                })
            })
        }
    })
}

let showInstructions =(req,res)=>{
      let user = req.cookies.loggedIn;
    let id = req.cookies.userId;

    console.log(req.body)
    let data = {
        username:user,
        id:id
    }

    db.key.checkCookie(data, (err,result,cookie)=>{
        console.log("Cccccccccccccccccc", cookie)
        console.log("USERERERERERRERERERER COOKIEE", user)
        console.log("SASDDADSDADSDADSDASDSASASS",result)
        if(cookie !== user){
            res.send("WRONGOWNTOGNWEOGNWEGNEWOGOJIEWGEWIJOJIPEFWIJFEJIPFWEJIPFWEJOPIWEF");
        } else {
                data = {
                    username:user,
                    id:id,
                    exerciseid:req.params.id
                }
                db.key.findExercise(data,(err,result1)=>{
                    data = {
                        username:user,
                        id:id,
                        exerciseid:req.params.id,
                        exercise:result1.rows
                    }
                    res.render('main/instruction', data )
                })
            }
    })
}

let showSelectedWorkout = (req,res)=>{
     let user = req.cookies.loggedIn;
    let id = req.cookies.userId;

    console.log(req.body)
    let data = {
        username:user,
        id:id
    }
    db.key.checkCookie(data, (err,result,cookie)=>{
        console.log("Cccccccccccccccccc", cookie)
        console.log("USERERERERERRERERERER COOKIEE", user)
        console.log("SASDDADSDADSDADSDASDSASASS",result)
        if(cookie !== user){
            res.send("WRONGOWNTOGNWEOGNWEGNEWOGOJIEWGEWIJOJIPEFWIJFEJIPFWEJIPFWEJOPIWEF");
        } else {
            db.key.selectedWorkout((err,res)=>{
                console.log(res.rows);
                })
            }
    })
}

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showLoginPage: showLoginPage,
    registerUser:registerUser,
    loginUser:loginUser,
    logOut:logOut,

    showHomePage:showHomePage,

    showSchedulePage:showSchedulePage,
    inputWorkout:inputWorkout,

    showWorkoutPage:showWorkoutPage,
    showSelectedWorkout:showSelectedWorkout,

    showExercisePage:showExercisePage,
    showInstructions:showInstructions
  };

}