import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT ||3000;

app.use(express.static('public')); // Serve static files

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle IP info requests
app.get('/api/ipinfo', async (req, res) => {
    const ip = req.query.ip;

    if (!ip) {
        return res.status(400).json({ error: 'IP address is required' });
    }

    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${ip}`);
        const data = await response.json();

        if (data.error) {
            return res.status(400).json({ error: data.error.message });
        }

        // Respond with IP information
        res.json({
            ip: data.ip || 'Not available',
            location: data.location ? `${data.location.city || 'City not available'}, ${data.location.country || 'Country not available'}` : 'Location not available',
            timezone: data.location ? `UTC ${data.location.timezone || 'Timezone not available'}` : 'Timezone not available',
            isp: data.isp || 'ISP not available',
            lat: data.location ? data.location.lat : 0,
            lng: data.location ? data.location.lng : 0
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching IP information' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});