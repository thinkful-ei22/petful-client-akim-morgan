import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Pet from "./components/Pet";
import { fetchCat, deleteCat } from "./actions/cat";
import { fetchDog, deleteDog } from "./actions/dog";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCat();
    this.props.fetchDog();
  }

  adoptPet(str) {
    if (str === "cat") {
      this.props.deleteCat();
    } else {
      this.props.deleteDog();
    }
  }
  render(props) {
    return (
      <main className="animal-container">
        <Pet
          catToAdopt={this.props.currentCat}
          onAdoptPet={str => {
            this.adoptPet(str);
          }}
        />
        <Pet
          dogToAdopt={this.props.currentDog}
          onAdoptPet={str => {
            this.adoptPet(str);
          }}
        />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  currentDog: state.dog.dog,
  currentCat: state.cat.cat
});
export default connect(
  mapStateToProps,
  { fetchCat, deleteCat, fetchDog, deleteDog }
)(Dashboard);
