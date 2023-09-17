import { useEffect, useState } from 'react';

const API = "https://jsonplaceholder.typicode.com/posts";

const Fetch = () => {
    const [posts, setPosts] = useState();
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    const createPost = () => {
        return posts.map((post, key) => {
            return <li>{post.title}</li>
        })
    }

    return <ul>
        {posts && createPost()}
    </ul>
}

export default Fetch;