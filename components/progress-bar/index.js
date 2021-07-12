
const ProgressBar = ( { 
    id,
    scrollPercent,
} ) => {
    
    const progressBarStyles = {
        background: `linear-gradient( to right, blue ${scrollPercent}%, lightblue 0% )`,
    }

    // console.log( scrollPercent );

    return (
        <section id={id} className='progress-bar-container'>
            <div className='progress-bar-wrapper' style={progressBarStyles} />
        </section>
    );
}

export default ProgressBar;