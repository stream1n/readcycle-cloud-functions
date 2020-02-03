const request = require('request');

exports.newBook = (data, context) => {
  
  if (context.params.book === undefined) {
    res.status(400).send('No book found!');
  } else {
    
    console.log(context.params.book);
    var url = 'https://user-matching-service-gqdj5a23xq-ew.a.run.app/match/newBook?book=';
    var fullURL = url.concat(context.params.book);
    request.get(fullURL, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred 
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    });
    
  }
};
