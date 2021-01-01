import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component'
import {Route, Switch} from 'react-router-dom'

const HatsPage = () => (<h1>HATS</h1>)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
    </div>
  );
}

export default App;
