import express from "express"
import router from "./routes/userRoute.js";

const PORT = 3000;
const app = express()

app.use(express.json())
app.use("/api/user", router)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
