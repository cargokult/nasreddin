$(document).ready(function() {
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	var username = "cargokult";
	var user = gh.user(username);
	user.show(function (data) {
    	console.log(data.user);
	});
	user.allRepos(function (data) {
		var events = [];
		var index = 0;
    	data.repositories.forEach(function (repo) {
       	console.log("Repo " + repo.name + " created at " + repo.created_at + " last pushed at " + repo.pushed_at);
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
