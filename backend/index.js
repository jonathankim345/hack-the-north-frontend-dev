require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const { EMAIL, PASSWORD } = process.env;
const PORT = process.env.PORT || 3000; // Use the dynamic port assigned by Vercel or default to 3000

app.use(cors({
    origin: ["https://hack-the-north-frontend-dev.vercel.app", "https://hack-the-north-frontend-dev.vercel.app/login"],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.static(path.join(__dirname, 'build')));

// Redirect all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.json()); // Parse JSON request bodies

app.get('/api/events', async (req, res) => {
    try {
        const response = await axios.post('https://api.hackthenorth.com/v3/graphql', {
            query: `
                query {
                    sampleEvents {
                        id
                        name
                        event_type
                        permission
                        start_time
                        end_time
                        description
                        speakers {
                            name
                        }
                        public_url
                        private_url
                        related_events
                    }
                }
            `
        });
        const sampleEvents = response.data.data.sampleEvents;
        sampleEvents.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
        res.json(sampleEvents);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/login', (req, res) => {
    console.log('Received login request');
    const { email, password } = req.body;
    if (email === EMAIL && password === PASSWORD) {
        const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', "token": token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});