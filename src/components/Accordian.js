import React, { useState } from 'react'

const Accordian = ({items})=>{

  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index)=>{
    console.log('index clicked', index)
    setActiveIndex(index)
  }

  const mapping = items.map((item,index)=>{

    const indexx = index === activeIndex ? '' : 'collapsed'
    const inn = index === activeIndex ? 'show' : ''


    return(
      <React.Fragment key={item.title}>
    <div className='container'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" onClick={()=> onTitleClick(index)}>
          <h2 className="accordion-header" id="headingOne">
            <button className={'accordion-button ' + indexx}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong> {item.title} </strong>
            </button>
          </h2>
          <div id="collapseOne" className={"accordion-collapse collapse " + inn} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      </div>
    </div>
      </React.Fragment>
    )
  })
    return(
        <div>
          <h1>  Accordian</h1>
          <h4>{items.length}</h4>
          {mapping}
          <h2>{activeIndex}</h2>
        </div>
    )
}

export default Accordian;