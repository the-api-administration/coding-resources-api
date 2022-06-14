const resources = [

	{
		name: 'Oh Shit, Git!',
		url: 'https://ohshitgit.com/',
		keywords: ['git', 'version control', 'command line'],
	},
	{
		name: 'Javascript.info - Arrays',
		url: 'https://javascript.info/array',
		keywords: ['arrays', 'javascript'],
	},
	{
		name: 'Building a Simple CRUD App with Node, Express, and MongoDB',
		url: 'https://zellwk.com/blog/crud-express-mongodb/',
		keywords: ['mongodb', 'express', 'node', 'backend', 'javascript'],
	},
	{
		name: 'Useful string methods',
		url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods',
		keywords: ['string methods', 'javascript'],
	},
	{
		name: 'The JavaScript Way',
		url: 'https://github.com/thejsway/thejsway',
		keywords: ['javascript'],
	},
	{
		name: 'First Timers Only: Beginner Guide to Open Source',
		url: 'https://www.firsttimersonly.com/',
		keywords: ['open source'],
	},
	{
		name: 'A Complete Guide to Flexbox',
		url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
		keywords: ['css', 'flexbox'],
	},
	{
		name: 'Learn to Code HTML & CSS',
		url: 'https://learn.shayhowe.com/html-css/',
		keywords: ['css', 'html'],
	},
	{
		name: 'Learn to Code Advanced HTML & CSS',
		url: 'https://learn.shayhowe.com/advanced-html-css/',
		keywords: ['css', 'html', 'advanced'],
	},
	{
		name: 'CSS-Tricks',
		url: 'https://css-tricks.com/',
		keywords: ['css'],
	},
	{
		name: 'All About Floats',
		url: 'https://css-tricks.com/all-about-floats/',
		keywords: ['css', 'floats']
	},
	{
		name: 'JavaScript Arrays: Explain Like I\'m Five',
		url: 'https://sumudusiriwardana.hashnode.dev/javascript-arrays-explain-like-im-five',
		keywords: ['arrays', 'basics', 'fundamentals', 'javascript'],
	},
	{
		name: 'Objects vs. Arrays',
		url: 'https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421',
		keywords: ['arrays', 'basics', 'fundamentals', 'javascript', 'objects'],
	},
	{
		name: 'Flexbex Zombies',
		url: 'https://mastery.games/flexboxzombies/',
		keywords: ['css', 'flexbox'],
	},
	{
		name: 'A Complete Guide to CSS Media Queries',
		url: 'https://css-tricks.com/a-complete-guide-to-css-media-queries/',
		keywords: ['css', 'media queries', 'responsive web design', 'responsive']
	},
	{
		name: 'A Complete Guide to Grid',
		url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
		keywords: ['css', 'css grid', 'grid']
	},
	{
		name: 'Objects',
		url: 'https://javascript.info/object',
		keywords: ['javascript', 'objects']
	},
	{
		name: 'Crypto Zombies',
		url: "https://cryptozombies.io",
		keywords: ["crypto", "web3", "blockchain"]
	},
	{
		name: 'How to make your first pull request on GitHub',
		url: "https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/",
		keywords: ["open source", "git"]
	},
	{
		name: 'CORS Proxy',
		url: 'https://codetabs.com/cors-proxy/cors-proxy.html',
		keywords: ['cors', 'proxy', 'api', 'errors']
	},
	{
		name: 'How to write good commit messages',
		url: 'https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/',
		keywords: ['git', 'commit', 'version control', 'command line']
	},
	{
		name: 'Grind 75 questions',
		url: 'https://www.techinterviewhandbook.org/grind75',
		keywords: ['interview', 'job search', 'coding challenges', 'leet code']
	},
	{
		name: 'Font Awesome',
		url: 'https://faicons.com/',
		keywords: ['icons', 'frontend']
	},
	{
		name: 'Frontend Project README template',
		url: 'https://github.com/alecortega/portfolio-template',
		keywords: ['markdown', 'frontend', 'documentation']
	},
	{
		name: 'CSS Diner',
		url: 'https://flukeout.github.io/',
		keywords: ['css']
	},
	{
		name: 'Flexbox Froggy',
		url: 'https://flexboxfroggy.com/',
		keywords: ['css', 'flexbox']
	},
	{
		name: 'Learn Git Branching',
		url: 'https://learngitbranching.js.org/',
		keywords: ['git', 'version control']
	},
	{
		name: 'What the Flexbox',
		url: 'https://flexbox.io/',
		keywords: ['css', 'flexbox']	
	},
	{
		name: 'Code Driven Animation Editor',
		url: 'https://www.timelinecss.io/',
		keywords: ['css animations', 'css', 'animations', 'editor', 'visuals']
	},
	{
		name: 'Simple Icons',
		url: 'https://simpleicons.org',
		keywords: ['free', 'svg icons', 'svg', 'icons', 'popular brands']
	},
	{
		name: 'JavaScript Visualizer 9000',
		url: 'https://www.jsv9000.app',
		keywords: ['javascript', 'call stack', 'event loop', 'microtask queue', 'task queue']
	},
	{
		name: 'unDraw',
		url: 'https://undraw.co',
		keywords: ['open-source illustrations', 'svg', 'images', 'design', 'graphics', 'art', 'vectors', 'minimal', 'free', 'modern', 'png', 'interface', 'open-source']
	},
	{
		name: 'Unsplash',
		url: 'https://unsplash.com/',
		keywords: ['images', 'photos', 'frontend', 'free', 'photography']
	},
	{
		name: 'DevDocs',
		url: 'https://devdocs.io',
		keywords: ['api documentation', 'free', 'open-source', 'developer tools', 'interface', 'offline', 'css', 'html', 'http', 'javascript', 'web apis', 'angular', 'angularjs', 'ansible', 'apache http server', 'apache pig', 'async', 'babel', 'backbone.js','bash', 'bluebird', 'bootstrap', 'bottle', 'bower', 'c', 'c++', 'cakephp', 'chai', 'chef', 'clojure', 'cmake', 'codeception', 'codeceptjs', 'codeigniter', 'coffeescript', 'composer','cordova', 'crystal','cypress','d','d3.js', 'dart', 'deno', 'django', 'django rest framework', 'docker', 'dojo', 'drupal', 'eigen3', 'electron', 'elisp', 'elixir', 'ember.js', 'enzyme', 'erlang', 'esbuild', 'eslint', 'express', 'falcon', 'fish', 'flask', 'flow', 'gcc', 'git', 'gnu fortran', 'gnu make', 'gnucobol','gnuplot', 'go', 'godot', 'graphite', 'groovy', 'grunt', 'gtk', 'handlebars', 'haproxy', 'haskell', 'haxe', 'homebrew', 'i3', 'immutable.js', 'influxdata', 'jasmine', 'jekyll', 'jest', 'jinja', 'jq', 'jquery', 'jquery mobile', 'jquery ui', 'jsdoc', 'julia', 'knockout.js', 'koa', 'kotlin', 'kubectl', 'kubernetes', 'laravel', 'latex', 'leaflet', 'less', 'liquid', 'lodash', 'lua', 'love', 'mariadb', 'marionette.js', 'markdown', 'matplotlib', 'meteor', 'mocha', 'modernizr', 'moment.js', 'mongoose', 'nginx', 'nginx lua module', 'nim', 'nix', 'node.js', 'nokogiri', 'npm', 'numpy', 'ocaml', 'octave', 'openjdk', 'opentsdb', 'padrino', 'pandas', 'perl', 'phalcon', 'phaser', 'phoenix', 'php', 'phpunit', 'pointcloudlibrary', 'pony', 'postgresql', 'prettier', 'pug', 'puppeteer', 'pygame', 'python', 'pytorch', 'q', 'qt', 'r', 'ramda', 'react', 'reactbootstrap', 'react native', 'react router', 'reactivex', 'redis', 'redux', 'relay', 'requirejs', 'rethinkdb', 'ruby', 'ruby minitest', 'ruby on rails', 'rust', 'rxjs', 'saltstack', 'sass', 'scala', 'scikit-image', 'scikit-learn', 'sequelize', 'sinon.js', 'socket.io', 'spring boot', 'sqlite', 'statsmodels', 'support tables', 'svg', 'symfony', 'tailwind css', 'tcl tk', 'tensorflow', 'tensorflow c++', 'terraform' , 'trio', 'twig', 'typescript', 'underscore.js', 'vagrant', 'vite', 'vue router', 'vue.js', 'vuex', 'vulkan', 'web extensions', 'webpack', 'werkzeug', 'wordpress', 'xslt & xpath', 'yarn', 'yii']
	},
	{
		name: 'Picular',
		url: 'https://picular.co',
		keywords: ['color', 'palette', 'color palette', 'primary color generator', 'fast', 'google image search', 'generator', 'hex codes']
	},
	{
		name: 'Canva Wireframe Templates',
		url: 'https://www.canva.com/templates/?query=wireframe',
		keywords: ['canva', 'wireframe', 'template', 'prototype', 'project', 'design']
	},
	{
		name: 'Python Tutor: Visualize Code in Python, JavaScript, C, C++, and Java',
		url: 'https://pythontutor.com/visualize.html#mode=edit',
		keywords: ['code', 'visualize','python', 'javascript', 'c', 'c++', 'javascript', 'java', 'visualize execution', 'coding tutor', 'debug','supplement', 'recursion', 'execution', 'frames', 'objects', 'steps']
	},
	{
		name: 'Dev Locator',
		url: 'https://dev-locator.netlify.app/',
		keywords: ['job search', 'networking', 'location', 'git', 'github']
	},
	{
		name: 'Hue Mint',
		url: 'https://huemint.com/',
		keywords: ['color', 'palette', 'color palette', 'color generator', 'hex codes', 'color accents', 'gradients']
	},
	{
		name: 'Hiring Without Whiteboards',
		url: 'https://github.com/poteto/hiring-without-whiteboards',
		keywords: ['job search', 'interview', 'companies']
	},
];

exports.resources = resources;