import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from './CartItem';
import StripeContainer from '../../Stripe/StripeContainer';


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div className="container">
            <div className='container-cart'>
                <h2 className='heading'>CART</h2>
            </div>
            <div>
                {cartItems.map(cartItem =>  <CartItem cartItem={cartItem} />)}
            </div>
            <div className='container-total'>
                <h3>TOTAL: ${totalPrice}</h3>
            </div>
            <div>
                <StripeContainer/>
            </div>
            
        </div>
    )
}
export default Cart;