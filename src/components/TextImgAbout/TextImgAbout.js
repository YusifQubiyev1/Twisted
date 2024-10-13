import React from "react";
import './TextImgAbout.modules.css';
import backabout from '../../assets/images/background-blue-1.png';

const TextImgAbout = () => {
    return (
        <div>
            <img src={backabout} alt="backabout" className="img-about-back" />
            <div className="text-p-about">
                <p>This is a group that has come together for over 20 years. A collective of professionals that all share an incredibly powerful trait – integrity.</p>
                <p>This team have each other’s backs. They are proud to show up every day and push one another to create. Not just a product, but a community, a process, a system – one that can support this idea that they all share.</p>
                <p>That they are creating a tool to express oneself and get a little bit closer to one thing we all strive to have…to be free.</p>
                <p>Established in Yorkshire, England, 2000.</p>
            </div>
        </div>
    )
}

export default TextImgAbout;