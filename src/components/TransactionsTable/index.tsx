import Container from './styles';
import { useEffect } from 'react';
import { api } from '../services/api';

export function TransactionsTable() {
    useEffect(() => {
      api.get('http://localhost:3000/api/transactions')     
      .then(response => console.log(response.data))
    }, []);

  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td className='diferent-left'>Notebook</td>
                    <td className='withdraw'>-R$ 200</td>
                    <td>Trabalho</td>
                    <td className='diferent-left'>01/01/2021</td>
                </tr>   
                <tr>
                    <td className='diferent-right'>Desenvolvimento</td>
                    <td className='deposit'>R$ 12.000</td>
                    <td>Trabalho</td>
                    <td className='diferent-right'>01/01/2021</td>
                </tr>
                <tr>
                    <td className='diferent-right'>Desenvolvimento</td>
                    <td className='deposit'>R$ 12.000</td>
                    <td>Trabalho</td>
                    <td className='diferent-right'>01/01/2021</td>
                </tr>
                <tr>
                    <td className='diferent-right'>Desenvolvimento</td>
                    <td className='deposit'>R$ 12.000</td>
                    <td>Trabalho</td>
                    <td className='diferent-right'>01/01/2021</td>
                </tr>
            </tbody>
        </table>
    </Container>
  )
}