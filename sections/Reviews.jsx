'use client'
import { useEffect, useRef, useState } from "react"

const reviews = [
    { id: 1, username: 'Saginbek', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, voluptate eius. Nesciunt laborum iure incidunt.' },
    { id: 2, username: 'Berik', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, voluptate eius. Nesciunt laborum iure incidunt.' },
    { id: 3, username: 'Serik', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, voluptate eius. Nesciunt laborum iure incidunt.' }
];

export default function Reviews() {
    const trackRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < reviews.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };
    
    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

    }, [currentIndex])

    return (
        <section className="reviews fade-in">
            <div className="container">

                <div className="reviews__inner">
                    <div className="reviews__nav">
                        <h2 className="my-title">
                            <p>What People Say</p>
                            <span>About Us?</span>
                        </h2>

                        <div className="reviews__btns">
                            <button onClick={prevSlide} className="reviews__btn reviews__btn--prev" aria-label="Previous review">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>

                            <button onClick={nextSlide} className="reviews__btn reviews__btn--next" aria-label="Next review">
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="reviews__slider">
                        <div className="reviews__track-wrapper">
                            <div className="reviews__track" ref={trackRef} style={{ transition: '0.5s' }}>
                                {reviews.map((review) => (
                                    <div key={review.id} className="reviews__item"> 
                                        <img className="reviews__avatar" src="/images/default-user.webp" alt={review.username} />
                                        <p className="reviews__text">{review.description}</p>
                                        <div className="reviews__author">{review.username}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}