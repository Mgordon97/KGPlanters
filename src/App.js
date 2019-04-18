import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homepage'
import Design from './components/pages/design'
import Contact from './components/pages/contact'
import Collection from './components/pages/collection'
import Buy from './components/pages/buy'
import Spec from './components/pages/spec'
import './Assets/scss/default.scss';


class App extends Component {
  render() {
    return (
      <Router>
     <div className="App">
     
     <Header />
       
       <Route exact path='/' component={Homepage} />
       <Route exact path='/Design' component={Design} />
       <Route exact path='/Spec' component={Spec}/>
       <Route exact path='/Buy' component={Buy} />
       <Route exact path='/Collection' component={Collection} />
       <Route exact path='/Contact' component={Contact} />
     
     <Footer />

     </div>
     </Router>
    );
  }
}

export default App;
