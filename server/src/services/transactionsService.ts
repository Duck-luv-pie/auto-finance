type Transaction = {
    id: string;
    description: string;
    amount: number;
    date: string;
  };
  
  let mockTransactions: Transaction[] = [
    { id: "1", description: "Coffee", amount: 3.5, date: "2024-05-01" },
    { id: "2", description: "Groceries", amount: 42.1, date: "2024-05-03" },
  ];
  
  export const getMockTransactions = (): Transaction[] => {
    return mockTransactions;
  };
  
  export const addMockTransaction = (transaction: Transaction): Transaction => {
    mockTransactions.push(transaction);
    return transaction;
  };
  
  export const deleteMockTransaction = (id: string): boolean => {
    const index = mockTransactions.findIndex((t) => t.id === id);
    if (index !== -1) {
      mockTransactions.splice(index, 1);
      return true;
    }
    return false;
  };
  