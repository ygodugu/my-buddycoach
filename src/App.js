import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from './pages/Home/Home'
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import AddUser from "./pages/addUser/AddUser";
import Cources from "./pages/course/Course";
import AddCourse from "./pages/AddCourse/AddCourse";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalDetailes from "./pages/PersonalDetailes/PersonalDetailes"
import View from "./pages/View/View";
import UpdateCourse from "./pages/UpdateCourse/UpdateCourse";
import Concept from "./pages/Concept/Concept";
import AddConcept from "./pages/AddConcept/AddConcept";
import UpdateConcept from "./pages/UpdateConcept/UpdateConcept";
import ConceptView from "./pages/ConceptView/ConceptView";
import UserA from "./pages/UserA/User";
import AddUserA  from "./pages/AddUserA/AddUser";
import UpdateUserA from "./pages/UpdateUser A/UpdateUser";
import UserViewA from "./pages/UserViewA/UserView";
function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Topbar/>
        <div className="container">
          <Sidebar/>
          <Switch>
              <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/users">
                <UserList />
            </Route>
            <Route path="/user/:userId">
                <User />
            </Route>
            {/* <Route path="/AddUser">
                <AddUser />
            </Route> */}
            <Route path="/products">
                <ProductList />
            </Route>
            <Route path="/product/:productId">
                <Product />
            </Route>
            <Route path="/newproduct">
                <NewProduct />
            </Route>
            <Route path="/Course">
                <Cources />
            </Route>
            <Route path="/AddCourse">
                <AddCourse />
            </Route>
            <Route path="/UpdateCourse/:courseID">
                <UpdateCourse />
            </Route>
            <Route path="/View/:courseID">
                <View />
            </Route>
            <Route path="/Concept">
                <Concept />
            </Route>
            <Route path="/AddConcept">
                <AddConcept />
            </Route>
            <Route path="/UpdateConcept/:conceptID">
                <UpdateConcept />
            </Route>
            <Route path="/ConceptView/:conceptID">
                <ConceptView />
            </Route>
            <Route path="/User">
                <UserA />
            </Route>
            <Route path="/AddUser">
                <AddUserA />
            </Route>
            <Route path="/UpdateUser/:userID">
                <UpdateUserA />
            </Route>
            <Route path="/UserView/:userID">
                <UserViewA />
            </Route>
            <Route path="/PersonalDetailes">
                <PersonalDetailes />
            </Route>
          </Switch>
        </div>  
    </Router>
  );
}

export default App;
