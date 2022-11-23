export function RedeSocial(props) {
    return (
        <div className="cardRedeSocial">
            <a href={props.link} target={"_blank"}>
                <img src={props.src} alt={props.alt} />
            </a>
        </div>
    )
}