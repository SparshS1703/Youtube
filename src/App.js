
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Head"
import store from "./utils/store"
import {Provider} from "react-redux";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


function App() {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"/watch",
        element:<WatchPage />
      }
    ]
  }])
  return (
    <Provider store={store}>
    <div className="flex flex-col h-screen w-screen ">
      
      <Header />
      <RouterProvider router={appRouter} />
     
    </div>
     </Provider>
  );
}

export default App;
