import React from 'react';
import './Header.css';

 export default function HeaderContent({sectionData}) {
    return (
        <div className='headerMainContent'>
            <div className='animationContainer'>
                <p className='animationPart'>
                    Pre Text
                    <span className="animationText">
                        Sunlight
                    </span>
                    Lorem ipsum
                </p>
            </div>
            <p className='companyDescription'>
              {sectionData.content}
            </p>
        </div>
    )
}
