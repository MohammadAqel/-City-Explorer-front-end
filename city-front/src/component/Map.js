import React from 'react';
import Image from 'react-bootstrap/Image';

class Map extends React.Component {
    render() {
        return (
            <div>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.lat},${this.props.lon}&zoom=10`} alt='' roundedCircle />

            </div>
        )
    }
}

export default Map;
