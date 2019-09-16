import React from 'react';
import './Header.css';
// import Translate from '../../translate';

 export default function HeaderContent({children}) {
    return (
        <div className='headerMainContent'>
            <div className='animationContainer'>
                <p className='animationPart'>
                  React 
                    <span className="animationText">
                        Company
                    </span>
                  Develepment
                </p>
            </div>
            <p className='companyDescription'>
              { children }
            </p>
        </div>
    )
}
