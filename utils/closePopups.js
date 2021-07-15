// if no arguments are provided, all popups will be closed
//  [ list of custom setStates ], [ list of setStateObjects ], focusedPopupName: string, stateSet: any=false
const closeAllPopups = ( setStateList, setStateObject, focusedPopupName='', defaultState=false ) => {
    if ( setStateList ) {
        setStateList.forEach( ( setState ) => {
            console.log( setState );
            setState( defaultState );
        } );
    }
  
    if ( setStateObject ) {
        console.log( 'hello' );
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