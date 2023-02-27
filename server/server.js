import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import routerIndex from "./routes/index.js";
import routerUser from "./routes/user.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use(cors());

app.use("/api/movies", routerIndex);
app.use("/api/users", routerUser);


const PORT = process.env.PORT;

mongoose.set(`strictQuery`, false);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Express is listening on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });

