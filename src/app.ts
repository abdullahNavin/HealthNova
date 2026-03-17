import express, { Application } from "express";
import { SpecalityRoutes } from "./module/specality/specality.routes";
import { AuthRoutes } from "./module/auth/auth.routes";
import { userRoutes } from "./module/user/user.routes";


const app: Application = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("HealthNova server is runing");
})

app.use("/api/v1/specality", SpecalityRoutes)
app.use("/api/v1/auth", AuthRoutes)
app.use("/api/v1/user", userRoutes)

export default app;