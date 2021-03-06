import React, { Component } from "react";

class MiniFormik extends Component {
  state = {
    values: this.props.initialValues || {},
    touched: {},
    errors: {},
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    event.presist();
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };
  handleBlur = (event) => {
    const target = event.target;
    const name = target.name;
    event.presist();
    this.setState((prevState) => ({
      touched: {
        ...prevState.touched,
        [name]: true,
      },
    }));
  };
  handleSubmit=(e)=>{
      e.preventDefault();
      //validate
      this.props.onSubmit(this.state.values);
  }

  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      handleBlur:this.handleBlur,
      handleSubmit:this.handleSubmit
    });
  }
}
class Reservation extends Component {
  render() {
    return (
      <MiniFormik
        initialValues={{
          isGoing: true,
          numberOfGuests: 2,
        }}
        onSubmit={values=>alert(JSON.stringify(values, null,2))}
      >
        {(props) => {
          const { values, errors, touched, handleBlur, handleChange } = props;
          return (
            <form onSubmit={handleSubmit}>
              <input
                name="isGoing"
                id=""
                className="checkbox"
                checked={values.isGoing}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label>Is going</label>
              <br />
              <label>Number of Guests</label>
              <input
                type="number"
                name="numberOfGuests"
                id=""
                className="checkbox"
                value={values.numberOfGuests}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </form>
          );
        }}
      </MiniFormik>
    );
  }
}

export default Reservation;
