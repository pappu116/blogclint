import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menu = ({cat}) => {

  const [posts,setPosts] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`)

        setPosts(res.data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData ();
  }, [cat])

    // const posts = [
    //     {
    //       id:1,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore vitae quam nobis minima corporis perferendis. Ratione aperiam corporis accusamus?",
    //       img:"https://images.pexels.com/photos/5840867/pexels-photo-5840867.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    
    //     },
    //     {
    //       id:2,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore vitae quam nobis minima corporis perferendis. Ratione aperiam corporis accusamus?",
    //       img:"https://images.pexels.com/photos/9509207/pexels-photo-9509207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    //     },
    //     {
    //       id:3,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore vitae quam nobis minima corporis perferendis. Ratione aperiam corporis accusamus?",
    //       img:"https://images.pexels.com/photos/13210869/pexels-photo-13210869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    //     }
    //   ];
    
  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={`../upload/${post.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu