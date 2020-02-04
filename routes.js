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
  app.get('/logout', controllerCallbacks.logOut);

  app.get('/home',controllerCallbacks.showHomePage);
  app.post('/edit', controllerCallbacks.editLevel);

  app.get('/schedule', controllerCallbacks.showSchedulePage);


  app.get('/workoutlist', controllerCallbacks.showWorkoutPage);
  app.get('/workoutlist/:id', controllerCallbacks.showSelectedWorkout);
  app.post('/workout', controllerCallbacks.inputWorkout);


  app.get('/exercise', controllerCallbacks.showExercisePage);
  app.get('/exercise/:id', controllerCallbacks.showInstructions);

  app.get('/check', controllerCallbacks.checkLike);
  app.get('/like',controllerCallbacks.likeExercise);

  app.get('/favorites', controllerCallbacks.showFavoritePage);
  app.get('/favorites/delete', controllerCallbacks.deleteFavorite)

};