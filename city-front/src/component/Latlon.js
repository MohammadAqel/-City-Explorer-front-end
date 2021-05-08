import React from 'react';

class Latlon extends React.Component {
    render() {
        return (
            <div>
                <p> {this.props.location} {this.props.lat} , {this.props.lon} </p>
            </div>
        )
    }
}

export default Latlon;
