import axios from 'axios'
import { SET_LOADED, SET_PIZZAS } from '../constant'


export const fetchData = (sortBy, category) => (dispatch) => {
  dispatch({
    type: SET_LOADED,
    payload: false
  })
  axios
    .get(
      `/pizzas?${category!== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data}) => { dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items
})