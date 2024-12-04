import {useState} from 'react'

import {Button} from './components/Button'
import {Input} from './components/Input'
import { Container, Content, Row } from './styles'


function App() {
  
  const [currentNumber, setCurrentNumber] = useState('0')
  const [previousNumber, setPreviousNumber] = useState('0')
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev == 0 ? '' : prev}`)
  }

  const handleSum = () => {
    if(previousNumber == 0){
      setPreviousNumber(currentNumber)
      handleOnClear()
      setOperation('+')
    }else {
      const sum = Number(currentNumber) + Number(previousNumber)
      setCurrentNumber(String(sum))
      setPreviousNumber('0')
      setOperation('')
    }
  }

  const handleDecrease = () => {
    if(previousNumber == 0){
      setPreviousNumber(currentNumber)
      handleOnClear()
      setOperation('-')
    }else {
      const decrease = Number(previousNumber) - Number(currentNumber)
      setCurrentNumber(String(decrease))
      setPreviousNumber('0')
      setOperation('')
    }
  }

  const handleDiv = () => {
    if(previousNumber == 0){
      setPreviousNumber(currentNumber)
      handleOnClear()
      setOperation('/')
    }else {
      const division = Number(previousNumber) / Number(currentNumber)
      setCurrentNumber(String(division))
      setPreviousNumber('0')
      setOperation('')
    }
  }

  const handleMultiply = () => {
    if(previousNumber == 0){
      setPreviousNumber(currentNumber)
      handleOnClear()
      setOperation('*')
    }else {
      const multiplication = Number(previousNumber) * Number(currentNumber)
      setCurrentNumber(String(multiplication))
      setPreviousNumber('0')
      setOperation('')
    }
  }

  const handleEqual = () => {
    if(previousNumber != '0' && operation != '' && currentNumber != '0'){
      switch(operation){
        case '+':
          handleSum()
          break;
        case '-':
          handleDecrease()
          break;
        case '*':
          handleMultiply()
          break;
        case '/':
          handleDiv()
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='x' onClick={handleMultiply}/>
          <Button label='/' onClick={handleDiv}/>
          <Button label='C' onClick={handleOnClear}/>
          <Button label='.' />
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')}/>
          <Button label='8' onClick={() => handleAddNumber('8')}/>
          <Button label='9' onClick={() => handleAddNumber('9')}/>
          <Button label='-' onClick={handleDecrease}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')}/>
          <Button label='5' onClick={() => handleAddNumber('5')}/>
          <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='+' onClick={handleSum}/>
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')}/>
          <Button label='2' onClick={() => handleAddNumber('2')}/>
          <Button label='3' onClick={() => handleAddNumber('3')}/>
          <Button label='=' onClick={handleEqual}/>
        </Row>
      </Content>
    </Container>
  )
}

export default App
