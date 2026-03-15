import express, { Application } from "express";
import { SpecalityRoutes } from "./module/specality/specality.routes";


const app: Application = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("HealthNova server is runing");
})

app.use("/api/v1/specality", SpecalityRoutes)

export default app;