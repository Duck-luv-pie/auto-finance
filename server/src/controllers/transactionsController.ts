import { Request, Response } from "express";
import {
  getMockTransactions,
  addMockTransaction,
  deleteMockTransaction,
} from "../services/transactionsService";

export const getAllTransactions = (req: Request, res: Response) => {
  const transactions = getMockTransactions();
  res.json(transactions);
};

export const createTransaction = (req: Request, res: Response) => {
  const transaction = req.body;
  const newTransaction = addMockTransaction(transaction);
  res.status(201).json(newTransaction);
};

export const deleteTransaction = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = deleteMockTransaction(id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Transaction not found" });
  }
};
