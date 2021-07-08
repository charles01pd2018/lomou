
const Doc = ( { 
    id,
    content: {
        docList
    },
} ) => {

    return (
        <section id={id} className='doc-container'>
            <div className='doc-wrapper'>
                {
                    docList.map( ( { header, paragraph } ) => {
                        return (
                            <section key={header} className='doc-text-wrapper'>
                                <h1 className='doc-header'>{header}</h1>
                                <p className='doc-paragraph text-sm'>{paragraph}</p>
                            </section>
                        );
                    } )
                }
            </div>
        </section>
    );
}

export default Doc;