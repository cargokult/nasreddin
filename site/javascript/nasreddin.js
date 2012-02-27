gh.authenticate("fitzgen", "sdfk32we-FAKE-uydfs7f-rhrwe8r7");
var huddlej = gh.user("huddlej");
huddlej.show(function (data) {
    console.log(data.user);
});
huddlej.repos(function (data) {
    console.log("Number of repos: " + data.repositories.length);
});
var wujs = gh.repo("fitzgen", "wu.js")
wujs.show(function (data) {
    console.log("Number of watchers: " + data.repository.watchers);
});
wujs.update({ has_wiki: 0 }); // Unfortunately, no callbacks with POSTs :(
