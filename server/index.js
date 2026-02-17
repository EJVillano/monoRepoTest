import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix for ES modules (__dirname replacement)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// ======================
// API ROUTES
// ======================

app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "Server running" });
});

// ======================
// SERVE FRONTEND
// ======================

const clientPath = path.join(__dirname, "../client/dist");

app.use(express.static(clientPath));

// React Router catch-all (Express 5 safe)
app.use((req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// ======================
// START SERVER
// ======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
