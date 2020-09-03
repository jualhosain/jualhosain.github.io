import React from 'react'
import Single from './project_single/singleWork'
import data from './project_single/project'
import Social from './project_single/social'
const Project = () => {
    return (
        <>
            <main>
                <section class="worked">
                    <div class="worked__work-image">
                        <div class="worked__work">
                            <h2 class="worked__work__headtext">
                                Work
                    </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odio eius soluta alias
                            accusantium, praesentium rem
                            delectus pariatur assumenda sequi aliquid illum error dolorum eaque repellendus accusamus nemo
                        obcaecati fugiat?</p>
                        </div>
                    </div>
                    <div class="worked__work">
                        <h1>Some Of My Work!</h1>
                        <div class="worked__works">
                            {data.map(a => {
                                return <Single {...a} />
                            })}
                        </div>
                    </div>
                    <Social />
                    <footer>&copy; Copyright 2020</footer>
                </section>
            </main>
        </>
    )
}
export default Project;