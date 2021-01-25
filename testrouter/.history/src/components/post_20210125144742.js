import React from 'react'
import { BrowserRouter as Router, Route,Link,Switch, Redirect  } from 'react-router-dom'
function Child({ match }) {
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    )
  }
  
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
        const { posts } = this.state
        return (
            <div className='posts'>
                <h1>Posts List</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
                <Route path='/posts/:id123' component={Child} />
            </div>
        )
    }
  }

export default post;