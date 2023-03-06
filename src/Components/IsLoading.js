import loading from './loading.gif'
const IsLoading = () => {
    return (
        <div className="container">
            <div>
                LOADING
            </div>
            <div>
                <img src = {loading} alt = "Loading"/>
            </div>
        </div>
    )
}

export default IsLoading;