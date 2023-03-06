import homePageImg from './home-page.jpeg'
const Home = () => {
    return (
        <div className='container-home'>
            <div className='container-img'>
                <img className='home-img' src={homePageImg} alt="Cafe Luxembourg"/>
            </div>
            <div className='container-info'>
                <h3>200 W 70th st New York, NY</h3>
                <h3>212-873-7411</h3>
                <hr></hr>
                <h3>Reservations can be booked through <a className='open-table' href='https://www.opentable.com/' target="_blank" rel="noreferrer">OpenTable</a> or by calling 212-73-7411. Note that we only hold reservations for a ten minute grace period.</h3>
                <h3>Bar seating is available on a first come, first served basis.</h3>
                <hr></hr>
                <h3>Lunch Mon-Fri 11:00am - 3:30pm</h3>
                <h3>Dinner Mon-Sun 5:00pm - 10:30pm</h3>
                <h3>Brunch Sat-Sun 10:00am - 3:30pm</h3>
            </div>
        </div>
    )
}
export default Home;