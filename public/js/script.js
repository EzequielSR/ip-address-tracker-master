document.getElementById('ipForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form from submitting the default way

  const ipInput = document.getElementById('ipInput').value;
  const response = await fetch(`/api/ipinfo?ip=${ipInput}`);
  const data = await response.json();

  if (response.ok) {
      // Update HTML with IP information
      document.getElementById('ipAddress').textContent = data.ip;
      document.getElementById('location').textContent = data.location;
      document.getElementById('timezone').textContent = data.timezone;
      document.getElementById('isp').textContent = data.isp;

      // Update the map
      updateMap(data.lat, data.lng);
  } else {
      console.error(data.error);
  }
});

