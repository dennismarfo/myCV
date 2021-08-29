import React from "react"
import "./FormationsExperiences.css"
import DataFormation from "../datas/Formations"
import Formations from "./Formations"

function FormationsExperiences() {
    console.log(DataFormation)
    return <>
        <Formations datas={DataFormation} />
    </>
}

export default FormationsExperiences