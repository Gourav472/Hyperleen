import React from 'react';
import CommonHeading from '../common/CommonHeading';
import alegion from "../assets/images/webp/alegion.webp";
import manthano from "../assets/images/webp/manthano.webp";
const Platforms = () => {
    return (
        <div className='pt-1 pb-2 xl:pb-10'>
            <div className="container mb-10">
                <CommonHeading
                    text="Tools and "
                    blueText="Platforms for Polygon "
                    className="max-w-[652px] text-center mx-auto"
                    blackText="Annotations"
                />
                <div className="pt-16">
                    <img src={alegion} alt="alegion" className='w-full' />
                    <img src={manthano} alt="manthano" className='mt-6 w-full' />
                </div>
            </div>
        </div>
    );
}

export default Platforms;
