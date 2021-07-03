// elements
import Image from 'next/image';
// images
// import glass from '../../public/static/images/product--glass-wireless-charger.jpg'


const ViewPanel = ( { 
    id,
    content: {
        headerText,
        descriptionText,
    },
} ) => {

    return (
        <section id={id} className='view-panel-container'>
            <div className='view-panel-wrapper'>
                <div className='view-panel-text-wrapper'>
                    <h1 className='view-panel-header'>{headerText}</h1>
                    <p className='view-panel-description'>{descriptionText}</p>
                </div>
                
                <div className='view-panel-image-wrapper'>
                    <Image src='/static/images/product--glass-wireless-charger.jpg' alt='fdsaf'
                        width='300'
                        height='300' />
                </div>
            </div>
        </section>
    );
}

export default ViewPanel;