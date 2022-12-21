import {useEffect, useState} from 'react'

// 'children' is a special prop 
const Route = ({path, children}) => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(()=>{
    const onLocationChange = ()=>{
      // console.log('Location changed')
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popState', onLocationChange )

    return ()=>{
      window.removeEventListener('popState', onLocationChange)
    }
  },[])

  return (currentPath === path ? children : null)
}

// React library is imported when jsx has to be written
export default Route