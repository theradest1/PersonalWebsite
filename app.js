const express = require('express');

const app = express();
const port = 4000;
const host = "0.0.0.0";

app.use(express.static("public"));
app.use("/css", express.static(__dirname + 'public/css'));
app.use("/js", express.static(__dirname + 'public/js'));
app.use("/img", express.static(__dirname + 'public/img'));
app.use("/files", express.static(__dirname + 'public/files'));


app.set('views', './views');

app.get("", (req, res) => {
	res.sendFile("/views/index.html", { root: __dirname });
});

app.get("/skills", (req, res) => {
	res.sendFile("/views/skills.html", { root: __dirname });
});

app.get("/about-me", (req, res) => {
	res.sendFile("/views/about-me.html", { root: __dirname });
});
app.get("/projects", (req, res) => {
	res.sendFile("/views/projects.html", { root: __dirname });
});
app.get("/asperations", (req, res) => {
	res.sendFile("/views/asperations.html", { root: __dirname });
});
app.get("/project-demos", (req, res) => {
	res.sendFile("/views/project-demos.html", { root: __dirname });
});
app.get("/aplus", (req, res) => {
	res.sendFile("/views/aplus.html", { root: __dirname })
});
app.get("/raffle/entry/:raffleID", (req, res) => {
	res.sendFile("/views/raffle/entry.html", { root: __dirname })
});
app.get("/raffle/results", (req, res) => {
	res.sendFile("/views/raffle/results.html", { root: __dirname })
});
app.get("/raffle/lookup/:raffleID", (req, res) => {
	res.sendFile("/views/raffle/lookup.html", { root: __dirname })
});
app.get("/games", (req, res) => {
	res.sendFile("/views/games.html", { root: __dirname })
});

//downloads
app.get("/games/surge/updater", (req, res) => {
	res.sendFile("/public/files/surge/surgeUpdater.zip", { root: __dirname })
});
app.get("/games/surge/server", (req, res) => {
	res.sendFile("/public/files/surge/surgeServer.zip", { root: __dirname })
});
/*app.use(function (req, res) {
	res.status(404).sendFile('/views/pageNotFound.html', { root: __dirname });
});*/ // stops url perameters from working 

app.listen(port, host, () => {
	console.log("Server started on port " + port);
});
