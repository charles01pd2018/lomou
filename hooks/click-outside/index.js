
// dependencies
import { useEffect } from "react";


const addClickOutsideRef = ( refList ) => {

    /* FUNCTIONS */
    const clickOutside = ( event ) => {
        refList.forEach( ( [ ref, onClick ] ) => {
            if ( !ref.current ) return;
            if ( ref.current.contains( event.target ) ) return;
            onClick(); // this will only close the targetted refs
        } );
    }

    useEffect( () => {
        document.addEventListener( 'click', clickOutside );
        document.addEventListener('mousedown', clickOutside );
        return () => {
            document.removeEventListener( 'click', clickOutside );
            document.removeEventListener('touchstart', clickOutside );
        }
    }, [] );  
}

export default addClickOutsideRef;
