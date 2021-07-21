
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
                // when you navigate to a new page, for some reason a nullish ref gets added to the beginning of the refList
                if ( !ref.current ) continue;
                if ( !ref.current ) isFocused = true;
                if ( ref.current.contains( event.target ) ) isFocused = true;
            }
            if ( !isFocused ) onClick()
        }   
    }

    useEffect( () => {
        document.addEventListener( 'mousedown', clickOutside );
        document.addEventListener( 'touchstart', clickOutside );
        return () => {
            document.removeEventListener( 'mousedown', clickOutside );
            document.removeEventListener( 'touchstart', clickOutside );
        }
    }, [] );  

    return ref;
}

export default useClickOutsideRef;
