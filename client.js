import React from 'react'
import { render } from 'react-dom'

import AppComponent from './components/app';
import IndexComponent from './components/index';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    }
  ]
}

render(
  <AppComponent/>,
  document.getElementById('root')
);
