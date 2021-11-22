import React from "react";
import image from './crud_img.jpg';

const About = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>About page</h1>
                <p className="lead">
                    We use CRUD apps every day. Most of the time, without noticing. They keep us organized, they help digitise business processes, and they’re critical to application development. But many of us are oblivious to what CRUD apps are, or how to build one.
                    This is a CRUD App to create, read , update and delete things.
                    A CRUD app is a specific type of software application that consists of four basic operations; Create, Read, Update, Delete.
                    At a high level, a CRUD apps consist of three parts; the database, user interface, and APIs.
                </p>

                <img src={image} className="mt-3 " />
            </div>
        </div>
    );
};

export default About;