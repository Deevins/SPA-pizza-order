import React from 'react';
import PropTypes from 'prop-types'


const Categories = ({activeCategory, items, onClickedCategory}) => {

  return (
	<div className="categories">
	  <ul>
		<li onClick={() => onClickedCategory(null)}
			className={activeCategory===null ? 'active' : ''}>Все
		</li>
		{items.map((item, index) =>
		  <li className={activeCategory===index ? 'active' : ''}
			  onClick={() => onClickedCategory(index)}
			  key={`${item}_${index}`}>{item}</li>)
		}
	  </ul>
	</div>
  );
}

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items:PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickedCategory: PropTypes.func
}

Categories.defaultProps = {
  activeCategory:null,
  items:[],

}

export default Categories