import {useState, useEffect, createContext} from 'react'

const Appcontext = createContext({})

export const AppProvider = ({children}) => {
    const [FullScreen, setFullScreen] = useState(false)

    useEffect(()=> {
        const handleResize = ()=> {
            const size = window.innerWidth;
            size > 1024 ? setFullScreen(true) : setFullScreen(false)
        }
        handleResize()

        window.addEventListener("resize", handleResize)

        return ()=> window.removeEventListener("resize", handleResize)
    }, [FullScreen])

    return (
        <Appcontext.Provider value={{FullScreen}}>
            {children}
        </Appcontext.Provider>
    )
}

export default Appcontext;