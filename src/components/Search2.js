import axios from 'axios'
import React,{useState, useEffect} from 'react'

const Search = ()=>{

    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])
    // console.log(results) 

    useEffect(()=>{
      const termId = setTimeout(()=>{
        setDebouncedTerm(term)
      },500)
      return(()=>{
        clearTimeout(termId)
      })
    },[term])

    useEffect(()=>{
      const search = async ()=>{
        const {data} =  await axios.get('https://en.wikipedia.org/w/api.php',{
             params:{
                 action: 'query',
                 list: 'search',
                 origin: '*',
                 format:'json',
                 srsearch: debouncedTerm,
             },
         })
         setResults(data.query.search)
     }
     search()
    },[debouncedTerm])

    const randeredList = results.map((result)=>{
        return(
            <div key={result.pageid}>
                <h4>{result.title}</h4>
               <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
               <a className='btn btn-primary' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                 
                 {/* <p>{result.snippet}</p> */}
                {/* <br/> */}
            </div>
        )
    })

    return(
        <div className='container'>
            <form>
            <div className="mb-3">
                <label htmlFor="search" className="form-label">Search bar</label>
                <input type="text" className="form-control" id="search" aria-describedby="emailHelp"
                    value={term}    
                    onChange={e=>{setTerm(e.target.value) }}
                />
            </div>
            </form>
                 {randeredList}
        </div>
    )
}

export default Search;