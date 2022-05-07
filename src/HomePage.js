import Header from "./Header";
import UserFeature from "./UserFeature";
import avatar from "./images/user.png";
import avatar1 from "./images/user1.png";
import template from "./images/template.png";

function HomePage() {
    return (
        <>
            <Header />
            <main className='container'>
                <div className="row">
                    <div className="col-8">
                        <div className="filterBar">
                            <form>
                                <div className="row">
                                    <div className="col-3">
                                        <select className='form-select'>
                                            <option value="">從新到舊</option>
                                            <option value="">從舊到新</option>
                                            <option value="">關鍵字搜尋</option>
                                        </select>
                                    </div>
                                    <div className="col-9">
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
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-12">
                                    <div className='post'>
                                        <div className="post__header">
                                            <img className="avatar" src={avatar} alt=""/>
                                            <div>
                                                <h5 className='name'>邊緣小傑</h5>
                                                <div className='date'>2022/01/10 12:00</div>
                                            </div>
                                        </div>
                                        <p className="post__content">
                                            外面看起來就超冷.... 我決定回被窩繼續睡....
                                        </p>
                                        <div className="post__image">
                                            <img className='img-fluid' src={template} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='post'>
                                        <div className="post__header">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <UserFeature />
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage;
