import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="categories">
            {['APPETIZERS', 'SANDWICHES', 'ENTREES', 'SIDES', 'DESSERTS'].map((category, id) => <Filter category = {category} key = {id}/>)}
        </div>
    )
}

export default AllCategories;