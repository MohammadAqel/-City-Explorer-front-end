import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class CitySearch extends React.Component {
    render() {
        console.log('test');

        return (
            <Form onSubmit={this.props.location}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City Name</Form.Label>
                    <Form.Control onChange={this.props.update} type="text" placeholder="Enter City Name" />
                    <Button variant="primary" type="submit">Explore!</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default CitySearch;
