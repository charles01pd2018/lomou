
// dependencies
import { useEffect, useRef } from "react";


const useClickOutsideRef = ( onClick ) => {

    /* HOOKS */
    const ref = useRef( null );
    
    /* FUNCTIONS */
    const clickOutside = ( event ) => {
        if ( !ref.current ) return;
        if ( ref.current.contains( event.target ) ) return;
        onClick(); // this will only close the targetted refs
    }

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

export default useClickOutsideRef;
