const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8000;

// Route: /admin
app.get("/admin", (req, res) => {
  const { user, pass } = req.query;

  // 1. Check credentials
  if (user === "admin" && pass === "1234") {
    // 2. Success: Read admin_dashboard.html
    const filePath = path.join(__dirname, "admin_dashboard.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.status(500).send("Error loading dashboard.");
      } else {
        res.send(data); // Send HTML content to browser
      }
    });
  } else {
    // 3. Failure: Wrong credentials
    res.status(401).send("Access Denied.");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});