import React from "react";


const scrolltop =() =>{window.scrollTo(0, 0);} 


export const CourseDescrip = () => (
    <div className="container  col-md-8 col-lg-8 col-xl-8 pt-5 ">
    <div className="">
        <h2 className="sub-landing">Fullstack <span className="text-color-secondary">course</span></h2>
    </div>
    <div className="m-3 text-left">
        <p className="t-white">Our virtual course offers an exciting immersion into web development and programming.
            Throughout this extensive program, you'll explore a wide range of fundamental technologies and tools.
            You'll begin with the basics of HTML, CSS, and JavaScript, learning to create interactive and appealing
            websites. Next, you'll dive into the thrilling world of React, mastering the creation of modern and dynamic web applications.</p>

        <p className="t-white">But that's not all—you'll also be introduced to the exciting world of Python,
            where you'll learn efficient and effective programming. Additionally, you'll delve
            into the realm of databases with SQLAlchemy, acquiring essential skills for data
            storage and retrieval. Finally, you'll explore Flask, a Python web development framework,
            to build powerful and scalable web applications.</p>

        <p className="t-white">This course will provide you with a solid foundation to become a well-rounded web developer,
            capable of creating anything from simple web pages to advanced web applications. Get ready for an
            exhilarating learning journey!</p>
    </div>
    <div className="btn-login-section text-center">
        <a onClick={scrolltop}><button className="btn btn-outline-light rounded-pill">Start your journey now</button></a>
    </div>
</div>
);
