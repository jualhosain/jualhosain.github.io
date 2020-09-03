import React from 'react'
import Social from './project_single/social'
const Contact = () => {
return (
        <>
        <main>
            <section className="contact">
                <h2>Get In Touch</h2>
                <div className="contact__list">
                    <div className="contact__list__items">
                        <i className='fas fa-envelope'></i>
                    Email
                    <div className="text-secondary">jualhosain@gmail.com</div>
                    </div>
                    <div className="contact__list__items">
                        <i className='fas fa-mobile-alt'></i>
                    Phone
                    <div className="text-secondary"> +8801892-153832</div>
                    </div>
                    <div className="contact__list__items">
                        <i className='fas fa-map-marker-alt'></i>
                    Address
                    <div className="text-secondary"> Chatmohar, Pabna, Bangladesh</div>
                    </div>
                </div>

                <Social/>
                <footer>&copy; Copyright 2020</footer>
            </section>
        </main>
        </>
    )
}
export default Contact;