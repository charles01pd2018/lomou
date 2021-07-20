
const ProgressBar = ( { 
    id,
    scrollPercent,
    color,
    backgroundColor
} ) => {
    
    const progressBarStyles = {
        background: `linear-gradient( to right, ${color} ${scrollPercent}%, ${backgroundColor} 0% )`,
    }

    return (
        <section id={id} className='progress-bar-container'>
            <div className='progress-bar-wrapper' style={progressBarStyles} />
        </section>
    );
}

export default ProgressBar;