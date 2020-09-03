import React from 'react'
import SocialInfo from './project_single/social'
const Social = () => {
return (
        <>
        <div className="social-icons">
            {
                SocialInfo.map(a => {
                    return (
                        <a href={a.link}>
                            <i className={a.iconClass}></i>
                        </a>
                    )
                })
            }
            </div>
        </>
    )
}
export default Social;