import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <Router>
        <Routes>
            {
                routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={<route.component />}
                    />
                ))

            }
        </Routes>
    </Router>
  );
}

export default App;
