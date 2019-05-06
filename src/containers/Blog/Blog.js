import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Post'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'
class Blog extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash: '#submit',
                                search:'?query=aple'
                            }}> New post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" component={Posts} />
                <Route exact path="/new-post" component={NewPost} />
                <Route exact path="/:id" component={FullPost} />
            </div>
        );
    }
}

export default Blog;