const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity= ()=> {
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity);
    }
    return (
        <div className="container-control">
            <button onClick={removeQuantity} className="change-btn">-</button>
            <p>{quantity}</p>
            <button onClick={addQuantity} className="change-btn">+</button>
        </div>
    )
}

export default ChangeQuantity;