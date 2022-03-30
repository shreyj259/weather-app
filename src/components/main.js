import React,{useEffect,useState} from "react";
import { fetchApi,searchBox } from "./api/api";
import SearchComp from "./search";
import MainCard from "./mainCard";
import './styles/main.css';

function MainComponent(props){
    const [qvalue,setqvalue]=useState("India");
    const [shouldFetch,setshouldFetch]=useState(0);
    const [currentData,setCurrentData]=useState({});
    const [searchData,setsearchData]=useState([]);
    const [showSearchResults,setShowSearchResults]=useState(false);

    const changeHandler=(event)=>{
        let temp=event.target.value;
        setqvalue(temp);
        showSearchResultsHandler();
      }

    const showSearchResultsHandler=()=>{
        if(qvalue.length>=2)
        setShowSearchResults(true);
        else
        setShowSearchResults(false);
    }

    const resultClickHandler=(name)=>{
        setqvalue(prev=>name);
        shouldFetchHandler();
    }

    const shouldFetchHandler=()=>{
        setShowSearchResults(false);
        setshouldFetch(prev=>prev+1);
    }  
    
    useEffect(() => {
        fetchApi(qvalue).then(response =>{
            setCurrentData({...response});
            setshouldFetch();
        }).catch(error=>{
            console.log(error);
        });
    },[shouldFetch]
    );


    useEffect(()=>{
        searchBox(qvalue).then(response =>{
            setsearchData(response.data);
        }).catch(error=>{
            console.log(error);
        });
    },[qvalue]);
    
    const isday=shouldFetch!==0&&currentData.data.current.is_day===1?0:1;
    return(
        <div className={`container ${isday?"bg-night":null}`}>
            <SearchComp resultClickHandler={resultClickHandler} showSearchResults={showSearchResults} shouldfetch={shouldFetchHandler} searchData={searchData} value={qvalue} changeHandler={changeHandler}/>
            {shouldFetch!==0?<MainCard currentData={currentData.data} />:<div className="loader-wrapper"> <div class="loader"></div></div> 
}
        </div>
    )
}



export default MainComponent; 