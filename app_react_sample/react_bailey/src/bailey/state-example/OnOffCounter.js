import { useState } from 'react';

export default function OnOffCounter() {
    const [isPaused, setIsPaused] = useState(false);
    return (
        <div>
            <Counter isPaused={isPaused}/>
            <label>
                <input
                    type="checkbox"
                    checked={isPaused}
                    onChange={e => {
                        setIsPaused(!isPaused)
                    }}
                />
                Take a break
            </label>
        </div>
    );
}

function Counter({isPaused}) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }

    return (
        <>
            {isPaused ? (
                    <p>See you later!</p>
                )
                : (
                    <div
                        className={className}
                        onPointerEnter={() => setHover(true)}
                        onPointerLeave={() => setHover(false)}
                    >
                    <h1>{score}</h1>
                    <button onClick={() => setScore(score + 1)}>
                        Add one
                    </button>
                </div> )}
        </>

    );
}
