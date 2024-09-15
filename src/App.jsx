import Products from './components/Products/Products.jsx'
import './App.css'

function App(props) {
  return (
    <Products products_list={props.products} />
  )
}

export default App