import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./database/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json());
app.use("/api/auth",authRoutes);

//app.get("/", (req, res) =>{
    // root route http://localhost:5000/
//    res.send("Hello world!!")
//});


app.listen(PORT,() => {
    connectToMongoDB()
    console.log("Server Running on port",PORT)
}) 