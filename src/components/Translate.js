// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM 
import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'


const options =[
    {
        label:'Arabic',
        value:'Ar'
    },
    {
        label:'Urdu',
        value:'ur'
    },
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'English US',
        value:'en'
    },
]

const Translate = ()=>{
const [selected, setSelected] = useState(options[0])
const [text, setText] = useState('')

    return(
        <>
        <form>
            <label>Enter Text</label>
            <input type='text' className='form-control mb-3' 
                value={text}
                onChange={e=> setText(e.target.value)}
            />
            <Dropdown 
            options={options} 
            selected={selected} 
            onLabelSelected={setSelected} 
            label={'Select Language'}
            />
            <hr/>

            <Convert text={text} language={selected} />
        </form>
        </>
    )

}

export default Translate;