import avatar from "./images/user.png";

function UserFeature() {
    return (
        <>
            <div className="user__feature d-none d-md-block">
                <button type="button" className='btn btn-primary'>張貼動態</button>
                <div className='info'>
                    <img src={avatar} alt=""/>
                    <h5>邊緣小傑</h5>
                </div>
                <div className="follow">
                    <div className='icon'>
                        <i className="bi bi-bell"></i>
                    </div>
                    <h5>追蹤名單</h5>
                </div>
                <div className="like">
                    <div className='icon'>
                        <i className="bi bi-hand-thumbs-up"></i>
                    </div>
                    <h5>我按讚的文章</h5>
                </div>
            </div>
            <div className='d-block d-md-none'>
                <div className="user__feature--mobile">
                    <div className='icon'>
                        <i className="bi bi-house-door"></i>
                    </div>
                    <div className='icon'>
                        <i className="bi bi-bell"></i>
                    </div>
                    <div className='icon'>
                        <i className="bi bi-hand-thumbs-up"></i>
                    </div>
                    <div className="icon text-white bg-primary">
                        <i className="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserFeature;
