// dependencies
import { useRef } from 'react';
import classNames from 'classnames';


const Modal = ({
    id,
    content: { 
       text
    },
    isModalActive,
    setIsModalActive,
}) => {

    /* HOOKS */
    const closeModalRef = useRef( null );

    /* FUNCTIONS */
    const closeModal = () => {
        setIsModalActive( false ); 
    }

    /* CLASSNAMES */
    const modalContainerClasses = classNames( 'modal-container', 
        isModalActive ? 'active' : 'not-active' );


    return (
        <section id={id} className={modalContainerClasses}>
                <div className='modal-wrapper'>
                    <button className='modal-x-close' onClick={closeModal} type='button'>&times;</button>
                    <div className='modal-text'>
                        {text}
                    </div>
                </div>
            <button ref={closeModalRef} className='modal-backdrop' onClick={closeModal} type='button' tabIndex='-1' hidden />
        </section>
    );
}

export default Modal;