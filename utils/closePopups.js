//  [ list of custom setStates ], setStateObject, focusedPopupName: string, stateSet: any=false
const closeAllPopups = ( setStateList, setStateObject, focusedPopupName='', defaultState=false ) => {
    if ( setStateList ) {
        setStateList.forEach( ( setState ) => {
            setState( defaultState );
        } );
    }
  
    if ( setStateObject ) {
        setStateObject( ( state ) => {
            const newPopupStateObject = {};
            Object.keys( state ).forEach( ( key ) => {
                if ( key === focusedPopupName ) newPopupStateObject[ key ] = state[ key ];
                else newPopupStateObject[ key ] = defaultState;
            } );
    
            return newPopupStateObject;
        } );
    }
}

export default closeAllPopups;