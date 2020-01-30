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
    db.key.newUser(data,(error,result)=>{
        let user = request.cookies.user_name
        let hashedCookie = req.body.username;
        let user_name = result.rows[0].name;
        let user_id = result.rows[0].id;

        res.cookie('loggedIn', hashedCookie);
        res.cookie('userId', user_id);
        res.cookie('username', user_name);
        //redirect to home page!
        res.redirect('/home');
        });
    }

  let loginUser = (req,res)=> {
    let data = {
        username: req.body.username
    }
    db.key.findUser(data,(error,result)=>{
        if(result.rows.length === 0){
            console.log(err);
            response.status(400).send("Invalid Username");
        } else {
            console.log(result.rows);
            if(result.rows[0].password === req.body.password){
                let hashedCookie =req.body.username;
                let user_name = result.rows[0].name;
                let user_id = result.rows[0].id;

                res.cookie('loggedIn', hashedCookie);
                res.cookie('userId', user_id);
                res.cookie('username', user_name);
                //redirect to home page!
                res.redirect('/home');
            }
        }
    })
  }

  let logOut = (req, res) => {
        res.clearCookie("loggedIn");
        res.clearCookie("userId");
        res.clearCookie("username");
        res.redirect('/');
  };

  let showHomePage = (req,res)=>{
    let user = req.cookies.username
    let data = {
        username:user
    }

    res.render('main/index',data)
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
    showHomePage:showHomePage
  };

}