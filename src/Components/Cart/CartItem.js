import { useDispatch } from "react-redux";
import dishesData from "../../data/dishesData";
import { removeItemFromCart } from "../../redux/cartSlice";
import deleteImg from './remove-mockup.png';

const CartItem = ({cartItem}) => {
    const dishes = dishesData.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <p className="cart-item"> {dishes.name} X{cartItem.quantity}</p>
            <p className="cart-item">${dishes.price * cartItem.quantity}</p>
            <img onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} src = {deleteImg} width = '40px' alt = 'Delete'/>
        </div>
    )
}

export default CartItem;