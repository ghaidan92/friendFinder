
var friends = require("../data/friends");



module.exports = function(app){
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    
    var newFriends = req.body;
    console.log(newFriends);
    friends.push(newFriends);
		res.json(friends);
		

		//loop through the friends data array of objects to get each friends scores
		// for(var i = 0; i < friends.length; i++){
    //   console.log(friends[i].name);
    //   console.log(friends[i].photo);
    //   console.log(friends[i].score);
    //   for(var j = 0; j < 2; j++){
    //     function caluculate(num1, num2){
    //       return Math.abs(num1 - num2)
    //     }
        
        
        
    //     var result = caluculate(newFriends, friends[i]);
        
    //     console.log(result);
    //   }
		

		// 	//loop through that friends score and the users score and calculate the 
		// 	// absolute difference between the two and push that to the total difference variable set above
		// }

		
    
	});

}