document.getElementById('keyword-btn').addEventListener('click', async () => {
	const keyword = document.querySelector('input').value;
	const list = document.getElementById('result-list');
	list.innerHTML = '';

	try {
		const res = await fetch('/api');
		const data = await res.json();
		const matches = data.filter(resource => resource.keywords.some(str => str.includes(keyword)));

		console.log(matches);

		matches.forEach(match => {
			const li = document.createElement('li');

			li.innerHTML = `
				<pre class="json"><code>{<div class="indent"><br>name: ${match.name},<br>url: ${match.url},<br class="middle-br">keywords: [${match.keywords.map(keyword => `'${keyword}'`).join(", ")}]</div><br>}</code>
				</pre>
			`;

			list.appendChild(li);
		});

		console.log('here')
	} catch(err) {
		console.error(err);
	}
});
