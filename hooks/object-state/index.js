// dependencies
import { useState } from 'react';

const useObjectState = ( length, initialState, variableName ) => {
    let stateObject = {};
    for ( let i =0; i < length; i++ ) {
        stateObject[ variableName + i ] = initialState;
    }

    return useState( stateObject );
}

export default useObjectState;