import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
import router from "./router";


// <Provider store={store}>
// </Provider>

function App() {

  
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;