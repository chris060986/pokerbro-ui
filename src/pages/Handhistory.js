import React from 'react';
import axios from 'axios';

class Handhistory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      num: 0
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5984/chrissi986/_all_docs?include_docs=true")
    .then(jsonResponse => {
      console.log(jsonResponse)
      this.setState({
        isLoaded: true,
        items: jsonResponse.data.rows,
        num: jsonResponse.data.total_rows
      })
    })
  }

  render() {
    return (
      <div className='handhistory'>
        <h1>Handhistory</h1>
        {this.state.num}
        <p></p>
        <ul>
          {Object.entries(this.state.items).map(([key, value]) => (
            <li>{key}</li>
          ))}
        </ul>
      </div>
    );
  }

}

export default Handhistory;