import React from 'react'
import python from '../../Assets/img/python_2.jpg'
import graphics from '../../Assets/img/graphics.jpg'
import video from '../../Assets/img/video.jpg'

const Body = () => {
  return (
    <div className="courseList">
     <div className="comp" id="comp">
        <h1 className="">Computer Programming (Python)</h1>
        <p>
            Step into the world of programming with Python, one of the most versatile and beginner-friendly languages. 
            This course covers everything from the basics of syntax and variables to more advanced topics like data structures,
            object-oriented programming, and web development. Whether you're new to coding or looking to sharpen your Python skills,
            you'll learn how to build real-world applications, automate tasks, and solve complex problems efficiently.
            Perfect for aspiring developers and tech enthusiasts eager to make their mark in the world of software development.
        </p> 
        <img src={python} alt="" width="700" height="500"/>  
     </div>

     <div className="graphics" id="graphics">
        <h1 className="">Graphic Design</h1>
        <p>
            Unleash your creativity with our Graphic Design course! Learn how to create visually
            appealing content using industry-standard tools like Adobe Photoshop and Illustrator. 
            This course dives deep into design principles, color theory, typography, and layout 
            techniques to help you create logos, posters, social media graphics, and more.
            Whether you're just starting out or seeking to refine your design skills,
            this course provides hands-on projects and expert guidance to help you build a strong design portfolio.
        </p> 
        <img src={graphics} alt="" width="700" height="500"/>  
     </div>

     <div className="video" id="video">
        <h1 className="">Video Editing</h1>
        <p>
            Bring stories to life through video editing! This course introduces you to
             the art of video production, from cutting and arranging footage to adding 
             transitions, effects, and soundtracks. You'll work with professional software 
             like Adobe Premiere Pro or Final Cut Pro, mastering the skills needed to create
              polished content for YouTube, social media, or even short films. Perfect for 
              aspiring filmmakers, content creators, and anyone passionate about video 
              storytelling.
        </p> 
        <img src={video} alt="" width="700" height="500"/>
     </div>  
    </div>
  )
}

export default Body