// dependencies
import { useRef } from 'react';
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
    sectionNumber,
} ) => {

    /* HOOKS */
    const viewPanelRef = useRef( sectionNumber );;

    /* CLASSNAMES */
    const viewPanelContainerClasses = classNames( 'view-panel-container', className );

    /* CONTENT */
    const { headerText, descriptionText } = text;
    const { path, alt } = image;

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