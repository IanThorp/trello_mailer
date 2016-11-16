const React = require('react')

const TrelloInputs = (props) => {
  return (
    <div className='trello-inputs'>
      <p className='api-key'>{props.apiKey}</p>
    </div>
  )
}

const string = React.PropTypes.string

TrelloInputs.propTypes = {
  apiKey: string.isRequired
}

module.exports = TrelloInputs
