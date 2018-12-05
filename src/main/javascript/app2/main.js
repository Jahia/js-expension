import sayBye from '../app3/main';
import {Component} from "react";
import D from '../app/main';

const sayHello = function () {
        console.log("Hello!");
        console.log("Dynamic React.Component", Component);
        console.log("Dynamic Loading vue");
        D();
    };

export {sayHello, sayBye}