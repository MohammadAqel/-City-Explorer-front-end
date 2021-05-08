import React from 'react'

class Weather extends React.Component {
    render() {
        return (
            this.props.data.map(i => {
                return (
                    <div>
                <p>{i.description} {i.date}</p>
                    </div>
                )
            })
          
        )
    }
}

export default Weather;
