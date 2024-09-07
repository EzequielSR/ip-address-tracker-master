// script.js
document.getElementById('ipForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const ip = document.getElementById('ipInput').value;

  try {
      const response = await fetch('/api/ipinfo', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ip })
      });
      
      const data = await response.json();

      if (response.ok) {
          document.getElementById('ipAddress').textContent = `IP Address: ${data.ip}`;
          document.getElementById('location').textContent = `Location: ${data.location}`;
          document.getElementById('timezone').textContent = `Timezone: ${data.timezone}`;
          document.getElementById('isp').textContent = `ISP: ${data.isp}`;

          // Atualizar o mapa
          updateMap(data.lat, data.lng);
      } else {
          alert(data.error);
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while fetching the IP information.');
  }
});
