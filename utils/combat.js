var id = 2
const test = async () => {
  response = await fetch(`/treasures/:${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.getElementById('#h_name').innerText(response.body.description);
  } else {
    alert(response.statusText);
  }
};
module.exports = test;