// require any needed js files

// routes
exports.home  = function(req, res){
 res.render('home');
};

exports.challenge = function(req, res){
  res.render('challenges/home')
};
