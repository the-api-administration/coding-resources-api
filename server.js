const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

const resources = [
	{
		name: 'Oh Shit, Git!',
		url: 'https://ohshitgit.com/',
		keywords: ['git', 'version control', 'command line'],
	},
	{
		name: 'Javascript.info - Arrays',
		url: 'https://javascript.info/array',
		keywords: ['arrays'],
	},
	{
		name: 'Building a Simple CRUD App with Node, Express, and MongoDB',
		url: 'https://zellwk.com/blog/crud-express-mongodb/',
		keywords: ['mongodb', 'express', 'node', 'backend'],
	},
];

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
	res.json(resources);
});

app.get('/api/:keyword', (req, res) => {
	const keyword = req.params.keyword.toLowerCase();
  
	// filter resources array, return items that match query; tag.
	const matches = resources.filter((obj) => obj.keywords.includes(keyword));
  
	if (matches.length > 0) {
		res.json(matches);
	} else {
		throw new Error('Resource not found.');
	}
});

app.listen(PORT, () => {
	console.log(
		`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 better 💅 go 😝 catch 🙀 it! 🍟`,
	);
});
