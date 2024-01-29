import React, { useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';

const Recipe = ({ total, addShipping, substractShipping }) => {
  const dispatch = useDispatch();
  const shippingRef = useRef();

  useEffect(() => {
    return () => {
      if (shippingRef.current && shippingRef.current.checked) {
        dispatch({ type: 'SUB_SHIPPING' });
      }
    };
  }, [dispatch]);

  const handleChecked = (e) => {
    if (e.target.checked) {
      addShipping();
    } else {
      substractShipping();
    }
  };

  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <label>
            <input type="checkbox" ref={shippingRef} onChange={handleChecked} />
            <span>Shipping(+6$)</span>
          </label>
        </li>
        <li className="collection-item">
          <b>Total: {total} $</b>
        </li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn" style={{backgroundColor: "yellow",border:"1px solid grey"}}>Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: 'ADD_SHIPPING' });
    },
    substractShipping: () => {
      dispatch({ type: 'SUB_SHIPPING' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
