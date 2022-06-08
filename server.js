const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.static(__dirname + '/public'));

const resources = [
	{
		name: 'Oh Shit, Git!',
		url: 'https://ohshitgit.com/',
		tags: ['git', 'version control', 'command line'],
	},
	{
		name: 'Javascript.info - Arrays',
		url: 'https://javascript.info/array',
		tags: ['arrays'],
	},
	{
		name: 'Building a Simple CRUD App with Node, Express, and MongoDB',
		url: 'https://zellwk.com/blog/crud-express-mongodb/',
		tags: ['mongodb', 'express', 'node', 'backend'],
	}
];

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
	res.json(resources);
});

app.get('/api/:tag', (req, res) => {
    const tag = req.params.tag.toLowerCase();

    // filter resources array, return items that match query; tag.
    const filteredArr = resources.filter((obj) => obj.tags.includes(tag));

    if (filteredArr.length > 0) {
        res.json(filteredArr);
    } else {
        throw new Error('Resource not found.');
    }
});

app.listen(PORT, () => {
	console.log(`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 better 💅 go 😝 catch 🙀 it! 🍟`);
});
