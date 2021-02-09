import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
  
    
    return (
      <section id="portfolio">

      
        
          <div class="container">
      <h2>Projects:</h2>
      <div class="row">
        <div class="col-sm-6">
          <h3>NBA-Team Generator</h3>
          <a href="https://fast-dawn-07792.herokuapp.com/ " target="blank">
            <img src="images/NBA Team Selector.jpg" alt="NBA" /></a>
            <br/>
             <a href="https://fast-dawn-07792.herokuapp.com/ " target="blank">AppToGenerate <i class="fas fa-globe"></i></a>
        </div>

        <div class="col-sm-6">
          <h3>Weather-Dash</h3>
          <a href="https://islam4049.github.io/weatherdashboard/" target="blank">
            <img src="images/weather.png" alt="weather-dash" /></a>
            <br/>
              <a href="https://islam4049.github.io/weatherdashboard/" target="blank">AppToGenerate <i class="fas fa-globe"></i></a>
        </div>

      </div> 

      <div class="row">
        <div class="col-sm-6">
          <h3>Nasa-Api-Images</h3>
          <a href="https://islam4049.github.io/Project-1/" target="blank">
            <img src="images/nasaimagesapi.png" alt="NasaApiImages" /></a>
            <br/>
             <a href="https://islam4049.github.io/Project-1/" target="blank">AppToGenerate <i class="fas fa-globe"></i></a>
        </div>

        <div class="col-sm-6">
          <h3>Note-Taker</h3>
          <a href="https://express-note-take.herokuapp.com/" target="blank">
            <img src="images/note-taker.png" alt="Note-taker" /></a>
            <br/>
            <a href="https://express-note-take.herokuapp.com/"  target="blank">AppToGenerate <i class="fas fa-globe"></i></a>
        </div>

      </div>
    </div>
    </section>
    
  
  
        );
  }
}