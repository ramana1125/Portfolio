import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const clientDist = path.join(__dirname, "../client/dist");
const hasBuild = fs.existsSync(path.join(clientDist, "index.html"));

app.use(
  cors({
    origin: [CLIENT_URL, "http://localhost:5173"],
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "Portfolio server is running" });
});

if (hasBuild) {
  app.use(express.static(clientDist));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.sendFile(path.join(clientDist, "index.html"), (err) => {
      if (err) res.status(404).json({ error: "Not found" });
    });
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  if (!hasBuild) {
    console.log("No client build found — run: npm run build --prefix client");
    console.log("For development, run client: npm run dev --prefix client");
  }
});
