import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components'
import { Home } from './pages'
import { Cart } from './pages'


function App () {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/database.json').then(({data}) => {
	  setItems(data.pizzas)
	})
  }, [])

  return (
	<div className="wrapper">`
	  <Header/>
	  <div className="content">
		<Route exact path="/" render={()=> <Home items={items} /> } />
		<Route exact path="/cart" component={Cart} />
	  </div>
	</div>
  )
}

export default App;
