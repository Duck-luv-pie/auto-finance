import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import transactionRoutes from "./routes/transactions";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
  res.send("Personal Finance Tracker API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
