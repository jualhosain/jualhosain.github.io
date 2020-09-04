import React from 'react'
const SingleWork = (props) => {
return (
        <>
        <div class="worked__works__single">
            <img src={props.img} alt="asdf" />
            <div class="text-header">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <div class="works_btn">
                    <a href={props.preview.link} class='works_btn__link'>
                        <i class='fas fa-eye'></i> Preview
                    </a>
                    <a class="works_btn__link" href={props.github.link}>
                        <i class='fab fa-github'></i> Github
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default SingleWork;