import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface Transaction {
  id:       number,
  title:    string,
  type:     string,
  category: string,
  amount:   number,
  createAt: string,

}
export function TransactionsTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transactions => (
            <tr key={transactions.id}>
              <td>{transactions.title}</td>
              <td className={transactions.type}>{transactions.amount}</td>
              <td>{transactions.category} </td>
              <td>{transactions.createAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}