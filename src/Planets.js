export const Planets = (props) => {
    return (
        <div key={props.key}>
            {props.isGasPlanet && <h1>{props.name}</h1>}
        </div>
    )
}