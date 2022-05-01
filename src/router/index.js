import HomePage from "../HomePage";
import AddPost from "../AddPost";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/add-post",
        component: AddPost,
    }
];

export default routes;