import './styles/search.css'

const SearchComp=(props)=>{

    const searchResults=props.searchData.map(data=>(
       <div className="result" key={data.name} onClick={()=>{props.resultClickHandler(data.name)}} > {data.name + ", "+ data.country}</div>
    )).slice(0,5);

    return(
        <div className="search-module">
        <div className="search-container">
        <input className={`search-box ${!props.showSearchResults?"search-box-second":""}`} type="text" value={props.value} onChange={props.changeHandler} />
        <button className={`search-btn ${!props.showSearchResults?"search-btn-second":""}`} onClick={props.shouldfetch}>Click here</button>
        </div>
        <div className="search-results">
            {props.showSearchResults?searchResults:null}
        </div>
        </div>
    )
}


export default SearchComp;