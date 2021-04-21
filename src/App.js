import React from 'react'
import './App.css';
import Page from './Page';
import NewEntry from './NewEntry'
import Menus from './Menus';
import Menus1 from './Menus1';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route path="/newentry" component={NewEntry} />
        
        </Switch>
      </BrowserRouter>
      {/* <Page/> 
      <NewEntry/> */}
      {/* <Menus/> */}

   
    </div>
  );
}

export default App;
