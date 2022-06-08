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
		name: 'Unsplash',
		url: 'https://unsplash.com/',
		tags: ['web design', 'photos', 'front-end'],
	},
    {
		name: 'Coolors',
		url: 'https://coolors.co/',
		tags: ['web design', 'color palettes', 'front-end'],
	},
    {
		name: 'California Contract Killer',
		url: 'https://github.com/samuelsycamore/contract-killer',
		tags: ['freelancing', 'contracts'],
	},
    {
		name: 'CV Compiler',
		url: 'https://cvcompiler.com/',
		tags: ['job hunt', 'resume'],
	},
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
