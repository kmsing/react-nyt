// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return {
      topic: "",
      startYear: "",
      endYear: ""
    }
  },

  // This function will respond to the user input
  handleChange: function(event) {
      // Here we create syntax to capture any change in text to the query terms (pre-search).
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
  },

  // When a user submits...
  handleClick: function(event) {
    // Set the parent to have the search term
    this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear);

  },
  // Here we describe this component's render method
  render: function() {
    return (

          <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title black text-center"><black><strong>Search</strong></h2>
        </div>


            <form>
              <div className="form-group">
                <h4 className=""><strong>Topic</strong></h4>
                <input type="text" className="form-control text-center" id="topic" onChange= {this.handleChange} required/>
                <br />

                <h4 className=""><strong>Start Year</strong></h4>
                <input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChange} required/>
                <br />

                <h4 className=""><strong>End Year</strong></h4>
                <input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChange} required/>
                <br />
                
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
              </div>

            </form>
        </div>
      </div>
    )
  }
      
});

// Export the component back for use in other files
module.exports = Form;
