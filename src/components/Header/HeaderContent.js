import React from 'react';
import './Header.css';
import Translate from '../../translate';

 export default function HeaderContent({children}) {
    return (
        <div className='headerMainContent'>
            <div className='animationContainer'>
                <p className='animationPart'>
                  { Translate.__('TEXT') }
                    <span className="animationText">
                        Sunlight
                    </span>
                  { Translate.__('SLOGAN') }
                </p>
            </div>
            <p className='companyDescription'>
              {children}
            </p>
        </div>
    )
}
