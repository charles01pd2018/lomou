
// dependencies
import { useEffect, useRef } from "react";


const useClickOutsideRef = ( onClick, refList ) => {

    let ref;
    let clickOutside;

    if ( !refList ) {
        ref = useRef( null );
        
        clickOutside = ( event ) => {
            if ( !ref.current ) return;
            if ( ref.current.contains( event.target ) ) return;
            onClick();
        }
    } else {
        clickOutside = ( event ) => {
            let isFocused;
            for ( const ref of refList ) {
                if ( !ref.current ) isFocused = true;
                if ( ref.current.contains( event.target ) ) isFocused = true;
            }
            if ( !isFocused ) onClick()
        }   
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
