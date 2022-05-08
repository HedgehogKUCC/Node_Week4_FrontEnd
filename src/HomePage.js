import Header from "./Header";
import UserFeature from "./UserFeature";
import avatar from "./images/user.png";
import avatar1 from "./images/user1.png";
import template from "./images/template.png";

function Posts() {
    return (
        <>
            <div className="col-12">
                <div className='post mt-3'>
                    <div className="post__header mb-3">
                        <img className="avatar" src={avatar} alt=""/>
                        <div>
                            <h5 className='name'>邊緣小傑</h5>
                            <div className='date'>2022/01/10 12:00</div>
                        </div>
                    </div>
                    <p className="post__content mb-3">
                        外面看起來就超冷.... 我決定回被窩繼續睡....
                    </p>
                    <div className="post__image">
                        <img className='img-fluid' src={template} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className='post mt-3'>
                    <div className="post__header mb-3">
                        <img className="avatar" src={avatar1} alt=""/>
                        <div>
                            <h5 className='name'>波吉</h5>
                            <div className='date'>2022/01/10 12:00</div>
                        </div>
                    </div>
                    <div className="post__content">
                        <p>我一定要成為很棒棒的國王！</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function NoPost() {
    return (
        <div className='col-12'>
            <div className='post no mt-3'>
                <div className='circle__group'>
                    <i className="circle circle-red"></i>
                    <i className="circle circle-orange"></i>
                    <i className="circle circle-green"></i>
                </div>
                <p>目前尚無動態，新增一則貼文吧！</p>
            </div>
        </div>
    )
}

function HomePage() {

    const hasPosts = true;

    return (
        <>
            <Header />
            <main className='container'>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="filterBar">
                            <select className='form-select'>
                                <option value="">從新到舊</option>
                                <option value="">從舊到新</option>
                                <option value="">關鍵字搜尋</option>
                            </select>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='搜尋貼文'
                                />
                                <div className='icon-search'>
                                    <i className="bi bi-search"></i>
                                </div>
                            </div>
                        </div>
                        { hasPosts ? <Posts /> : <NoPost /> }
                    </div>
                    <div className="col-12 col-md-4">
                        <UserFeature />
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage;
