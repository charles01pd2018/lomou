
const clickOutsideEvent = ( event, { current }, closeFunction ) => {
    if ( !current ) return;
    if ( current.contains( event.target ) ) return;
    closeFunction();   
}

export default clickOutsideEvent;
