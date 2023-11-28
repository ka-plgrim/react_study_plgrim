import {getImageUrl} from '../util/util.js';

export function Avartar({ person, size}) {
    let imageSize = 's';
    if (size >= 90) imageSize = 'b';

    return (
        <img
            className="avatar"
            src={getImageUrl(person.imageId, imageSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function ProfileAvartar() {
    return (
        <>
            <Avartar
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
                size={40}
            />
            <Avartar
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
                size={100}
            />
        </>
    );
}
