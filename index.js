require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");

const connectDB = require("./config/database");
connectDB();

//Loop of allowed origins
const allowedOrigins = [
  "https://angler360-front.vercel.app",
  "http://localhost:3000",
  "http://localhost:3001",
];

app.use(express.static(__dirname + "/"));
app.use(cookieParser());
app.use(express.json());
//CORS policy access
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(cookieParser());



app.get("/", (req, res) => {
  res.json({ message: "EMI Api is  working" });
});

// register
app.use("/api/register", require("./routes/register"));

// users
app.use("/api/users", require("./routes/users"));

// singup API
app.use("/api/signup", require("./routes/register"));

// login api
app.use("/api/login", require("./routes/login"));

// logout api
app.use("/api/logout", require("./routes/logout"));

// Profile req and res
app.use("/api/profile", require("./Profile/Userprofile"));

// Product add
app.use("/api/product", require("./routes/product"));

// sold product
app.use("/api/soldproduct", require("./routes/sold_product"));

// file upload
app.use("/api/upload", require("./routes/fileupload"));

// Bank details
app.use("/api/bank", require("./routes/bank"));

// activity details
app.use("/api/activity", require("./routes/activity"));

// ride details
app.use("/api/ride", require("./routes/ride_service"));


app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
