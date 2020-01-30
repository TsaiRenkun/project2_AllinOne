module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const controllerCallbacks = require('./controllers/project')(allModels);

  app.get('/', controllerCallbacks.showLoginPage);
  app.post('/register', controllerCallbacks.registerUser);
  app.post('/login', controllerCallbacks.loginUser);
  app.post('/logout', controllerCallbacks.logOut);
  app.get('/home',controllerCallbacks.showHomePage);

  //app.get('/pokemons/:id', pokemons.getPokemon);
};