
const ViewPanel = ( { 
    id,
    content,
} ) => {

    return (
        <section id={id} className='view-panel-container'>
            <div className='view-panel-wrapper'>
                <p>View Panel</p>
            </div>
        </section>
    );
}

export default ViewPanel;