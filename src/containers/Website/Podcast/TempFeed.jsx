import React, { Component } from 'react'
// import './App.css'

class Feed extends Component {
    state = {
        feed: null,
    }

    componentDidMount() {
        fetch('/.netlify/functions/server/api/rss')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then(data =>
                this.setState({
                    feed: data.feed,
                })
            )
            .catch(err => alert(err))
    }

    render() {
        const { feed } = this.state
        return (
            <React.Fragment>
                {feed &&
                    feed.items.map(entry => (
                        <p key={entry.id}>{entry.title}</p>
                    ))}
            </React.Fragment>
        )
    }
}

export default Feed