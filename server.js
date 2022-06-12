const express = require('express');
const app = express();
const cors = require('cors');
const { resources } = require("./resources");
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
	res.json(resources);
});

app.get('/api/:keyword', (req, res) => {
	const keyword = req.params.keyword.toLowerCase();

	// filter resources array, return items that match query; tag.
	const matches = resources.filter((obj) => obj.keywords.some(str => str.includes(keyword)));

	if (matches.length > 0) {
		res.json(matches);
	} else {
		throw new Error('Resource not found.');
	}
});

app.listen(PORT, () => {
	console.log(`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 better 💅 go 😝 catch 🙀 it! 🍟`);
});
