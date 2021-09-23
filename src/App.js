import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components'
import { Home } from './pages'
import { Cart } from './pages'

// import store from './redux/store'


function App () {
  return (
	<div className="wrapper">`
	  <Header/>
	  <div className="content">
		<Route exact path="/" component={Home}/>
		<Route exact path="/cart" component={Cart}/>
	  </div>
	</div>
  )
}


// class App extends React.Component {
//   componentDidMount () {
// 	axios.get('http://localhost:3000/database.json').then(({data}) => {
// 	  this.props.setPizzas(data.pizzas)
// 	})
//   }
//
//   render () {
// 	return (
// 	  <div className="wrapper">`
// 		<Header/>
// 		<div className="content">
// 		  <Route exact path="/" render={() => <Home items={this.props.items}/>}/>
// 		  <Route exact path="/cart" component={Cart}/>
// 		</div>
// 	  </div>
// 	)
//   }
// }

// const mapStateToProps = state => {
//   return {
// 	items: state.pizzas.items,
// 	filters: state.filters
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
// 	setPizzas: (items) => dispatch(setPizzas(items))
//   }
// }
// // const mapDispatchToProps = {
// //   setPizzas
// // } // Если action и method in props называются одинаково, можно юзать такую конструкцию
export default App
// export default connect(mapStateToProps, mapDispatchToProps)(App);
