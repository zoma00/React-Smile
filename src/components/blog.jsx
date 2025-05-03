import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//import { Link } from "react-router-dom";

export default class blog extends Component {


    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({ posts: response.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    render() {

        const posts = this.state.posts;
        const allposts = posts.map((post, idx) => {
            return (
                <div>
                    <a href='' key={idx}>{post.title}</a><br></br>
                    <p>{post.body}</p>
                </div>
            )
        });




        return (
            <div>
                <h1>This is Blog Component</h1>

                {/* ✅ Correct Link Component */}
                <Link to="/writepost" className="btn btn-primary">Add New</Link>

                <div className="media">
                    <div className="media-body text-center">
                        {allposts}
                    </div>
                </div>
            </div>
        );
    }

}










/*
import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Blog Page</h1>
        </div>
    );
};

export default Blog;
*/