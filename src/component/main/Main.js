import React from 'react'
import des1 from '../assets/des1.jpg';
import des2 from '../assets/des2.jpg';
import des3 from '../assets/des3.jpg';
import './Main.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";



const Data = [
    {
        id: 1,
        imgSrc: des1,
        destTitle: 'Patan',
        location: 'Nepal',
        grade: 'CULTURAL RELAX',
        fees: ' Rs.700  ',
        description: ' Patan also known as Lalitpur is one of the three royal cities in the Kathmandu Valley of Nepal alongside Kathmandu and Bhaktapur.'
    },
    {
        id: 2,
        imgSrc: des2,
        destTitle: 'Paris ',
        location: 'France',
        grade: 'CULTURAL RELAX',
        fees: ' Rs.700  ',
        description: ' Known as the "City of Light," Paris is renowned for its iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, Louvre Museum, and picturesque streets lined with cafes and boutiques.'
    },
    {
        id: 3,
        imgSrc: des3 ,
        destTitle: 'Rome',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: ' Rs.700 ',
        description: ' With its ancient ruins, historic sites, and vibrant atmosphere, Rome is a top destination for those interested in history, art, and architecture. Visitors can explore iconic landmarks like the Colosseum, Roman Forum, Vatican City, and Trevi Fountain, while also indulging in delicious Italian cuisine.'
    },
    
]
const Main = () => {


    return (
       <div  data-aos="fade-up" >
         <section className='main container section '>
            <div className='secTitle'>
                <h1 className='title'>
                    Most visited destinations
                </h1>
            </div>
            <div className=' secContent grid '>
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className='cardInfo'>
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>
                                    <div className='free flex'>
                                        <div className='grade'>
                                            <span> {grade}
                                                <small>+1</small>
                                            </span>

                                        </div>
                                        <div className='price ml-16'>
                                            <h5>{fees}</h5>
                                        </div>

                                    </div>
                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </section>
       </div>
    )
}

export default Main
