export const NavigationDots = ({ active }) => {
    
    const sections = ['home','about', 'work', 'skills', 'testimonials', 'contact'];
    
    return (
        <div className='app__navigation'>
            {sections.map(( item, index )=>(
                <a 
                    href= {`#${item}`} 
                    key={ item + index}
                    className='app__navigation-dot'
                    style={ active === item ? { backgroundColor: '#7DB9B6'}: { }}
                />
            ))}
        </div>
    )
}
