import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from '../services/api';
import { Container, TransactionTypeContainer, RadioBox } from "./styles"

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
  const [title   , setTitle]    = useState('')
  const [value   , setValue]    = useState(0)
  const [category, setCategory] = useState('')
  const [type    , setType]     = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()
    const data = {
      title,
      value,
      category,
      type
    }
    api.post('/transactions', data)
  }

  return (
    <>
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modaL-overlay"
        className="react-modaL-content"
        >

        <button
          type='button'
          onClick={onRequestClose}
          className="react-modal-close"
        >

          <img src={closeImg} alt="X" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
        type="text" 
        placeholder='Título'
        value={title}
        onChange={event => setTitle(event.target.value)}
        />

        <input
        type="number" 
        placeholder='Valor'
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => { setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >

            <img src={incomeImg} alt="income" />
            <span>Entrada</span>
            
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => { setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >

            <img src={outcomeImg} alt="outcome" />
            <span>Saída</span>

          </RadioBox>
        </TransactionTypeContainer>

        <input
        type="text" 
        placeholder='Categoria'
        value={category}
        onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>

        </Container>
      </Modal>
    </>
  )
}

export default NewTransactionModal