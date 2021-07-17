import React from "react"
import { useEffect, useState } from 'react'

import HabilityModel from '../../Models/HabilityModel'

import TVImage from '../../Assets/img/TV_PNG.png'
import TrophyIcon from '../../Assets/logos/trophy.svg'
import TrophyActiveIcon from '../../Assets/logos/trophy_active.png'

import { ExperiencesTelevision, ExperienceList } from './style'

interface Props{
    habilities: Array<HabilityModel>
}

const Experiences: React.FC<Props> = ({ habilities }: Props) => {

    const [myHabilities, setMyHabilities] = useState<Array<any>>([])

    useEffect(() => {
        setMyHabilities(habilities)
    },[habilities])

    return (
        <ExperiencesTelevision>
            <img src={ TVImage } alt="tv"/>
            <div className="experiences-list">
                {
                    myHabilities.map((hability, index) => {
                        
                        const levels: Array<any> = []
                        let aux: number = 1

                        while(aux <= 5){
                            if(aux <= hability.level){
                                levels.push(TrophyActiveIcon)
                            }else {
                                levels.push(TrophyIcon)
                            }
                            aux = aux + 1
                        }

                        console.log(levels)

                        return (
                            <ExperienceList key={ index }>
                                <p>{ hability.name }</p>
                                <div>
                                    {
                                        levels.map(level => <img src={ level } alt="troféu"/>)
                                    }
                                </div>
                            </ExperienceList>
                        )
                    })
                }
            </div>
        </ExperiencesTelevision>
    )
} 

export default Experiences