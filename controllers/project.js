
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
            res.send("YOU ARE SCHASDHSAJDHJASDHSAJKDHSAKLDJSK");
        }

    })

  };
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
    showSchedulePage:showSchedulePage
  };

}