import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Menu from './component/Menu';
import Profile from './user/Profile';
import Users from './user/User';
import EditProfile from './user/EditProfile';
import PrivateRoute from './auth/PrivateRoute';
import FindPeople from './user/FindUsers';
import NewPost from './exportPosts/NewPost';
//import EditPost from './exportPosts/EditPost';
import SinglePost from './exportPosts/SinglePost';


//navigation bar

const MainRouter = () => (
    <div>
        <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/post/create" component={NewPost} />
                <Route exact path="/post/:postId" component={SinglePost} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <PrivateRoute exact path="/user/edit/:userId" component={EditProfile} />
                <PrivateRoute exact path="/findpeople" component={FindPeople} />
                <PrivateRoute exact path="/user/:userId" component={Profile} />
            </Switch>
    </div>
);

export default MainRouter;