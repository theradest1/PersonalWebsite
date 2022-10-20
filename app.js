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
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/skills.html", (req, res) => {
	res.sendFile(__dirname + "/views/skills.html");
});

app.get("/about-me.html", (req, res) => {
	res.sendFile(__dirname + "/views/about-me.html");
});
app.get("/projects.html", (req, res) => {
	res.sendFile(__dirname + "/views/projects.html");
});
app.get("/asperations.html", (req, res) => {
	res.sendFile(__dirname + "/views/asperations.html");
});

app.listen(port, host, () => {
	console.log("Server started on port " + port);
});
