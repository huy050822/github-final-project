import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleRemove(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
