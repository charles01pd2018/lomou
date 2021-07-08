// dependencies
import { useInView } from 'react-intersection-observer';
// elements
import Image from 'next/image';
import { SVG } from '../elements';
import classNames from 'classnames';


const ViewPanel = ( { 
    id,
    className,
    content: {
        icon,
        text,
        image,
    },
    sectionNumber,
    setPageState,
} ) => {

    /* HOOKS */
    const [ viewPanelRef, viewPanelInView ] = useInView( { 
        threshold: 0.7,
    } );

    /* CLASSNAMES */
    const viewPanelContainerClasses = classNames( 'view-panel-container', className );

    /* CONTENT */
    const { path: iconPath, alt: iconAlt } = icon;
    const { headerText, descriptionText } = text;
    const { path: imagePath, alt: imageAlt } = image;

    /* CHECKS */
    if ( viewPanelInView ) {
        setPageState( sectionNumber );
    }

    return (
        <section id={id} ref={viewPanelRef} className={viewPanelContainerClasses}>
            <div className='view-panel-wrapper'>
                <div className='view-panel-icon-wrapper'>
                <SVG className='view-panel-icon'
                    data={iconPath}
                    alt={iconAlt}
                    width='70'
                    height='70' />
                </div>
                <div className='view-panel-text-wrapper'>
                    <h1 className='view-panel-header'>{headerText}</h1>
                    <p className='view-panel-description'>{descriptionText}</p>
                </div>
                
                <div className='view-panel-image-wrapper'>
                    <Image src={imagePath} alt={imageAlt}
                        className='view-panel-image'
                        width='380'
                        height='380'
                        layout='intrinsic' />
                </div>
            </div>
        </section>
    );
}

export default ViewPanel;