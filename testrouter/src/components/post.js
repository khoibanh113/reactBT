import React from 'react'
import { BrowserRouter as Router, Route,Link,Switch, Redirect  } from 'react-router-dom'
import Child from './child.js';
// function Child({ match }) {
//     console.log(match);
//     return (
//         <div>
//             <h3>ID: {match.params.id}</h3>
//         </div>
//     )
// }
  
class post extends React.Component {
    state = {
        posts: [
            {
                id: 1,
                title: "Hello Blog World!"
            },
            {
                id: 2,
                title: "My second post"
            },
            {
                id: 3,
                title: "What is React Router?"
            }
        ]
    }
  
    render() {
        const { posts } = this.state;
        return (
            <Router>
                <div className='posts'>
                    <h1>Posts List</h1>
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <Link to={`/post/${post.id}`} >{post.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Route path='/post/:id' component={Child} />
                </div>
            </Router>
        )
    }
  }

export default post;