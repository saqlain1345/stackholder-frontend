import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard/Dashboard";
import AddClient from "./pages/Client/Add/AddClient";
import Layout from "./components/Layout/Layout";
import ListClients from "./pages/Client/List/ListClients";
import AddUser from "./pages/User/Add/AddUser";
import ListUsers from './pages/User/List/ListUsers';
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/*" element={<Dashboard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/add-client" element={<AddClient/>} />
                <Route path="/all-clients" element={<ListClients />} />
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="all-users" element={<ListUsers/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    )
}

export default App;
