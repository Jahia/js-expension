import sayBye from '../app3/main';
import {Component} from "react";

const sayHello = function () {
        console.log("Hello there!");
        console.log("React.Component", Component);
    };

export {sayHello, sayBye}