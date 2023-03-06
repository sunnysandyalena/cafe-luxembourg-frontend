import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
    const { user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
        <div className="container">
            <div>
                <h3>{user.nickname}</h3>
            </div>
            <div>
                <h3>{user.email}</h3>
            </div>
            <div>
                <img src = {user.picture} alt = "User"/>
            </div>
        </div> ))
}

export default Account;