const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const { fetchAll, addResource, fetchByKeyword } = require('./db/routes')
const { connectToMongo } = require('./db/conn')

const { resources } = require("./resources");
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));



connectToMongo(err =>  {
	if (err) {
    console.error("failed to connect to mongoDB, ", err);
		process.exit()
  }
})

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



app.get('/api', fetchAll);
app.get('/api/:keyword', fetchByKeyword);
app.post('/api', bodyParser.json(), addResource);


app.listen(PORT, () => {
	console.log(`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 better 💅 go 😝 catch 🙀 it! 🍟`);
});
