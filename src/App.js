import React,{useState} from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from './pages/Home/Home'
import { BrowserRouter as Router,Switch,Route, BrowserRouter, Redirect,} from "react-router-dom";
import Cources from "./pages/course/Course";
import AddCourse from "./pages/AddCourse/AddCourse";
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
import AddConceptToUser from "./pages/UserViewA/AddConceptToUser";
import Badges from "./pages/Badges/Badges";
import AddBadges from "./pages/AddBadges/AddBadges";
import UpdateBadges from "./pages/UpdateBadges/UpdateBadges";
import BadgesView from "./pages/BadgesView/BadgesView";
import AddBadgesToUser from "./pages/UserViewA/AddBadgesToUser";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";

function App() {
    const [loggedIn, setloggedIn] = useState(false);

    function callbackFunction(childData) {
      setloggedIn(childData);
    }

    // return (
    //     <Router>
    //       <Switch>
    //         <Route path="/Home">
    //           {loggedIn ? <Home /> : <Redirect to="/" />}
    //         </Route>
    //         <Route path="/">
    //           {loggedIn ? (
    //             <Redirect to="/Home" />
    //           ) : (
    //             <Form parentCallback={callbackFunction} />
    //           )}
    //         </Route>
    //       </Switch>
    //     </Router>
    //   );
  
  return (  
    <BrowserRouter>
        <Router>
        <ToastContainer position="top-center" />
                 <Topbar/>
            <div className="container">
                <Sidebar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
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
                <Route exact path="/AddConceptTocourse/:courseID">
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
                <Route exact path="/AddConceptToUser/:userID">
                    <AddConceptToUser />
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
                <Route exact path="/BadgesView/:badgeID">
                    <BadgesView />
                </Route>
                <Route exact path="/AddBadgesToUser/:userID">
                    <AddBadgesToUser />
                </Route>
            </Switch>
            </div> 
        </Router>
    </BrowserRouter>
    );
};

export default App;
