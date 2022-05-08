import {
    Routes,
    Route,
} from "react-router-dom";
import routes from "./router";

function App() {
  return (
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
  );
}

export default App;
