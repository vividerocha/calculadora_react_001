import { Container, Content, Row, TitleH3 } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentExpression, setCurrentExpression] = useState('');

  const handleOnClear = () => {
    setCurrentExpression('');
  };

  const handleAddNumber = (num) => {
    setCurrentExpression(prev => `${prev}${num}`);
  };

  const handleAddOperation = (operation) => {
    setCurrentExpression(prev => `${prev} ${operation} `);
  };

  const handleEquals = () => {
    try {
      const result = eval(currentExpression);
      setCurrentExpression(String(result));
    } catch (error) {
      setCurrentExpression('Error');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentExpression}></Input>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="/" onClick={() => handleAddOperation('/')}/>
          <Button label="*" onClick={() => handleAddOperation('*')}/>
          <Button label="C" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleAddOperation('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleAddOperation('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <TitleH3>by Viviane Rocha</TitleH3>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
