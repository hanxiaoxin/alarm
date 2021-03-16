import React, {Suspense} from "react";
import {Route, Switch,} from "react-router-dom";

import Page1 from "$views/page1/index";

const Page2 = React.lazy(() => import("$views/page2/index"));


export default function AppRouter(props) {
    return (
        <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/page1" exact>
                    <Page1/>
                </Route>
                <Route path="/page2" exact>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Page2/>
                    </Suspense>
                </Route>
                <Route path="/" exact>
                    <Page1/>
                </Route>
            </Switch>
        </div>
    );
}
