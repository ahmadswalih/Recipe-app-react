
import './App.css';
import Category from './components/Category';
import Pages from './pages/Pages';
import {BrowserRouter} from "react-router-dom"
import Search from './components/Search';
import {Logo,Nav} from './StyledComponents'
import { GiKnifeFork } from 'react-icons/gi';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>deliciouss</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
