import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenCloseNewTransactionModal() {
    isNewTransactionModalOpen ? 
      setIsNewTransactionModalOpen(false) : 
      setIsNewTransactionModalOpen(true) ;
  }
  
  return (
    <>
      <Header  onOpenNewTransactionModal={handleOpenCloseNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}
