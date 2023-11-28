function Title({titleName}) {
    return <h1>{titleName}</h1>
}

export default function Card({children, titleName}) {
    return (
        <div className="card">
            <div className="card-content">
                <Title titleName={titleName}/>
                {children}
            </div>
        </div>
    )
}