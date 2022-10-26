import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Header from './components/pages/Index';

import Container from './components/layout/Container';


function App() {
  return (
    
    <Container customClass="min-heigth">
          <Router>
            <Header />
              <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/company' element={<Company />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/newproject' element={<NewProject />}/>
              </Routes>
            </Router>
            <p>Footer</p>
        </Container>
  
   

    
  );
}

export default App;
