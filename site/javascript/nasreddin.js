$(document).ready(function() {
	console.log("location.host: " + location.host);
	var matches = location.host.match(/(.*)\.github/);
	console.log("Matches: " + matches);
	var username = (matches != null && matches.length == 2) ? matches[1] : "github";
	var user = gh.user(username);
	user.allRepos(function (data) {
		var events = [];
		var index = 0;
		data.repositories.forEach(function (repo) {
		events[index] = {
				title: repo.name,
				start: repo.created_at,
				url: "https://github.com/" + username + "/" + repo.name
				};
		index++;
		});
		$('#calendar').fullCalendar({
				header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: false,
			events: events
		});
	});
});
