import React from "react";
import './blog.css'
import img from '../../Asset/c1.jpg'
import img2 from '../../Asset/c2.jpg'
import img3 from '../../Asset/c3.jpg'
import img4 from '../../Asset/c4.jpg'
import { BsArrowRightShort } from "react-icons/bs"

const Posts = [
  {
    id: 1,
    postImage: img,
    title: 'Beautiful Morocco, let us travel',
    description: 'The Kingdom of Morocco is a Muslim country in western North Africa with coastlines on the Atlantic Ocean and Mediterranean Sea',
  },
  {
    id: 2,
    postImage: img2,
    title: 'Exploring the Sahara Desert',
    description: 'Experience the vastness of the Sahara Desert with camel rides and overnight stays in desert camps.',
  },
  {
    id: 3,
    postImage: img3,
    title: 'The Majestic Atlas Mountains',
    description: 'Hike through the stunning Atlas Mountains and discover picturesque Berber villages along the way.',
  },
  {
    id: 4,
    postImage: img4,
    title: 'The Blue City of Chefchaouen',
    description: 'Wander through the blue-washed streets of Chefchaouen, a charming town nestled in the Rif Mountains.',
  }
];


const Blog = () => {
    return (
      <section className="blog container section">
        <div className="secContainer">
            <div className="secIntro">
                <h2 className="secTitle">
                  Our Best Blog!
                </h2>
                <p>An insight to the incredible experince in the world</p>
            </div>
            <div className="mainContainer grid">
              {
                Posts.map(({id, postImage, title, description}) => {
                 return(  <div className="singlePost grid">
                  <div className="imgDiv">
                   <img src={postImage} alt={title} />
                  </div>
                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <a href="" className=" flex">
                   Read More
                  <BsArrowRightShort className="icon"/>
                  </a>
                </div>)
                })
              }
            </div>
        </div>
      </section>
    )
}


export default Blog