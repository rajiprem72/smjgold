fetch('./data/rates.json')
    .then(response => response.json())
    .then(data => {

        document.getElementById('gold24').textContent =
            `₹ ${Number(data.gold24).toLocaleString('en-IN')}`;

        document.getElementById('gold22').textContent =
            `₹ ${Number(data.gold22).toLocaleString('en-IN')}`;

        document.getElementById('silver').textContent =
            `₹ ${Number(data.silver).toLocaleString('en-IN')}`;

        document.getElementById('updatedAt').textContent =
            data.updated_at;

        document.getElementById('disclaimer').textContent =
            data.disclaimer;
    })
    .catch(error => {

        console.error('Error loading rates:', error);

        document.getElementById('gold24').textContent = 'N/A';
        document.getElementById('gold22').textContent = 'N/A';
        document.getElementById('silver').textContent = 'N/A';
        document.getElementById('updatedAt').textContent = 'N/A';
    });
