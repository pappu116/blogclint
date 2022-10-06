import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {

  const [posts,setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`)

        setPosts(res.data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData ();
  }, [cat])
  

  // const posts = [
  //   {
  //     id:1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore vitae quam nobis minima corporis perferendis. Ratione aperiam corporis accusamus?",
  //     img:"https://images.pexels.com/photos/5840867/pexels-photo-5840867.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"

  //   },
  //   {
  //     id:2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore vitae quam nobis minima corporis perferendis. Ratione aperiam corporis accusamus?",
  //     img:"https://images.pexels.com/photos/9509207/pexels-photo-9509207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  //   },
  //   {
  //     id:3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore vitae quam nobis minima corporis perferendis. Ratione aperiam corporis accusamus?",
  //     img:"https://images.pexels.com/photos/13210869/pexels-photo-13210869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  //   }
  // ];

  const getText = (html) =>{
    const doc =  new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent
  }

  return (
  <div className="home">
    <div className="posts">
      {
        posts.map((post)=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`} >
                <h1>{post.title}</h1>   
              </Link>
              <p>{getText(post.desc)}</p>
                <button>Read More</button>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default Home