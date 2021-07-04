// dependencies
import { useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
// elements
import Image from 'next/image';
import classNames from 'classnames';


const ViewPanel = ( { 
    id,
    className,
    content: {
        text,
        image,
    },
    pageState,
    setPageState,
    numPageStates,
} ) => {

    /* HOOKS */
    const viewPanelRef = useRef( 0 );

    /* CLASSNAMES */
    const viewPanelContainerClasses = classNames( 'view-panel-container', className );

    /* CONTENT */
    const { headerText, descriptionText } = text;
    const { path, alt } = image;

    useScrollPosition( ( { prevPos, currPos } ) => {
        const scrollUp = currPos.y >= prevPos.y;
        const checkValidScrollUp = pageState > 0;
        const scrollDown = currPos.y <= prevPos.y;
        const checkValidScrollDown = pageState <= numPageStates;

        if ( scrollUp && checkValidScrollUp  ) setPageState( state => state - 1 );
        if ( scrollDown && checkValidScrollDown ) setPageState( state => state + 1 );

      }, [ pageState ],
        null,
        true,
        300 );

    return (
        <section id={id} ref={viewPanelRef} className={viewPanelContainerClasses}>
            <div className='view-panel-wrapper'>
                <div className='view-panel-text-wrapper'>
                    <h1 className='view-panel-header'>{headerText}</h1>
                    <p className='view-panel-description'>{descriptionText}</p>
                </div>
                
                <div className='view-panel-image-wrapper'>
                    <Image src={path} alt={alt}
                        width='300'
                        height='300' />
                </div>
            </div>
        </section>
    );
}

export default ViewPanel;