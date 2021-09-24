import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return(
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
          <tr>
            <td>Desenv Web</td>
            <td className="deposit">RS1.2000,00</td>
            <td>Desenv </td>
            <td>23/09/21</td>
          </tr>
          <tr>
            <td>Desenv Web</td>
            <td className="withdraw">-RS1.2000,00</td>
            <td>Desenv </td>
            <td>23/09/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}