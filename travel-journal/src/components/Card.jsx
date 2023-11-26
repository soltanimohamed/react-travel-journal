/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
export default function Card(props){
    return(
        <div className="card">
            <img src={props.destination.imageUrl} className="card-image"></img>
            <div className="card-details">
                <div className="location-container">
                    <img className="locator-icon" src="src/assets/locator.png" alt="locator icon" />
                    <h4 className="country">{props.destination.location}</h4>
                    <a className="map-link" href={props.destination.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.destination.title}</h2>
                <p className="date">{props.destination.startDate} - {props.destination.endDate}</p>
                <p className="description">{props.destination.description}</p>
            </div>
        </div>
    )
}