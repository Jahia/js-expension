import _ from 'lodash';
import React from 'react';

const sayBye = function () {
        console.log(_.toLower("Good Bye!"));
        console.log("React", React);
    };

export default sayBye;