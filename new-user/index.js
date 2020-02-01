const request = require('request');

exports.newUser = (data, context) => {
  
  if (context.params.user === undefined) {
    res.status(400).send('No user defined!');
  } else {
    
    console.log(context.params.user);
    var url = 'https://user-matching-service-gqdj5a23xq-ew.a.run.app/match/newUser?user=';
    var fullURL = url.concat(context.params.user);
    request.get(fullURL, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred 
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    });
    
  }
};
