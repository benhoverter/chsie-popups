import React, {Component} from 'react';


class TestFetcher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      data: {},
      error: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  getUrl() {
    const baseURL = window.location.origin
    const apiURL = baseURL.indexOf( 'localhost' ) > -1
      ? baseURL + '/dev/wp-json/chsie_popups/v1/popups'
      : baseURL + '/wp-json/chsie_popups/v1/popups'

    return apiURL
  }

  fetchData() {
    fetch( this.getUrl() )
      .then( response => response.json() )
      .then( json => {
        this.setState({ data: json, isLoading: false })
        console.log( "Fetched object is", json )
      })
      .catch( error => this.setState({ error, isLoading: false }) )
  }

  loadingMsg = (
    <p>Loading...</p>
  )

  errorMsg = error => (
    <div>
      <p>There was an error:</p>
      <p>{error.message}</p>
    </div>
  )

  render() {
    const {isLoading, data, error} = this.state
    return (
      <div className="fetch-log" >
        <h5>Fetched:</h5>
        <pre id="fetch-log">
          { !isLoading ? JSON.stringify( data ) : this.loadingMsg }
          { error ? this.errorMsg : null }
        </pre>
      </div>
    )
  }
}



export default TestFetcher;
