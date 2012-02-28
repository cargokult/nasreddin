$(document).ready(function() {
	var username = "cargokult";
	var user = gh.user(username);
	user.allRepos(function (data) {
		var events = [];
		var index = 0;
		data.repositories.forEach(function (repo) {
		events[index] = {
				title: repo.name,
				start: repo.created_at
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
