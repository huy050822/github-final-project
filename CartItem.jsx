import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Hàm tính tổng chi phí cho một loại sản phẩm
  const calculateTotalCost = (item) => {
    return (item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2);
  };

  // Hàm tính tổng số tiền của toàn bộ giỏ hàng
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.quantity * parseFloat(item.price.replace('$', '')));
    }, 0).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <h3>Total Amount: ${calculateTotalAmount()}</h3>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} style={{ width: '50px' }} />
          <div>
            <p>{item.name}</p>
            <p>Unit Price: {item.price}</p>
            <p>Subtotal: ${calculateTotalCost(item)}</p>
          </div>
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleRemove(item.id)}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
    </div>
  );
}

export default CartItem;
