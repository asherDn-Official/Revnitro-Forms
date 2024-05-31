const express = require("express");
const path = require("path");
const FormsRouter = require("./routes/FormsRoute");
const TieupsRouter = require("./routes/TieupRoute");
const BikeConsult = require("./routes/bikeConsult");
const BikeService = require("./routes/bikeService");
const Escalation = require("./routes/escalation");
const ApplyJob = require("./routes/applyJob");
const BusinessCollabration = require("./routes/businessColabration");
const CarService = require("./routes/carService");
const OwnershipReview = require("./routes/ownershipReview");
const CarConsult = require("./routes/carConsult");
const ECU = require("./routes/ecuTuning");
const Racing = require("./routes/racing");
const connectToDatabase = require("./database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;
connectToDatabase();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors({ origin: [`https://forms.revnitro.com`], credentials: true }));
app.use("/uploads", express.static("uploads"));
// app.get("/", (req, res) => {
//   console.log("start");
//   res.status(200).send(true);
// });
app.use("/car", CarConsult);
app.use("/bike", BikeConsult);
app.use("/carService", CarService);
app.use("/escalation", Escalation);
app.use("/applyJob", ApplyJob);
app.use("/businessCollabration", BusinessCollabration);
app.use("/ownershipReview", OwnershipReview);
app.use("/carService", CarService);
app.use("/bikeService", BikeService);
app.use("/ecu", ECU);
app.use("/race", Racing);
app.use("/forms", FormsRouter);
app.use("/tieups", TieupsRouter);

app.use(
  express.static(path.join(__dirname, "../Revnitro-Forms-Frontend-main/build"))
);
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../Revnitro-Forms-Frontend-main/build/index.html")
  );
});

app.listen(PORT, () => {
  console.log(`server started on port :${PORT}`);
});
