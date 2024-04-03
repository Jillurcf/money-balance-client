import UseAuth from "../../../Hooks/UseAuth";




const UserHome = () => {
    const {user} = UseAuth()
    console.log(user);
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Wellcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};


export default UserHome;