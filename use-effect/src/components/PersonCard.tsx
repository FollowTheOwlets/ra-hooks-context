

import React from 'react'
import { PersonInfo } from '../models/Models'

interface PersonCardProps {
    info: PersonInfo;
}

export const PersonCard = ({ info }: PersonCardProps) => {
    return (
        <div className='person-card'>
            <div className="person-card__image">
                <img src={info.avatar} alt="avatar" />
            </div>
            <div className="person-card__name card-text">
                {info.name}
            </div>
            <div className="person-card__city card-text">
                {info.details.city}
            </div>
            <div className="person-card__company card-text">
                {info.details.company}
            </div>
            <div className="person-card__position card-text">
                {info.details.position}
            </div>
        </div>
    )
}
