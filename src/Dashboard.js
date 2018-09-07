import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {
  render(props) {
    return (
      <main className='animal-container'>
        <section className='cat container'>
          <h2>Name: {this.props.catToAdopt.name}</h2>
          <img src={this.props.catToAdopt.imageURL} alt={this.props.catToAdopt.imageDescription}/>
          <dl>
            <dt>Age: {this.props.catToAdopt.age}</dt>
            <dt>Breed: {this.props.catToAdopt.breed}</dt>
            <dt>Story: {this.props.catToAdopt.story}</dt>
          </dl>
          <button name='adopt-cat' id='adopt-cat' className='adopt cat'>Adopt</button>
        </section>
        <section className='dog container'>
          <h2>Name: {this.props.dogToAdopt.name}</h2>
          <img src={this.props.dogToAdopt.imageURL} alt={this.props.dogToAdopt.imageDescription}/>
          <dl>
            <dt>Age: {this.props.dogToAdopt.age}</dt>
            <dt>Breed: {this.props.dogToAdopt.breed}</dt>
            <dt>Story: {this.props.dogToAdopt.story}</dt>
          </dl>
          <button name='adopt-dog' id='adopt-dog' className='adopt dog'>Adopt</button>
        </section>
      </main>
    );
  }
}


export default Dashboard;
