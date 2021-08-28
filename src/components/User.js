import React from 'react'
import './User.css'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'


function User() {
    return (
        <div className="user">
            <h1 className="user__name">Denis KOJO</h1>
            <p className="user__profession">Développeur Web Junior</p>
            <div className="user__infos">
                <p className="user__info">
                    <EmailIcon /><a href="mailto:dennismarfo@gmail.com">dennismarfo@gmail.com</a> 
                </p>
                <p className="user__info">
                    <PhoneIcon /><a href="+33662396602">0662396602</a>
                </p>
            </div>

        </div>
    )
}

export default User