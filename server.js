const express = require('express');
const app = express();
const cors = require('cors');
const { resources } = require("./resources");
require("dotenv").config({ path: "./config/.env" }); //Abstracts our secret keys 
const connectDB = require('./config/db'); //Database Connection.
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 8000;

connectDB()

//Middleware that parses incoming JSON request and puts the data in req.body 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.static('public'));


app.use('/api/resources', require('./routes/resourceRoutes'))

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


//Handles Errors 
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 better 💅 go 😝 catch 🙀 it! 🍟`);
});
