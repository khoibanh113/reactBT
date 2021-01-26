import React,{useEffect , useState} from 'react'
import { BrowserRouter as Router, Route,Link,Switch, Redirect  } from 'react-router-dom'
import Home from './home.js';

  
function Post({match}) {

    useEffect(()=>{
        fetchItem();
        // console.log(match)
    },[]);

    const [item,setItem] = useState({
        item:{
            name:'',
            images:{
                icon:'',
            }
        },
    });

    const fetchItem = async () =>{
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        
        const item = await fetchItem.json();
        console.log(item.data);
        setItem(item.data);
    }
  
    return(
        <div>
            <h1>{item.item.name}</h1> 
            <img src={item.item.images.icon} alt="" /> 
            <Link to="/" >HomePage</Link>
        </div>
    )
  }

export default Post;