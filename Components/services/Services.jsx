import React from 'react'
import "./Services.css";
import Image1 from "../../assets/image-1.svg";
import Image2 from "../../assets/image-2.svg";
import Image3 from "../../assets/image-3.svg";

const data = [
    {
        id: 1,
        image: Image1,
        title: "Web Development",
        description: 
        "I'm good at HTML,CSS,JS as well as libraries like reactJS, Bootstrap.",
},
{
    id:2,
    image: Image2,
    title: "UI/UX Design",
    description: "I can design UI/UX using Figma and Adobe XD",
},

{
    id:3,
    image: Image3,
    title: "Photography",
    description: "I'm passionate about taking photographs.",

},

];


const Services = () => {
    return (
     <section className='services container section' id='services'>
        <h2 className='section_title'>Services</h2>

        <div className='services_container grid'>
            {data.map(({id, image, title, description}) => {
               return(
                <div className="services_card" key={id}>
                    <img src={image} alt="" className="services_img" />

                    <h3 className='services_title'>{title}</h3>
                    <p className="services_description">{description}</p>
                </div>
               ); 
            })}
        </div>
     </section>   

    )
}

export default Services
