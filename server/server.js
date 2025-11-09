// ---------------------- REQUIRE ALL PACKAGES ----------------------
require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// ---------------------- INITIALIZE APP ----------------------
const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";

// ---------------------- GLOBAL MIDDLEWARES ----------------------
// Secure HTTP headers
app.use(helmet());
// Log HTTP requests (only in development)
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

// Parse JSON and cookies
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS for frontend domain
app.use(
    cors({
        origin: "http://127.0.0.1:5000",
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
        maxAge: 86400
    })
);

// Gzip compression for performance
app.use(compression());

// ---------------------- ROUTES ----------------------
const adminPath = path.join(__dirname, "../frontend/dist/");
app.use("/admin", express.static(adminPath));
app.get("/admin", (req, res) => {
    res.sendFile(adminPath + "index.html");
});

app.get("/", (req, res) => {
     res.send("🚀 Server is running successfully!");
});

// ---------------------- APIs Will Be Defined Here ----------------------

// ---------------------- ERROR HANDLING ----------------------
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({
        success: false,
        err,
        message: "Internal Server Error"
    });
});

// ---------------------- START SERVER ----------------------
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://${HOST}\n`);
});
