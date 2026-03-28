const express = require("express");
const app = express();

// Store request count per user
const requestCount = {};

// Reset all counts every 1 second
setInterval(() => {
  for (let user in requestCount) {
    requestCount[user] = 0;
  }
}, 1000);

// Middleware
function rateLimiter(req, res, next) {
  const userId = req.query.id;

  if (!userId) {
    return res.status(400).json({
      msg: "User ID required",
    });
  }

  // Initialize if not present
  if (!requestCount[userId]) {
    requestCount[userId] = 0;
  }

  requestCount[userId]++;

  if (requestCount[userId] > 5) {
    return res.status(429).json({
      msg: "Too many requests (max 5/sec)",
    });
  }

  next();
}

// Apply globally
app.use(rateLimiter);

// Routes
app.get("/ride1", (req, res) => {
  res.json({
    msg: "Ride 1 success",
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "Ride 2 success",
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
 