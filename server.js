const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors());

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
];