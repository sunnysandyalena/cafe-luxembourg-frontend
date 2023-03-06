import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";


const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const Swal = require('sweetalert2');
    return (
        <div className="product-card">
            <div className="container-dishes" key = {dish.id}>
                <h2>{dish.name}</h2>
                <img className="dish-img" src ={dish.img} alt = {dish.name}/>
                <p className="text">{dish.description}</p>
                <h3>${dish.price}</h3>
            <div>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            </div>
            <div>
                <button onClick={() => {dispatch(addItemToCart({dish, quantity})); 
                Swal.fire({
                    icon: 'success',
                    title: 'Item was added to the cart!',
                    showConfirmButton: false,
                    timer: 1500
                  })}} className="add-btn">ADD</button>
            </div>
        </div>
        </div>
        
    )
}

export default Dish;