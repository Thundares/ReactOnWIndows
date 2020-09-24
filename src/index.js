import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: 'I dont wanna miss a thing',
            Content: "I could stay awake just to hear you breathing"
        };
    }

    render(props) {
        return (
            <div>
                <h1>Title: {this.state.Title}</h1>
                <p>Content: {this.state.Content}</p>
                <p>Props: {this.props.Escrita}</p>
            </div>
        );
    }
}
ReactDOM.render (
    <Text Escrita='Testing, Testing 2' />,
    document.getElementById('root')
);