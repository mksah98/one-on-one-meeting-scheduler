import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header';
import Routes from './Routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container className='mt-5'>
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
