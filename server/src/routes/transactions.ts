import { Router } from "express";
import {
  getAllTransactions,
  createTransaction,
  deleteTransaction,
} from "../controllers/transactionsController";

const router = Router();

router.get("/", getAllTransactions);
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);

export default router;
