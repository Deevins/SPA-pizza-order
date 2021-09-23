import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Categories, PizzaBlock, SortPopUp, PizzaLoadingBlock } from '../components'

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchData } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

const categories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
]

const Home = React.memo(() => {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)

  React.useEffect(() => {
	dispatch(fetchData(sortBy, category))
// eslint-disable-next-line
  }, [category, sortBy])

  const onSelectCategory = React.useCallback(index => {
	dispatch(setCategory(index))
	// eslint-disable-next-line
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSelectSortType = React.useCallback(type => {
	dispatch(setSortBy(type))

  })

  const handleAddPizzaToCart = obj => {
	dispatch(addPizzaToCart(obj))

  }


  return (
	<div className="container">
	  <div className="content__top">
		<Categories activeCategory={category}
					onClickedCategory={onSelectCategory}
					items={categories}/>
		<SortPopUp
		  activeSortType={sortBy.type}
		  items={sortItems}
		  onClickSortType={onSelectSortType}/>

	  </div>
	  <h2 className="content__title">Все пиццы</h2>
	  <div className="content__items">
		{
		  isLoaded
			? items.map((obj) => <PizzaBlock
			  onClickAddPizza={handleAddPizzaToCart}
			  key={obj.id}
			  cartCount={cartItems[obj.id] && cartItems[obj.id].items.length}
			  {...obj}  />)
			: Array(12)
			  .fill(0)
			  .map((_, index) => <PizzaLoadingBlock key={index}/>)
		}
	  </div>
	</div>
  );
})

export default Home