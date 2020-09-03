import React from 'react'
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

                <div className="social-icons">
                    <a href="#">
                        <i className='fab fa-twitter fa-2x'></i>
                    </a>
                    <a href="#">
                        <i className='fab fa-facebook fa-2x'></i>
                    </a>
                    <a href="#">
                        <i className='fab fa-instagram fa-2x'></i>
                    </a>
                    <a href="#">
                        <i className='fab fa-github fa-2x'></i>
                    </a>
                </div>
                <footer>&copy; Copyright 2020</footer>
            </section>
        </main>
        </>
    )
}
export default Contact;