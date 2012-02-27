var username = "cargokult";
var user = gh.user(username);
user.show(function (data) {
    console.log(data.user);
});
user.allRepos(function (data) {
    data.repositories.forEach(function (repo) {
        console.log("Repo " + repo.name + " created at " + repo.created_at + " last pushed at " + repo.pushed_at);
    });
});

