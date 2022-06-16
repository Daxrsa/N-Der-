import "../styles/Components.scss";

export default function Card(props: any) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <img src={props.img} alt={props.title} />
        </div>
    )
}