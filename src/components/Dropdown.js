import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const DropDown =({selected,options, onLabelSelected, label})=>{

    const randeredList = options.map((option)=>{
        if(option.label === selected.label){
            return null;
        }
        return(
            <div>
                <Dropdown.Item key={option.value} onClick={()=>{onLabelSelected(option)}}>{option.label}</Dropdown.Item>
            </div>
        )
    })

    return(
        <div>
            <label className='mb-2'>{label}</label>
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selected.label}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    {randeredList}
                </Dropdown.Menu>
             </Dropdown>
        </div>
    )
}

export default DropDown;