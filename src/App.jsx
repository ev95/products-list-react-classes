import Products from './components/Products/Products.jsx'
import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Products products_list={this.props.products} />
    )
  }
}

export default App