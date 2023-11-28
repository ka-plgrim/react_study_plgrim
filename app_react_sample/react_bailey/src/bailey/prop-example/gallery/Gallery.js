import {getImageUrl} from "../util/util.js";


function Profile({person, imgId, imgSize=70}) {
    const imgUrl = getImageUrl(imgId);

    return (
        <>
            <section className="profile">
                <h2>{person.name}</h2>
                <img
                    className="avatar"
                    src={imgUrl}
                    alt={person.name}
                    width={imgSize}
                    height={imgSize}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {person.profession}
                    </li>
                    <li>
                        <b>Awards: {person.awards.length} </b>
                        ({person.awards.join(', ')})
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {person.discovered}
                    </li>
                </ul>
            </section>
        </>
    )
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                person={{
                    name: "Maria Skłodowska-Curie",
                    profession:"geochemist",
                    awards:[
                        'Miyake Prize for geochemistry',
                        'Tanaka Prize'
                    ],
                    discovered:'a method for measuring carbon dioxide in seawater'
                }}
                imgId='szV5sdG'
            />
            <Profile
                person={{
                    name: "Katsuko Saruhashi",
                    profession:"physicist and chemist",
                    awards:[
                        'Nobel Prize in Physics',
                        'Nobel Prize in Chemistry',
                        'Davy Medal',
                        'Matteucci Medal'
                    ],
                    discovered:'polonium (element)'
                }}
                imgId='YfeOqp2'
            />
        </div>
    );
}
