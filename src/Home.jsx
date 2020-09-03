import React from 'react'
const Home = () => {
return (
        <main>
            <section className="home">
                <h2>Hi ! My Name Is</h2>
                <h1 className='home__name'>
                    Juwel
                <span className="home__name--last">Hosain</span>
                </h1>
                <h2>Web Developer, Designer & Programmer</h2>
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
    )
}
export default Home;