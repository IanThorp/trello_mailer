const React = require('react')
const TrelloInputs = require('./TrelloInputs')
const TrelloAPI = require('./TrelloAPI')

const App = React.createClass({
  componentDidMount() {
    TrelloAPI.authorize()
  },
  render () {
    return (
      <div className='landing'>
        <header className='header'>
          <h1 className='branding'>
            Trello Mailer
          </h1>
        </header>
        <TrelloInputs apiKey='055ba968498c6098115ecad8fc5826fc' />
      </div>
    )
  }
})

module.exports = App
