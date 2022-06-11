let resources;
fetchResources();

async function fetchResources() {
	const response = await fetch(`/api/`);
	const data = await response.json();
	resources = data;
}

document.getElementById('keyword-btn').addEventListener('click', async () => {
	const keyword = document.querySelector('input').value;
	const matches = await resources.filter((obj) => obj.keywords.some(str => str.includes(keyword)));
	const list = document.getElementById('result-list');
});
