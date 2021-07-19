// dependencies
import { useRef, useEffect } from "react";


const clickOutsideRef = ( closeFunction ) => {

    /* FUNCTIONS */
    const clickOutside = ( event ) => {
        if ( !ref.current ) return;
        if ( ref.current.contains( event.target ) ) return;
        closeFunction();
    }
    
    /* HOOKS */
    const ref = useRef( null );

    useEffect( () => {
        document.addEventListener( 'click', clickOutside );
        document.addEventListener('mousedown', clickOutside );
        return () => {
            document.removeEventListener( 'click', clickOutside );
            document.removeEventListener('touchstart', clickOutside );
        }
    }, [] );  

    return ref;
}

export default clickOutsideRef;
