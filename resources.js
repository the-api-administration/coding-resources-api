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
		name: 'DevDocs',
		url: 'https://devdocs.io',
		keywords: ['api documentation', 'free', 'open-source', 'developer tools', 'interface', 'offline', 'css', 'html', 'http', 'javascript', 'web apis', 'angular', 'angularjs', 'ansible', 'apache http server', 'apache pig', 'async', 'babel', 'backbone.js', 'bash', 'bluebird', 'bootstrap', 'bottle', 'bower', 'c', 'c++', 'cakephp', 'chai', 'chef', 'clojure', 'cmake', 'codeception', 'codeceptjs', 'codeigniter', 'coffeescript', 'composer', 'cordova', 'crystal', 'cypress', 'd', 'd3.js', 'dart', 'deno', 'django', 'django rest framework', 'docker', 'dojo', 'drupal', 'eigen3', 'electron', 'elisp', 'elixir', 'ember.js', 'enzyme', 'erlang', 'esbuild', 'eslint', 'express', 'falcon', 'fish', 'flask', 'flow', 'gcc', 'git', 'gnu fortran', 'gnu make', 'gnucobol', 'gnuplot', 'go', 'godot', 'graphite', 'groovy', 'grunt', 'gtk', 'handlebars', 'haproxy', 'haskell', 'haxe', 'homebrew', 'i3', 'immutable.js', 'influxdata', 'jasmine', 'jekyll', 'jest', 'jinja', 'jq', 'jquery', 'jquery mobile', 'jquery ui', 'jsdoc', 'julia', 'knockout.js', 'koa', 'kotlin', 'kubectl', 'kubernetes', 'laravel', 'latex', 'leaflet', 'less', 'liquid', 'lodash', 'lua', 'love', 'mariadb', 'marionette.js', 'markdown', 'matplotlib', 'meteor', 'mocha', 'modernizr', 'moment.js', 'mongoose', 'nginx', 'nginx lua module', 'nim', 'nix', 'node.js', 'nokogiri', 'npm', 'numpy', 'ocaml', 'octave', 'openjdk', 'opentsdb', 'padrino', 'pandas', 'perl', 'phalcon', 'phaser', 'phoenix', 'php', 'phpunit', 'pointcloudlibrary', 'pony', 'postgresql', 'prettier', 'pug', 'puppeteer', 'pygame', 'python', 'pytorch', 'q', 'qt', 'r', 'ramda', 'react', 'reactbootstrap', 'react native', 'react router', 'reactivex', 'redis', 'redux', 'relay', 'requirejs', 'rethinkdb', 'ruby', 'ruby minitest', 'ruby on rails', 'rust', 'rxjs', 'saltstack', 'sass', 'scala', 'scikit-image', 'scikit-learn', 'sequelize', 'sinon.js', 'socket.io', 'spring boot', 'sqlite', 'statsmodels', 'support tables', 'svg', 'symfony', 'tailwind css', 'tcl tk', 'tensorflow', 'tensorflow c++', 'terraform', 'trio', 'twig', 'typescript', 'underscore.js', 'vagrant', 'vite', 'vue router', 'vue.js', 'vuex', 'vulkan', 'web extensions', 'webpack', 'werkzeug', 'wordpress', 'xslt & xpath', 'yarn', 'yii']
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
		keywords: ['code', 'visualize', 'python', 'javascript', 'c', 'c++', 'javascript', 'java', 'visualize execution', 'coding tutor', 'debug', 'supplement', 'recursion', 'execution', 'frames', 'objects', 'steps']
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
		keywords: ['theme engine', 'shell', 'color', 'terminal', 'prompt', 'render', 'customizable', 'theme', 'powershell', 'windows', 'macos', 'linux', 'fonts', 'console', 'full color set', 'prompt string', 'function', 'variable']
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
		name: '30 Days of Node',
		url: 'https://www.nodejsera.com/nodejs-tutorial-day1-thebeginning.html',
		keywords: ['node', 'nodejs']
	}, 
	{
		name: 'John Smilga - React Projects Github Repo',
		url: 'https://github.com/john-smilga/react-projects', 
		keywords: ['react', 'reactjs', 'hooks', 'projects', 'tutorial']
	},
	{
		name: 'Traversy Media - Youtube',
		url: 'https://www.youtube.com/c/TraversyMedia',
		keywords: ['fullstack', 'nodejs', 'node', 'react', 'reactjs', 'crash course', 'tutorial', 'graphql', 'html', 'css', 'javascript', 'web development', 'python', 'flask']
	}, 
	{
		name: 'Traversy Media - Github',
		url: 'https://github.com/bradtraversy',
		keywords: ['fullstack', 'nodejs', 'node', 'react', 'reactjs', 'crash course', 'tutorial', 'graphql', 'html', 'css', 'javascript', 'web development', 'python', 'flask']
	}, 
	{
		name: '50 Projects in 50 Days - HTML, CSS, JS',
		url: 'https://github.com/bradtraversy/50projects50days',
		keywords: ['html', 'css', 'javascript', 'js', 'projects', 'tutorial']
	}, 
	{
		name: '10 Hours 10 Projects - Florin Pop', 
		url: 'https://www.youtube.com/watch?v=dtKciwk_si4&list=PLgBH1CvjOA636I8hnHSyuOnX341XQrBth', 
		keywords: ['projects', 'tutorial', 'html', 'css', 'js', 'javascript', 'coding challenge']
	}, 
	{
		name: 'The Net Ninja - Youtube', 
		url: 'https://www.youtube.com/c/TheNetNinja', 
		keywords: ['web development', 'full stack', 'javascript', 'js', 'nodejs', 'node', 'flutter', 'vue', 'html', 'css', 'typescript', 'react', 'next', 'nextjs', 'laravel']
	}, 
	{
		name: 'w3schools',
		url: 'https://www.w3schools.com/',
		keywords: ['html', 'css', 'javascript', 'python', 'sql', 'php', 'java', 'c', 'r', 'kotlin', 'json', 'angularjs', 'sass', 'icons', 'svg', 'canvas', 'pandas', 'git', 'scipy', 'go']
	}, 
	{
		name: 'Web Dev Simplified - Youtube',
		url: 'https://www.youtube.com/c/WebDevSimplified',
		keywords: ['web development', 'css', 'html', 'javascript', 'js', 'node', 'nodejs', 'react', 'full stack', 'frontend', 'backend']
	}

	// 	Resource Format - please follow the styling below.
	// 	{
	// 		name: '',
	// 		url: '',
	// 		keywords: ['']
	// 	},
];

exports.resources = resources;
