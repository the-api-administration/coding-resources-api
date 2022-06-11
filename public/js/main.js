// let resources;
// fetchResources();

// async function fetchResources() {
// 	const response = await fetch(`/api/`);
// 	const data = await response.json();
// 	resources = data;
// }

document.getElementById('keyword-btn').addEventListener('click', async () => {
	const keyword = document.querySelector('input').value;

	try {
		const res = await fetch(`/api/${keyword}`);
		const data = await res.json();
	} catch (err) {
		console.error(err);
	}
});
