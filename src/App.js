import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component'
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'

const HatsPage = () => (<h1>HATS</h1>)

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signin' component={SignInAndSignUp}/> 
      </Switch>
    </div>

  )
}

export default App;
