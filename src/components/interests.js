import React from "react"
import CodeIcon from '@material-ui/icons/Code';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ComputerIcon from '@material-ui/icons/Computer';
import PeopleIcon from '@material-ui/icons/People';

function interets() {
    return (
    <div className="skills">
        <h2 className="h2">Centres d'intérêts</h2>
        <ul>
            <li>Informatique</li>
            <li>Nouvelles technologies</li>
            <li>Musique (Piano)</li>
            <li>Basket-ball</li>
            <li>Bénévolat</li>
        </ul>
        <div className="interests">
            <CodeIcon style={{ fontSize: 40}}/>
            <SportsBasketballIcon style={{ fontSize: 40}}/>
            <MusicNoteIcon style={{ fontSize: 40}}/>
            <ComputerIcon style={{ fontSize: 40}}/>
            <PeopleIcon style={{ fontSize: 40}}/>
            
        </div>
    </div>
    )
}

export default interets