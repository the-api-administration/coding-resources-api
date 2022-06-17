const resources = [
	{
		name: 'Oh Shit, Git!',
		url: 'https://ohshitgit.com/',
		description: 'A guide to git commands',
		keywords: ['git', 'version control', 'command line'],
	},
	{
		name: 'Javascript.info - Arrays',
		url: 'https://javascript.info/array',
		description: 'An informative article on arrays',
		keywords: ['arrays', 'javascript'],
	},
	{
		name: 'Building a Simple CRUD App with Node, Express, and MongoDB',
		url: 'https://zellwk.com/blog/crud-express-mongodb/',
		description: 'A comprehensive tutorial on how to build a CRUD app that lets you track a list of quotes from Star Wars characters using Node, Express and MongoDB ',
		keywords: ['mongodb', 'express', 'node', 'backend', 'javascript'],
	},
	{
		name: 'Useful string methods',
		url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods',
		description: 'An article on the useful operations that can be done on strings with built-in methods',
		keywords: ['string methods', 'javascript'],
	},
	{
		name: 'The JavaScript Way',
		url: 'https://github.com/thejsway/thejsway',
		description: 'A book that aims to be a useful companion for anyone wishing to (re)discover the many facets of JavaScript',
		keywords: ['javascript'],
	},
	{
		name: 'First Timers Only: Beginner Guide to Open Source',
		url: 'https://www.firsttimersonly.com/',
		description: 'Friendly open source projects for code-newbies',
		keywords: ['open source', 'code newbies'],
	},
	{
		name: 'A Complete Guide to Flexbox',
		url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
		description: 'A complete guide that explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart',
		keywords: ['css', 'flexbox', 'properties', 'parent element', 'child element', 'flex items'],
	},
	{
		name: 'Learn to Code HTML & CSS',
		url: 'https://learn.shayhowe.com/html-css/',
		description: 'Learn to Code HTML & CSS is a simple and comprehensive guide dedicated to helping beginners learn HTML and CSS. Outlining the fundamentals, this guide works through all common elements of front-end design and development',
		keywords: ['css', 'html', 'shay howe'],
	},
	{
		name: 'CSS-Tricks',
		url: 'https://css-tricks.com/',
		description: 'Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.',
		keywords: ['css'],
	},
	{
		name: 'All About Floats',
		url: 'https://css-tricks.com/all-about-floats/',
		description: 'An article about float concepts',
		keywords: ['css', 'floats']
	},
	{
		name: 'JavaScript Arrays: Explain Like I\'m Five',
		url: 'https://sumudusiriwardana.hashnode.dev/javascript-arrays-explain-like-im-five',
		description: 'A hashnode blog article that explains the basics of arrays and array methods',
		keywords: ['arrays', 'methods', 'basics', 'fundamentals', 'javascript'],
	},
	{
		name: 'Objects vs. Arrays',
		url: 'https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421',
		description: 'An article explaining the basic differences between objects and arrays',
		keywords: ['arrays', 'basics', 'fundamentals', 'javascript', 'objects'],
	},
	{
		name: 'Flexbex Zombies',
		url: 'https://mastery.games/flexboxzombies/',
		description: 'In this game you control a Hoodie character with a crossbow, using Flexbox code. The goal is to learn Flexbox in order to survive the onslaught of zombies.',
		keywords: ['css', 'flexbox'],
	},
	{
		name: 'A Complete Guide to CSS Media Queries',
		url: 'https://css-tricks.com/a-complete-guide-to-css-media-queries/',
		description: 'A guide to media queries, which can modify the appearance (and even behavior) or a website or app based on a matched set of conditions about the user’s device, browser or system settings.',
		keywords: ['css', 'media queries', 'responsive web design', 'responsive']
	},
	{
		name: 'A Complete Guide to Grid',
		url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
		description: 'Our comprehensive guide to CSS grid, focusing on all the settings both for the grid parent container and the grid child elements.',
		keywords: ['css', 'css grid', 'grid']
	},
	{
		name: 'Objects',
		url: 'https://javascript.info/object',
		description: 'An article on the basics of objects',
		keywords: ['javascript', 'objects']
	},
	{
		name: 'Crypto Zombies',
		url: "https://cryptozombies.io",
		description: 'CryptoZombies is an interactive school that teaches you all things technical about blockchains. Learn to make smart contracts in Solidity by making your own crypto-collectibles game.', 
		keywords: ["crypto", "web3", "blockchain"]
	},
	{
		name: 'How to make your first pull request on GitHub',
		url: "https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/",
		description: 'A step by step guide on how to make your first pull request',
		keywords: ["open source", "git", "pull request"]
	},
  {
		name: 'CORS Proxy',
		url: 'https://codetabs.com/cors-proxy/cors-proxy.html',
		description: 'A CORS proxy is a service that allows developers (probably you) to access resources from other websites, without having to own that website. Be careful when you use them! (Jacob).',
		keywords: ['cors', 'proxy', 'api', 'errors']
	},
	{
		name: 'How to write good commit messages',
		url: 'https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/',
		description: 'An article on how to create a useful revision history by creating an agreed upon commit message convention to use. This applies to both personal and professional projects.',
		keywords: ['git', 'commit', 'version control', 'command line']
	},
	{
		name: 'Grind 75 questions',
		url: 'https://www.techinterviewhandbook.org/grind75',
		description: 'Grind 75 is a better version of Blind 75 which goes beyond 75 questions. You can customize the available time you have, difficulty, topics, etc.',
		keywords: ['interview', 'job search', 'coding challenges', 'leet code']
	},
  {
		name: 'Font Awesome',
		url: 'https://faicons.com/',
		description: 'Font Awesome is the Internet\'s icon library and toolkit, used by millions of designers, developers, and content creators.',
		keywords: ['icons', 'frontend']
	},
	{
		name: 'Frontend Project README template',
		url: 'https://github.com/alecortega/portfolio-template',
		description: 'A template to get started with your next portfolio README',
		keywords: ['markdown', 'frontend', 'documentation']
	},
	{
		name: 'CSS Diner',
		url: 'https://flukeout.github.io/',
		description: 'A fun game to learn and practice CSS Selectors! Selectors are how you pick which element to apply styles to.',
		keywords: ['css', 'game', 'selectors']
	},
	{
		name: 'Flexbox Froggy',
		url: 'https://flexboxfroggy.com/',
		description: 'Flexbox Froggy is a game for learning CSS flexbox. It is a fun way to learn how to format web content.',
		keywords: ['css', 'flexbox', 'game']
	},
	{
		name: 'Learn Git Branching',
		url: 'https://learngitbranching.js.org/',
		description: '"Learn Git Branching" is the most visual and interactive way to learn Git on the web; you\'ll be challenged with exciting levels, given step-by-step demonstrations of powerful features, and maybe even have a bit of fun along the way.',
		keywords: ['git', 'version control', 'branching', 'github']
	},
	{
		name: 'What the Flexbox',
		url: 'https://flexbox.io/',
		description: 'A simple, free 20 video course that will help you master CSS Flexbox! The first 13 videos are aimed at understanding the fundamentals of Flexbox - we will take a deep dive into understanding rows, columns, axes, wrapping, alignment, centering and layout. The last 7 are code alongs where we will build everything from a navigation to a mobile app layout entirely with Flexbox!',
		keywords: ['css', 'flexbox', 'video course', 'alignment', 'styling']	
	},
	{
		name: 'Code Driven Animation Editor',
		url: 'https://www.timelinecss.io/',
		description: 'The CSS file is the "source of truth" for the project. This CSS source code can be edited directly, and changes will be reflected in the live preview and the timeline view immediately',
		keywords: ['css animations', 'editor', 'visuals']
	},
	{
		name: 'Simple Icons',
		url: 'https://simpleicons.org',
		description: 'A collection of free SVG icons for your website or web application project',
		keywords: ['svg icons', 'icons', 'popular brands']
	},
	{
		name: 'JavaScript Visualizer 9000',
		url: 'https://www.jsv9000.app',
		description: 'A tool for visualizing execution content, hoisting, closures and scopes in JavaScript',
		keywords: ['javascript', 'call stack', 'event loop', 'microtask queue', 'task queue']
	},
	{
		name: 'unDraw',
		url: 'https://undraw.co',
		description: 'A constantly updated design project with beautiful SVG images that you can use completely free and without attribution.',
		keywords: ['open-source illustrations', 'svg', 'images', 'design', 'graphics', 'art', 'vectors', 'minimal', 'free', 'modern', 'png', 'interface', 'open-source']
	},
	{
		name: 'DevDocs',
		url: 'https://devdocs.io',
		description: 'DevDocs is an open source web app that combines documentation for lots of developer tools into a single searchable interface',
		keywords: ['api documentation', 'free', 'open-source', 'developer tools', 'interface', 'offline', 'css', 'html', 'http', 'javascript', 'web apis', 'angular', 'angularjs', 'ansible', 'apache http server', 'apache pig', 'async', 'babel', 'backbone.js','bash', 'bluebird', 'bootstrap', 'bottle', 'bower', 'c', 'c++', 'cakephp', 'chai', 'chef', 'clojure', 'cmake', 'codeception', 'codeceptjs', 'codeigniter', 'coffeescript', 'composer','cordova', 'crystal','cypress','d','d3.js', 'dart', 'deno', 'django', 'django rest framework', 'docker', 'dojo', 'drupal', 'eigen3', 'electron', 'elisp', 'elixir', 'ember.js', 'enzyme', 'erlang', 'esbuild', 'eslint', 'express', 'falcon', 'fish', 'flask', 'flow', 'gcc', 'git', 'gnu fortran', 'gnu make', 'gnucobol','gnuplot', 'go', 'godot', 'graphite', 'groovy', 'grunt', 'gtk', 'handlebars', 'haproxy', 'haskell', 'haxe', 'homebrew', 'i3', 'immutable.js', 'influxdata', 'jasmine', 'jekyll', 'jest', 'jinja', 'jq', 'jquery', 'jquery mobile', 'jquery ui', 'jsdoc', 'julia', 'knockout.js', 'koa', 'kotlin', 'kubectl', 'kubernetes', 'laravel', 'latex', 'leaflet', 'less', 'liquid', 'lodash', 'lua', 'love', 'mariadb', 'marionette.js', 'markdown', 'matplotlib', 'meteor', 'mocha', 'modernizr', 'moment.js', 'mongoose', 'nginx', 'nginx lua module', 'nim', 'nix', 'node.js', 'nokogiri', 'npm', 'numpy', 'ocaml', 'octave', 'openjdk', 'opentsdb', 'padrino', 'pandas', 'perl', 'phalcon', 'phaser', 'phoenix', 'php', 'phpunit', 'pointcloudlibrary', 'pony', 'postgresql', 'prettier', 'pug', 'puppeteer', 'pygame', 'python', 'pytorch', 'q', 'qt', 'r', 'ramda', 'react', 'reactbootstrap', 'react native', 'react router', 'reactivex', 'redis', 'redux', 'relay', 'requirejs', 'rethinkdb', 'ruby', 'ruby minitest', 'ruby on rails', 'rust', 'rxjs', 'saltstack', 'sass', 'scala', 'scikit-image', 'scikit-learn', 'sequelize', 'sinon.js', 'socket.io', 'spring boot', 'sqlite', 'statsmodels', 'support tables', 'svg', 'symfony', 'tailwind css', 'tcl tk', 'tensorflow', 'tensorflow c++', 'terraform' , 'trio', 'twig', 'typescript', 'underscore.js', 'vagrant', 'vite', 'vue router', 'vue.js', 'vuex', 'vulkan', 'web extensions', 'webpack', 'werkzeug', 'wordpress', 'xslt & xpath', 'yarn', 'yii']
	},
	{
		name: 'Picular',
		url: 'https://picular.co',
		description: 'Picular is a rocket fast primary color generator using Google\'s image search. If you ever needed the perfect yellow hex code from a banana, this is the tool for you!',
		keywords: ['color', 'palette', 'color palette', 'primary color generator', 'fast', 'google image search', 'generator', 'hex codes']
	},
	{
		name: 'Canva Wireframe Templates',
		description: 'Browse high-quality Wireframe templates for your next design',
		url: 'https://www.canva.com/templates/?query=wireframe',
		keywords: ['canva', 'wireframe', 'template', 'prototype', 'project', 'design']
	},
	{
		name: 'Python Tutor: Visualize Code in Python, JavaScript, C, C++, and Java',
		description: 'This coding tutor tool helps you learn Python, JavaScript, C, C++, and Java by visualizing code execution. You can use it to debug your homework assignments and as a supplement to online coding tutorials.',
		url: 'https://pythontutor.com/visualize.html#mode=edit',
		keywords: ['code', 'visualize','python', 'javascript', 'c', 'c++', 'javascript', 'java', 'visualize execution', 'coding tutor', 'debug','supplement', 'recursion', 'execution', 'frames', 'objects', 'steps']
	},
	{
		name: 'Unscreen',
		url: 'https://www.unscreen.com',
		keywords: ['remove video background', 'video', 'background', 'free', 'hd', 'no watermark', 'api plugins', 'plugins', 'clips', 'video file', 'audio', 'gif', 'presentation', 'remove', '.mp4', '.mov', '.gif', 'url', 'footage', 'record', 'video editing']
	},
	{
		name: 'Quicktools by Picsart',
		url: 'https://tools.picsart.com/image/background-remover/',
		keywords: ['remove', 'background remover', 'image', 'picture', 'transparent', 'ai', 'free', 'refine', 'backgrounds', 'shadows', 'borders']
	},
	{
		name: 'Squoosh',
		url: 'https://squoosh.app',
		keywords: ['compress image', 'reduce file size', 'reduce', 'high quality', 'image', 'smaller file', 'file size', 'privacy', 'image optimizer', 'compress', 'codecs', 'resize', 'convert image', 'convert', 'free', 'open-source', 'pixels', 'real-time', 'jpg', 'png', 'webp', 'avif']
	},
	{
		name: 'Warp',
		url: 'https://www.warp.dev',
		keywords: ['terminal', 'gpu', 'crdt', 'rust', 'zsh', 'fish', 'bash', 'modern', 'development', 'code editor', 'writing code', 'code', 'commands', 'selections', 'cursor positioning', 'ai', 'shell commands', 'terminal sharing', 'customize', 'cli', 'command line']
	},
	{
		name: 'Uiverse',
		url: 'https://uiverse.io',
		keywords: ['ui', 'ui elements', 'open-source', 'free', 'button', 'checkbox', 'toggle', 'switches', 'cards', 'loaders', 'inputs', 'css', 'html', 'hover', 'copy paste', 'cssbuttons']
	},
	{
		name: 'Loaders',
		url: 'https://cssloaders.github.io',
		keywords: ['css', 'html', 'loader', 'loaders', 'animations', 'speed', 'simplicity', 'spinners', 'styling', 'pseudo elements', 'website', 'frontend']
	},
	{
		name: 'Postman',
		url: 'https://www.postman.com',
		keywords: ['api', 'api platform', 'data', 'api lifecycle', 'collaboration', 'design', 'build', 'test', 'iterate', 'documentation', 'workspace', 'rest api', 'accessibility', 'http requests', 'tracking']
	},
	{
		name: 'Screeps',
		url: 'https://screeps.com',
		keywords: ['sandbox', 'game', 'open-source', 'ai', 'programming', 'javascript', 'mmo', 'rts', 'player', 'scripting', 'steam', 'multiplayer', 'strategy game', 'colony', 'resources', 'mine', 'units', 'territory']
	},
	{
		name: 'Oh My Posh',
		url: 'https://ohmyposh.dev',
		keywords: ['theme engine', 'shell', 'color', 'terminal', 'prompt', 'render', 'customizable', 'theme', 'powershell', 'windows', 'macos','linux', 'fonts', 'console', 'full color set', 'prompt string', 'function', 'variable']
	},
	{
		name: 'Compressor',
		url: 'https://compressor.io',
		keywords: ['image compressor', 'image', 'fast', 'efficient', 'jpeg', 'png', 'svg', 'gif', 'webp', 'smaller images', 'faster website', 'optimized', 'seo', 'seo ranking', 'lighthouse', 'compression algorithm', 'shrink']
	},
	{
		name: 'tiny png',
		url: 'https://tinypng.com',
		keywords: ['image compressor', 'image', 'fast', 'efficient', 'jpeg', 'png', 'webp', 'smaller images', 'transparent image', 'faster website', 'optimized', 'seo', 'seo ranking', 'lighthouse', 'compression algorithm', 'shrink']
	},
	{
		name: 'Nerdy Data',
		url: 'https://www.nerdydata.com',
		keywords: ['search engine', 'source-code', 'tech stack', 'code', 'companies', 'leads', 'integrations', 'api access', 'domain', 'domain lookup', 'seo', 'google analytics', 'images', 'badges', 'websites', 'competitors']
	},
	{
		name: 'Coolors',
		url: 'https://coolors.co/palettes/trending',
		keywords: ['color', 'color palettes', 'topics', 'styles', 'hex', 'hex values', 'color schemes', 'color combinations', 'design', 'free', 'css', 'generator']
	},
	{
		name: 'Name Cheap Logo Maker',
		url: 'https://www.namecheap.com/logo-maker/',
		keywords: ['logo', 'logo maker', 'free', 'creator', 'business', 'branding']
	},
	{
		name: 'Unsplash',
		url: 'https://unsplash.com',
		keywords: ['images', 'free', 'high-resolution', 'wallpapers', '3d renders', 'textures', 'patterns', 'experimental', 'architecture', 'nature', 'business and work', 'fashion', 'film', 'food', 'drink', 'street photography', 'arts and culture', 'royalty-free', 'stock photo', 'commercial', 'personal projects']
	},
	{
		name: 'Page Speed',
		url: 'https://pagespeed.web.dev',
		keywords: ['page speed', 'web page', 'speed', 'load time', 'browser request', 'seo', 'optimization']
	},
	{
		name: 'Cloud Convert',
		url: 'https://cloudconvert.com/jpg-to-webp',
		keywords: ['jpg', 'webp', 'converter', 'heic', 'formats', 'high-quality', 'api']
	},
	{
		name: 'Thumbnails for Social Media "Metatags',
		url: 'https://nickcarmont8.medium.com/how-to-add-a-website-thumbnail-for-sharing-your-html-site-on-social-media-facebook-linkedin-12813f8d2618',
		keywords: ['metadata', 'metatags', 'thumbnails', 'social media']
	},
	{
		name: 'HTML Cheat Sheet',
		url: 'https://htmlcheatsheet.com/',
		keywords: ['HTML', 'cheat sheet', 'tags']
	},
	{
		name: 'CSS Cheat Sheet',
		url: 'https://htmlcheatsheet.com/css/',
		keywords: ['CSS', 'cheat sheet', 'box model', 'selectors', 'color picker']
	},
	{
		name: 'JS "JavaScript" Cheat Sheet',
		url: 'https://htmlcheatsheet.com/js/',
		keywords: ['JS', 'Javascript', 'cheat sheet', 'conditionals', 'loops', 'variables', 'dates', 'events', 'functions', 'regex', 'json', 'promises', 'arrays']
	},
	{
		name: 'SEO Cheat Sheet',
		url: 'https://htmlcheatsheet.com/seo/',
		keywords: ['SEO', 'cheat sheet']
	},
	{
		name: 'SEO Guide to Lighthouse Performance Metrics',
		url: 'https://www.searchenginejournal.com/core-web-vitals/technical-seo-lighthouse/',
		keywords: ['SEO', 'lighthouse', 'performance', 'metrics']
	},
	{
		name: 'Centering in CSS',
		url: 'https://ishadeed.com/article/learn-css-centering/#:~:text=To%20center%20an%20inline%20element,is%20text%2Dalign%3A%20center%20.&text=For%20multiple%20inline%20elements%2C%20the,using%20text%2Dalign%3A%20center%20',
		keywords: ['CSS', 'center', 'align']
	},
	// 	Resource Format - please follow the styling below.
	// 	{
	// 		name: '',
	// 		url: '',
	//		description: '',
	// 		keywords: ['']
	// 	},
];

exports.resources = resources;