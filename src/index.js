import '@babel/polyfill'
import {render} from 'react-dom'
import * as React from 'react'

class Bkm extends React.Component {
  render() {
    return <p>Hello</p>
  }
}

const domContainer = document.getElementById('app');
render(<Bkm />, domContainer);
