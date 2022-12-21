import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Convert =({text,language})=>{
    
    const [debouncedText, setDebouncedText] = useState(text)
    const [translated, setTranslated] = useState('')

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedText(text)
        },500)
        return ()=>{
            clearTimeout(timerId);
        }
    },[text])

    useEffect(()=>{
        const doTranslation = async ()=>{
           const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            })
            setTranslated(data.data.translations[0].translatedText)
        }

        doTranslation();
    }, [language,debouncedText])

    return(
        <>
            <h4>Output</h4>
            <h2>{translated}</h2>
        </>
    )
}

export default Convert