import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice";


const Filter = ({category}) => {
    const selectedCategory = useSelector (getSelectedCategory);
    const dispatch = useDispatch();
    return (
        <div className="category">
            <p onClick={()=>{dispatch(filterCategory(category))}} className={selectedCategory === category ? "selected-category" : "other-category"}>{category}</p>
        </div>
    )
}

export default Filter;