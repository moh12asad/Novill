require("./models/User");
require("./models/Track");
require("./models/Pharm");
require("./models/Delivery");
require("./models/Cart");
require("./models/Address");
require("./models/Order");
require("./models/Reports");
require("./models/Testing");
require("./models/Testing1");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = "mongodb+srv://moh12asad:PasswordPassword@cluster0.rcv9zfd.mongodb.net/?retryWrites=true&w=majority";

if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you connected it currectly`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
