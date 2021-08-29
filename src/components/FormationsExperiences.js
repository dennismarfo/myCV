import React from "react"
import "./FormationsExperiences.css"
import DataFormation from "../datas/Formations"
import Formations from "./Formations"
import DataExperiences from "../datas/Experiences"
import Experiences from "./Experiences"

function FormationsExperiences() {
    return <>
        <Formations datas={DataFormation} />
        <Experiences datas={DataExperiences} />
    </>
}

export default FormationsExperiences