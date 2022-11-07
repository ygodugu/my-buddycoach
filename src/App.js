import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from './pages/Home/Home'
import { BrowserRouter as Router,Switch,Route, BrowserRouter,} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import AddUser from "./pages/addUser/AddUser";
import Cources from "./pages/course/Course";
import AddCourse from "./pages/AddCourse/AddCourse";
import PersonalDetailes from "./pages/PersonalDetailes/PersonalDetailes"
import View from "./pages/View/View";
import AddConceptTocourse from './pages/View/AddConceptToCourse'
import UpdateCourse from "./pages/UpdateCourse/UpdateCourse";
import Concept from "./pages/Concept/Concept";
import AddConcept from "./pages/AddConcept/AddConcept";
import UpdateConcept from "./pages/UpdateConcept/UpdateConcept";
import ConceptView from "./pages/ConceptView/ConceptView";
import UserA from "./pages/UserA/User";
import AddUserA  from "./pages/AddUserA/AddUser";
import UpdateUserA from "./pages/UpdateUser A/UpdateUser";
import UserViewA from "./pages/UserViewA/UserView";
import Badges from "./pages/Badges/Badges";
import AddBadges from "./pages/AddBadges/AddBadges";
import UpdateBadges from "./pages/UpdateBadges/UpdateBadges";


function App() {
  return (
    
    <BrowserRouter>
        <Router>
                 <Topbar/>
            <div className="container">
                <Sidebar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/users" >
                    <UserList />
                </Route>
                <Route exact path="/User/:userId">
                    <User />
                </Route>
                {/* <Route exact path="/AddUser">
                    <AddUser />
                </Route> */}
                <Route exact path="/products">
                    <ProductList />
                </Route>
                <Route exact path="/product/:productId">
                    <Product />
                </Route>
                <Route exact path="/newproduct">
                    <NewProduct />
                </Route>
                <Route exact path="/Course">
                    <Cources />
                </Route>
                <Route exact path="/AddCourse">
                    <AddCourse />
                </Route>
                <Route exact path="/UpdateCourse/:courseID">
                    <UpdateCourse />
                </Route>
                <Route exact path="/View/:courseID">
                    <View />
                </Route>
                <Route exact path="/AddConceptTocourse">
                    <AddConceptTocourse />
                </Route>
                <Route exact path="/Concept">
                    <Concept />
                </Route>
                <Route exact path="/AddConcept">
                    <AddConcept />
                </Route>
                <Route exact path="/UpdateConcept/:conceptID">
                    <UpdateConcept />
                </Route>
                <Route exact path="/ConceptView/:conceptID">
                    <ConceptView />
                </Route>
                <Route exact path="/User">
                    <UserA />
                </Route>
                <Route exact path="/AddUser">
                    <AddUserA />
                </Route>
                <Route exact path="/UpdateUser/:userID">
                    <UpdateUserA />
                </Route>
                <Route exact path="/UserView/:userID">
                    <UserViewA />
                </Route>
                <Route exact path="/PersonalDetailes">
                    <PersonalDetailes />
                </Route>
                <Route exact path="/Badges">
                    <Badges />
                </Route>
                <Route exact path="/AddBadges">
                    <AddBadges />
                </Route>
                <Route exact path="/UpdateBadges/:badgeID">
                    <UpdateBadges />
                </Route>
            </Switch>
            </div> 
        </Router>
    </BrowserRouter>
    );
    }

export default App;
