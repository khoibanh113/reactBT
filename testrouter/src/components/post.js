import React,{useEffect , useState} from 'react'
import { BrowserRouter as Router, Route,Link,Switch, Redirect  } from 'react-router-dom'
import Child from './child.js';

  
function Post() {

    useEffect(()=>{
        fetchItem();
    },[]);

    const [items,setItems] = useState([]);

    const fetchItem = async () =>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        
        const items = await data.json();
        console.log(items);
        setItems(items.data);
    }
  
    return(
        <div>
            {items.map(item =>(
                <h1 key={item.itemId}>
                    <Link to={`/post/${item.itemId}`}>
                    {item.item.name}
                    </Link>
                </h1>
            ))}
        </div>
    )
  }

export default Post;