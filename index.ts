import express from "express"
import * as dotenv from "dotenv";

import { getCovidData } from "./covidData";
dotenv.config({ path: __dirname + "/.env" });

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
    const data = await getCovidData();
    //console.log(data);
    res.render("pages/index", { covidData: data });
});

console.log("Listening to port " + process.env.PORT)
app.listen(process.env.PORT);