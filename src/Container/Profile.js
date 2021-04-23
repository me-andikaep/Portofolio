import React from 'react'
import '../Styles/profile.scss'

const Profile = (props) => {
    return (
        <div className="c-card-profile">
            <div className="c-card-content">
                <div className="card-content">
                    <div className="card-name">
                        Andika Eka Putra
                    </div>
                    <div className="card-text">
                        <p className="txt">
                            Welcome to this unavalaibel website.
                            My name is Andika Eka Putra.
                            A Front End Web Developer.
                            This is just a portofolio.
                            Thank you for your visit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="c-card-content">
                <div className="card-content-img">
                    <div className="card-img-frame">

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
