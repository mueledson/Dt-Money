import Modal from "react-modal";
import { useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import NewTransactionModal from "./components/NewTransactionModal";

// import styled from "styled-components";
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  } 

  Modal.setAppElement("#root")

  return (
    <div className="App">
      <Header onHandleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>

      <GlobalStyle />
    </div>
  );
}