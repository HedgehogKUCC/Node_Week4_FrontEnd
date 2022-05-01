import userImg from "./images/user.png";

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className="d-flex justify-content-between align-content-center">
                    <div className="logo">
                        <h1>MetaWall</h1>
                    </div>
                    <div className="user">
                        <img className='user__avatar' src={userImg} alt=""/>
                        <h4 className="user__name">
                            Member
                        </h4>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
