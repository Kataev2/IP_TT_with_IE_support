import React from 'react';
import './Ticket.css';

function Ticket({props}) {

    function getStops(stops) {  
        let stopString = null;

        switch(stops) {
            case 0:
                stopString = 'Без пересадок';
                break;
            case 1:
                stopString = `${stops} пересадка`;
                break;
            case 2:
            case 3:
                stopString = `${stops} пересадки`;
                break;
            default: 
                break;
        }

        return stopString;
    }

    function getAirCarrierImg(carrier) {
        let imgSrc = null

        switch (carrier) {
            case 'TK':
                imgSrc = 'https://avatars.mds.yandex.net/get-entity_search/5499684/551826322/S122x122Fit_2x';
                break;
            case 'S7':
                imgSrc = 'https://avatars.mds.yandex.net/get-entity_search/118114/260019376/S168xU_2x';
                break;
            case 'SU':
                imgSrc = 'https://avatars.mds.yandex.net/get-entity_search/9707519/687376924/S122x122Fit_2x';
                break;
            case 'BA':
                imgSrc = 'https://avatars.mds.yandex.net/get-entity_search/5499684/551836688/S122x122Fit_2x';
                break;
            default: 
                break;
        }

        return imgSrc
    }

    return (
        <div className='ticket'>
            <div className="ticket__side-content">
                <div className="ticket__carrier">
                    <img src={getAirCarrierImg(props.carrier)} alt={props.carrier} />
                </div>
                <div className="ticket__buy-button-wrapper">
                    <button className='ticket__buy-button'>
                        Купить за {props.price}
                    </button>
                </div>
            </div>

            <div className="ticket__content">
                <div className="ticket__info-container">
                    <div className="ticket__time">{props.arrival_time}</div>
                    <div className="ticket__place">{props.origin_name}</div>
                    <div className="ticket__date">{props.arrival_date}</div>
                </div>

                <div className="ticket__stops">
                    <div className='stops'>
                        <div className='stops__title'>{getStops(props.stops)}</div>
                        <div className='stops__underline'></div>
                    </div>
                </div>

                <div className="ticket__info-container ticket__info-container_align-right">
                    <div className="ticket__time">{props.departure_time}</div>
                    <div className="ticket__place">{props.destination_name}</div>
                    <div className="ticket__date">{props.departure_date}</div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;