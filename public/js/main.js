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
		const matches = data.filter(resource => resource.keywords.some(str => str.toLowerCase().includes(keyword)));
		renderMatches(matches);
	} catch (err) {
		console.error(err);
	}
}

/**
 * Name: renderMatches
 * Description: takes an array of matches, each match represents resources that had contained a resource's keyword and renders each match to the DOM.
 * @param {*} matches - accepts an array of objects had contained a resource's keyword.
 */
function renderMatches(matches) {
	const list = document.getElementById('result-list');
	list.innerHTML = '';

	// For every match found, render the objects to the DOM in JSON format
	if(matches.length > 0) {
		matches.forEach(match => {
			const li = document.createElement('li');

			// Create an element that looks like a JSON object for every match
			li.innerHTML = `
				<pre class="json"><code>{<div class="indent"><br>name: '${match.name}',<br>url: <a href="${match.url}" target="_blank">'${match.url}',</a><br class="middle-br">keywords: [${match.keywords.map(keyword => `'${keyword}'`).join(", ")}]<br></div>},</code></pre>
			`;

			list.appendChild(li);
		});
	} else {
		const li = document.createElement('li');
		li.innerText = 'No matches were found.';
		list.appendChild(li);
	}
}