import portfolioData from './data';
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// ====================================
// Middleware Setup
// ====================================

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// Enable CORS
app.use(cors());

// Compression for better performance
app.use(compression());

// Logging
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

// ====================================
// API Routes (for future expansion)
// ====================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint (example - you can expand this)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Missing required fields' 
    });
  }

  // Here you would typically:
  // 1. Save to database
  // 2. Send email notification
  // 3. Log the contact request
  
  console.log('Contact form submission:', { name, email, message });
  
  res.status(200).json({ 
    success: true, 
    message: 'Message received successfully' 
  });
});

// Get portfolio data (example - you can move your content here)
app.get('/api/portfolio', (req, res) => {
  res.status(200).json(portfolioData);
});

// ====================================
// Serve Static Files (React Build)
// ====================================

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// For any other routes, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ====================================
// Error Handling Middleware
// ====================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ====================================
// Start Server
// ====================================

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📊 Portfolio API: http://localhost:${PORT}/api/portfolio`);
});