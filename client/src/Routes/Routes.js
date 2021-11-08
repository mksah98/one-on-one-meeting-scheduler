import { Route, Switch } from "react-router";

import Main from "../pages/Main";
import Employees from "../pages/Employees";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path="/emp-list">
                <Employees />
            </Route>
        </Switch>
    )
}

export default Routes
