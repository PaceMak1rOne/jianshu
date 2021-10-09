import React, { Component } from 'react';
import Header from './common/header';
import { FontStyle } from './iconfont/iconfont';
import store from './store' ;
import { BrowserRouter,Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Writer from './pages/write'
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
        <meta name='referrer' content='never' />
         <BrowserRouter>
        <Header/>
       
        <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/detail/:id' component={Detail}/>
        <Route exact path='/writer' component={Writer}/>
        </div>
        </BrowserRouter>
       
        <FontStyle/>
        
       </div>
      </Provider>
      </div>
    )
  }
}
