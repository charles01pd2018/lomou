const createStateObject = ( length, initialState, variableName ) => {
    let stateObject = {};
    for ( let i =0; i < length; i++ ) {
        stateObject[ variableName + i ] = initialState;
    }

    return stateObject;
}

export default createStateObject;