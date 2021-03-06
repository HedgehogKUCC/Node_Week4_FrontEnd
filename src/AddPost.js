import Header from "./Header";
import UserFeature from "./UserFeature";

function AddPost() {
    return (
        <>
            <Header />
            <main className='addPost container'>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className='addPost__title'>
                            張貼動態
                            <div className='border'></div>
                        </div>
                        <div className="addPost__content mt-3">
                            <form>
                                <div className='title'>貼文內容</div>
                                <textarea className='form-control' placeholder='輸入您的貼文內容'></textarea>
                                <div className='upload my-3'>上傳圖片</div>
                                <div className='image mb-3'></div>
                                <div className='submit'>送出貼文</div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <UserFeature />
                    </div>
                </div>
            </main>
        </>
    )
}

export default AddPost;
