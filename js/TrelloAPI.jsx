const Trello = require('trello')

const TrelloAPI = () => {
  authenticationSuccess = () => {
    console.log('Successful authentication')
  },
  authenticationFailure = () => {
    console.log('Failed authentication')
  },
  authorize = () => {
    Trello.authorize({
      type: 'popup',
      name: 'Getting Started Application',
      scope: {
        read: 'true',
        write: 'true' },
      expiration: 'never',
      success: authenticationSuccess,
      error: authenticationFailure
    })
  }
}

module.exports = TrelloAPI