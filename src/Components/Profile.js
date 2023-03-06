import LogIn from "./LogIn";
import LogOut from "./LogOut";
import IsLoading from "./IsLoading";
import { useAuth0 } from "@auth0/auth0-react";
import Account from "./Account";

const Profile = () => {
    const { isLoading } = useAuth0();
    if (isLoading) return <IsLoading/>
    return (
        <div className="container">
            <div className="container-profile">
                <h2 className='heading'>PROFILE</h2>
            </div>
            <div>
                <div>
                    <Account/>
                </div>
                <div>
                    <LogIn/>
                </div>
                <div>
                    <LogOut/>
                </div>
            </div>
        </div>
    )
}

export default Profile;