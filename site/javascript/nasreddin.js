$(document).ready(function() {
	var usernameParam = getParameterByName("username");
	var matches = location.host.match(/(.*)\.github/);
	var username;
	if (usernameParam != "") {
		username = usernameParam;
	} else if (matches != null && matches.length == 2) {
		username = matches[1];
	} else {
		username = "github";
	}
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
		$('#username').text(username);
	});
});

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if(results == null)
		return "";
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}
