/**
 * 리스트 렌더링
 *  - 화살표 함수
 *  - map 사용시 key를 설정(설정 하지 않으면 배열의 인덱스 혹은 프로퍼티의 키가 key로 설정됨)
 * */

import {getPersonImageUrl} from '../util/util'

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

export default function Persons() {
    const list = people.filter(person => person.profession === 'chemist');
    return list.map(person =>
        <>
            <li key={person.id}>
                <img
                    src={getPersonImageUrl(person)}
                    alt={person.name}
                />
            </li>
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </>
    );
}