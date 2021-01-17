import React, {Component} from 'react';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        );
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/contactmanager/contact/')
            .then(response => response.json())
            .then(json => console.log(json))
    }
}

export default Test;