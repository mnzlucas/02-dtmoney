import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles';


export function Summary() {
  const {transactions} = useContext(TransactionsContext);
  console.log(transactions);
  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>- 5000,00</strong>
      </div>
      <div className= "highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>1000,00</strong>
      </div>
    </Container>
  );
}