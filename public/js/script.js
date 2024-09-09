// script.js
document.getElementById('ipForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const ip = document.getElementById('ipInput').value;

  try {
    const response = await fetch(`/api/ipinfo?ip=${ip}`, {
      method: 'GET'
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById('ipAddress').textContent = ` ${data.ip}`;
      document.getElementById('location').textContent = ` ${data.location}`;
      document.getElementById('timezone').textContent = ` ${data.timezone}`;
      document.getElementById('isp').textContent = ` ${data.isp}`;

      // Update Map
      if (data.lat && data.lng) {
        updateMap(data.lat, data.lng);
      } else {
        console.error('Error: Latitude or Longitude not found');
        alert('Error: Latitude or Longitude not found');
      }
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while fetching the IP information.');
  }
});
