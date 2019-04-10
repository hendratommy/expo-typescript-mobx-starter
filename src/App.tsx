import React from "react";
import { Provider } from "mobx-react";
import { stores } from "./stores";
import Main from "./Main";

export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Main />
            </Provider>
        );
    }
}
