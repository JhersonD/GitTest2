import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import path from "path"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./database/connectToMongoDB.js";
import messageRoutes from "./models/message.model.js";
import userRoutes from "./routes/user.routes.js";


const PORT = process.env.PORT || 5001;
const app = express();

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT,() => {
    connectToMongoDB()
    console.log("Server Running on port",PORT)
}) 