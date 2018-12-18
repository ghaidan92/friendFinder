
var friends = require("../data/friends");



module.exports = function(app){
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    function calculateDiff(num1, num2){
      return Math.abs(num1 - num2)
    }
    var allScoreArray = [];
    for (var i=0; i<friends.length; i++){
      for (var j=0; j<friends[i].score.length; j++){
        allScoreArray.push(calculateDiff(newFriend.score[j] , friends[i].score[j]));
      }    
    }
    // friends.push(newFriends);
		// res.json(friends);
		
    // console.log(allScoreArray);
    var allScoreSmallArrays = [];
    var breakPoint = 10;
    for (var i=0; i < allScoreArray.length; i+= breakPoint){
      var smallerArray = allScoreArray.slice(i, i + breakPoint);
      console.log(smallerArray);
      allScoreSmallArrays.push(smallerArray);
    }

    var finalArray = [],
    //calculate all arrays
    
    //smallest array is my friend
    //index of smallest array is friend
    // console.log(allScoreSmallArrays);
	});

}