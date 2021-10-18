import React from 'react'
import Content from './Content';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import login from './login'
import signup from './signup'
import Profile from './Profile';
import Contact from './Contact';
import Page404 from './Page404';
import Form_component from './Form_component';
import From_validation from './From_validation';
import Buttons from './Buttons';
import Elements from './Elements';
import Grids from './Grids';
import Widgets from './Widgets';
import Chart from './Chart';
import Basic_table from './Basic_table';
export default function Rout() {
    return (
        <Switch>
            <Route path="/" exact component={Content}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/signup" component={signup}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/page404" component={Page404}></Route>
            <Route path="/form_component" component={Form_component}></Route>
            <Route path="/form_validation" component={From_validation}></Route>
            <Route path="/buttons" component={Buttons}></Route>
            <Route path="/general" component={Elements}></Route>
            <Route path="/grids" component={Grids}></Route>
            <Route path="/widgets" component={Widgets}></Route>
            <Route path="/chart" component={Chart}></Route>
            <Route path="/basic_table" component={Basic_table}></Route>
        </Switch>
    )
}
