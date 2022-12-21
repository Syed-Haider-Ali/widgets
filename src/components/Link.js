import React from 'react'
//I made this component so that pages can render without reloading of pages

const Link =({className, href, children})=>{

    const onClick = (event)=>{

        if (event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault()
        window.history.pushState({}, '' , href)

        const navEvent = new PopStateEvent('popState')
        window.dispatchEvent(navEvent)
    }

    return(
        <>
        <a onClick={onClick} className={className} href={href}> {children}</a>
        </>
    )
}

export default Link