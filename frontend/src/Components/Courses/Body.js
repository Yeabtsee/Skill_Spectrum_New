import React,{useState,useEffect} from 'react';
import '../../Assets/css/courses.css';

const Body = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="course-list">
      {courses.map(course => (
        <div className="course-card" key={course.id}>
          <img src={course.image_path} alt={course.course_name} className="course-image" />
          <div className="course-content">
            <h1>{course.course_name}</h1>
            <p>{course.course_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
