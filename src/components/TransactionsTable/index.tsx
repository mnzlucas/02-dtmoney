import { Container } from "./styles";

export function TransactionsTable(){
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