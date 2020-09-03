import React from 'react'
import Social from './Social'
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
                    <Social />
                <footer>&copy; Copyright 2020</footer>
            </section>
        </main>
    )
}
export default Home;