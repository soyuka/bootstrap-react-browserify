import '@babel/polyfill'
import {render} from 'react-dom'
import * as React from 'react'

function App() {
  return <p>Hello world</p>
}

const domContainer = document.getElementById('app');
render(<App />, domContainer);
