import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './actions/cartActions';

const Shop = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const handleClick = (id) => {
    dispatch(addToCart(id));
  };

  const itemList = items.map((item) => (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '10px' }} key={item.id}>
    <div className='card-container'>
      <div className="card-image">
        <img src={item.img} alt={item.title} className="card-img" />
        <span className="card-title" style={{fontWeight:'600',margin:'10px'}}>{item.title}</span>
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            handleClick(item.id);
          }}
          style={{backgroundColor: "yellow",border:"1px solid grey"}}
        >
          <i className="material-icons">add</i>
        </button>
      </div>
  
      <div className="card-content">
        <p>{item.desc}</p>
        <p>
          <b>Price: ${item.price}</b>
        </p>
      </div>
    </div>
  </div>
  ));

  return (
    <div style={{justifyContent:'space-between'}}>
      <h3 className="center">Our items</h3>
      <div className="box">{itemList}</div>
    </div>
  );
};

export default Shop;
