import express from "express"
import UserRouter from "./routes/userRoute.js";

const PORT = 3000;
const app = express()
app.use(express.json())
const router = express.Router()

app.use("/api/v1", router)

router.use("/user", UserRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
