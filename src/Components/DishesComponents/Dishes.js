import { useSelector } from "react-redux";
import dishesData from "../../data/dishesData";
import Dish from "./Dish";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="products">
            {dishesData
            .filter(dish => {
                return selectedCategory === dish.category;
            })
            .map((dish, id) => <Dish dish = {dish} key = {id}/>)}
        </div>
    )
}

export default Dishes;