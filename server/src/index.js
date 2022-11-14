import express from 'express';
import DBConnection from './model/index.js';
import projectRoute from './route/projectRoute.js';
import skillRoute from './route/skillRoute.js';
import messageRoute from './route/messageRoute.js';
import userRoute from './route/userRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors({
    origin: "*"
}));


app.use("/project",projectRoute);
app.use("/skill",skillRoute);
app.use("/message",messageRoute);
app.use("/user",userRoute);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    
}

app.listen(process.env.PORT || 8000,async () => {

    console.log("Server Started");
    try {
        await DBConnection;
    } catch (e) {
        console.log(e);
    }
})