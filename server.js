const express = require('express');
const app = express();
const cors = require('cors');
const { resources } = require("./resources");
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	try {
		if (resources) {
			res.render('index.ejs', { resources });
		} else {
			throw new Error('Resources not found.')
		}
	} catch (err) {
		console.error(err);
	}
});

app.get('/api', (req, res) => {
	res.json(resources);
});

app.get('/api/:keyword', (req, res) => {
	const keyword = req.params.keyword.toLowerCase();
	
	// filter resources array, return items that match query; tag.
	const matches = resources.filter((obj) => obj.keywords.some(str => str.includes(keyword)));

	try {
		// if matches were found respond with json else throw error
		if (matches.length) {
			res.json(matches);
		} else {
			throw new Error('No resources found.');
		}
	} catch(err) {
		console.error(err);
	}
});

app.listen(PORT, () => {
	console.log(`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 better 💅 go 😝 catch 🙀 it! 🍟`);
});
