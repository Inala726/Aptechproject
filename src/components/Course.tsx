import './Course.css'


const Course = () => {
    return(
   <>
   <div className="course-div">
    <h3>Earth Science course</h3>
    <div className="course-indiv">
    <img src="/excel.png" alt="" />
    <p>Excel High School has an online high school Earth Science course. Learn more about the course details here.</p>
    </div>
   </div>
   <div className="course-indiv">
     <img src="/north.jpg" alt="" />
     <p>Northgate Academy offers Earth science and astronomy as online homeschooling courses.</p>
   </div>
   <div className="course-indiv">
     <img src="/wash.png" alt="" />
     <p>Washington Technical Institute is an accredited college that offers online paralegal program and more.</p>
   </div>
   </>
    )
}

export default Course