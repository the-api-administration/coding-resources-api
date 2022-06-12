const btn = document.getElementById('keyword-btn');
btn.addEventListener('click', getMatches);

/**
 * Name: getMatches
 * Description: Find resources with keywords matching the user input
 */
async function getMatches() {
	//gets the input from the text box and trims white space and makes it lower case
	const keyword = document.querySelector('input').value.toLowerCase().trim();

	try {
		const res = await fetch('/api');
		const data = await res.json();
		// Filters array from the API for resources with keywords containing user value
		const matches = data.filter(resource => resource.keywords.some(str => str.includes(keyword)));
		renderMatches(matches);
	} catch (err) {
		console.error(err);
	}
}

function renderMatches(matches) {
	const list = document.getElementById('result-list');
	list.innerHTML = '';

	matches.forEach(match => {
		const li = document.createElement('li');

		li.innerHTML = `
			<pre class="json"><code>{<div class="indent"><br>name: ${match.name},<br>url: ${match.url},<br class="middle-br">keywords: [${match.keywords.map(keyword => `'${keyword}'`).join(", ")}]</div><br>}</code>
			</pre>
		`;

		list.appendChild(li);
	});
}