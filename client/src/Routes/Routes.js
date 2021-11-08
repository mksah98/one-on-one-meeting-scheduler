import { Route, Switch } from "react-router";

import Main from "../pages/Main";
import Employees from "../pages/Employees";
import ActionItem from "../pages/ActionItem";
import Meetings from "../pages/Meetings";
import Feedbacks from "../pages/Feedbacks";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path="/emp-list">
                <Employees />
            </Route>
            <Route exact path="/act-list">
                <ActionItem/>
            </Route>
            <Route exact path="/mec-list">
                <Meetings/>
            </Route>
            <Route exact path="/fed-list">
                <Feedbacks/>
            </Route>
        </Switch>
    )
}

export default Routes
