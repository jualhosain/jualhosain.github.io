import React from 'react'
import Social from './Social'
const About = () => {
return (
        <main>
            <section className="about">
                <div className="about__bio-image">
                    <div className="about__bio">
                        <h2 className="about__bio__headtext">
                            BIO
                    </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odio eius soluta alias accusantium, praesentium rem
                        delectus pariatur assumenda sequi aliquid illum error dolorum eaque repellendus accusamus nemo obcaecati fugiat?</p>
                    </div>
                </div>
                <div className="about__work">
                    <h1>What Can I Do For U? </h1>
                    <div className="about__works">
                        <div className="about__works__single">
                        <h2 className="text-header">Front End Design</h2>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever the industry's
                            standard dummy text ever..</p>
                        </div>
                        <div className="about__works__single">
                        <h2 className="text-header">Back End Development</h2>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever the industry's
                            standard dummy text ever..</p>
                        </div>
                        <div className="about__works__single">
                        <h2 className="text-header">Wordpress</h2>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever the industry's
                            standard dummy text ever..</p>
                        </div>
                        <div className="about__works__single">
                        <h2 className="text-header">Laravel</h2>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever the industry's
                            standard dummy text ever..</p>
                        </div>
                    </div>
                </div>
                <Social />
                <footer>&copy; Copyright 2020</footer>
            </section>
        </main>
    )
}
export default About;