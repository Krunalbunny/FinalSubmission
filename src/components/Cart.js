import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions';
import Recipe from './Recipe';

// Styled Components
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OrderedList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const ItemImage = styled.div`
  margin-right: 10px;
  img {
    max-width: 100px;
    max-height: 100px;
  }
`;

const ItemDescription = styled.div`
  flex: 1;
  .title {
    font-weight: bold;
  }
  .add-remove {
    display: flex;
    justify-content: space-between;
  }
`;

const RemoveButton = styled.button`
  background-color: #ff4081;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.addedItems);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id));
  };

  const handleSubtractQuantity = (id) => {
    dispatch(subtractQuantity(id));
  };

  return (
    <CartContainer>
      <div>
        <h5>You have ordered:</h5>
        <OrderedList>
          {addedItems.length ? (
            addedItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage>
                  <img src={item.img} alt={item.img} />
                </ItemImage>

                <ItemDescription>
                  <span className="title">{item.title}</span>
                  <p>{item.desc}</p>
                  <p>
                    <b>Price: {item.price}$</b>
                  </p>
                  <p>
                    <b>Quantity: {item.quantity}</b>
                  </p>
                  <div className="add-remove">
                    <Link to="/cart">
                      <button onClick={() => handleAddQuantity(item.id)}>+</button>
                    </Link>
                    <Link to="/cart">
                      <button onClick={() => handleSubtractQuantity(item.id)}>-</button>
                    </Link>
                  </div>
                  <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
                </ItemDescription>
              </CartItem>
            ))
          ) : (
            <p>Nothing.</p>
          )}
        </OrderedList>
      </div>
      <Recipe />
    </CartContainer>
  );
};

export default Cart;
