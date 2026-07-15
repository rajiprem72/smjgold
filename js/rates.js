fetch('./data/rates.json')
    .then(response => response.json())
    .then(data => {

        document.getElementById('gold24').textContent =
            `₹ ${data.gold24}`;

        document.getElementById('gold22').textContent =
            `₹ ${data.gold22}`;

        document.getElementById('silver').textContent =
            `₹ ${data.silver}`;

        document.getElementById('updatedAt').textContent =
            data.updated_at;

        document.getElementById('disclaimer').textContent =
            data.disclaimer;

    })
    .catch(error => {

        console.error(error);

        document.getElementById('gold24').textContent = 'N/A';
        document.getElementById('gold22').textContent = 'N/A';
        document.getElementById('silver').textContent = 'N/A';
        document.getElementById('updatedAt').textContent = 'N/A';
    });
