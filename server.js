const express = require('express');
const app = express();
const cors = require('cors');
const { resources } = require("./resources");
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
	if (resources) {
		res.render('index.ejs', { resources });
	} else {
		// respond with status 500 if the resources array could not be loaded from resources.js
		res.status(500).json({
			error: 'Resources were not able to be loaded from resources.js.'
		});
	}
});

app.get('/api', (req, res) => {
	res.json(resources);
});

app.get('/api/:keyword', (req, res) => {
	const keyword = req.params.keyword.toLowerCase();
	
	// filter resources array, return items that match query; tag.
	const matches = resources.filter((obj) => obj.keywords.some(str => str.toLowerCase().includes(keyword)));

	// if matches were found, respond with matches array in JSON format
	if (matches.length) {
		res.json(matches);
	} else {
		// respond with status 404, no matches were found
		res.status(404).json({
			error: `No resources were found with the keyword, '${keyword}'.`
		});
	}
});

app.listen(PORT, () => {
	console.log(`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 better 💅 go 😝 catch 🙀 it! 🍟`);
});
