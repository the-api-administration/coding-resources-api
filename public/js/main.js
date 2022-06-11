let resources;
fetchResources();

async function fetchResources() {
	const response = await fetch(`/api/`);
	const data = await response.json();
	resources = data;
}

document.getElementById('keyword-btn').addEventListener('click', () => {
	const keyword = document.querySelector('input').value;
});
