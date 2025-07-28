import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import {connectToSocket} from "./src/controllers/SocketManager.js";
import userRoutes from "./src/routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port" , (process.env.port || 8000)); 
app.use(cors());
app.use(express.json({limit : "40kb"}));
app.use(express.urlencoded({limit : "40kb" ,  extended : true}));


app.use("/api/v1/users" , userRoutes);

const start = async () => {

    app.set("mongo_user");
    
    const connectionDb = await mongoose.connect("mongodb+srv://ng683543:DthTacl1BQ3fFObW@cluster0.vzrjcxt.mongodb.net/");
    console.log(`Connected to MongoDB : ${connectionDb.connection.host}`);
    server.listen (app.get("port") , ()=>{
        console.log("Listening on port 8000");

    })
}
 
start();