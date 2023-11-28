/**
 * 리스트 렌더링
 * */

import {getPersonImageUrl} from "../util/util";

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}];

function Scientist({title, persons}) {
    return (
        <ul>
            <h1>{title}</h1>
            {persons.map(person =>
                    <li key={person.id}>
                    <img
                        src={getPersonImageUrl(person)}
                        alt={person.name}
                    />
                    <p>
                        <b>{person.name}:</b>
                        {' ' + person.profession + ' '}
                        known for {person.accomplishment}
                    </p>
                </li>
            )}
        </ul>
    );

}

export default function Scientists() {
    const chemists = people.filter(person =>
        person.profession === 'chemist');

    const everyoneElse = people.filter(person =>
            person.profession !== 'chemist');

    return (
        <article>
            <Scientist title="Chemists" persons={chemists}/>
            <Scientist title="Everyone Else" persons={everyoneElse}/>
        </article>
    );
}