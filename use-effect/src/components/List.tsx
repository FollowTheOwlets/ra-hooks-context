import React from 'react'
import { Person, PersonInfo } from '../models/Models';

interface ListProps {
    persons: Person[];
    activePerson: Person | undefined;
    setPerson: (person: Person) => void;
}

export const List = ({ persons, activePerson, setPerson }: ListProps) => {
    return (
        <div className='person-list'>
            {persons.map((p) =>
                <div
                    key={p.id}
                    className={`person-list__item ${activePerson == p ? "active" : ""}`}
                    onClick={() => setPerson(p)}
                >
                    {p.name}
                </div>
            )}
        </div>
    )
}
