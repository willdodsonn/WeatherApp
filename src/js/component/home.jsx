import React, { useState } from "react";
import axios from "axios";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// const url = 'https://api.openweathermap.org/data/2.5/weather?q=orlando&appid=fafc29b620c662ec7dc94a3e4b9014fa';

	return (
		<div className="home">
			<div className="container">
				<div className="top">
					<div className="location">
						<p>currentLocation</p>
					</div>
					<div className="temp">
						<h1>44°F</h1>
					</div>
					<div className="description">
						<p>Clouds</p>
					</div>
					<div className="bottom">
						<div className="feels">
							<p>43°F</p>
						</div>
						<div className="humidity">
							<p>20%</p>
						</div>
						<div className="wind">1 MPH</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
