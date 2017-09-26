$(document).ready(function() {
// API Key: AIzaSyAB0nANfjCWdhDKRSh55l8nLvofQCqC4Aw

// Get Request
function request(searchTerm, callback) {
	var query = {
    part: 'snippet',
	key:"AIzaSyAB0nANfjCWdhDKRSh55l8nLvofQCqC4Aw",
	q: searchTerm
  }
  
  let url="https://www.googleapis.com/youtube/v3/search";
  console.log(url, searchTerm, query);
  $.getJSON(url, query, callback);

};


// Submit Search
$("#submit").click(function(e){
	e.preventDefault();
	var searchTerm = $("#search").val();
	//alert(searchTerm);
	console.log(searchTerm);
	request(searchTerm, results);


});//!!Not working

// Display results
function results(data) {
	console.log(data);
	
	for (var i = 0 ; i < data.items.length; i++) {
		let videoID = data.items[i].id.videoId;
		console.log(videoID);
		$("#results").append(`<iframe src='https://www.youtube.com/embed/${videoID}'</iframe>`);
    }
};



});