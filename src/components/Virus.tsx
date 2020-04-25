import React, { Component } from 'react';
import anime from 'animejs'

import { VisualElement } from '../models/Keyframe'

class Virus extends Component implements VisualElement {

	getTarget(): string {
		return '.virusWrapper'
	}

	idle() {
		anime({
			targets: '.virus',
			duration: 10000,
			rotate: '360',
			direction: 'forward',
			loop: true,
			easing: 'linear',
			scale: [0.8, 1, 0.8, 1, 0.8, 1, 0.8, 1],

		});
	}

	move() {
		anime({
			targets: '.virusWrapper',
			top: '30%',
			left: '10%',
			translateX: 0,
			translateY: 0,
			duration: 4000,
			easing: 'easeOutElastic(1, .8)',
			loop: false
		});
	}

	moveTo() {
		anime({
			targets: '.virusWrapper',
			translateX: 0,
			translateY: 0,
			left: '50%',
			top: '50%',
			duration: 4000,
			direction: 'forward',
			easing: 'easeOutElastic(1, .8)',
			loop: false
		});
	}

	moveSpline() {
		const path = anime.path('.pathTest path');
		anime({
			targets: '.virusWrapper',
			translateX: path('x'),
			translateY: path('y'),
			left: '0%',
			top: '0%',
			duration: 40000,
			direction: 'forward',
			easing: 'easeOutElastic(1, .8)',
			loop: false,
			begin: function () {
				// TODO: stop animation
				//document.querySelector('.virusWrapper').style.top = '0';
				//document.querySelector('.virusWrapper').style.left = '0';
			},
		});
	}

	stop() {
		anime({
			targets: '.virusWrapper',
		});
	}

	componentDidMount() {
		this.idle();
		console.log('mount');
	}

	render() {
		return (
			<div className="Virus">
				<div className="virusWrapper" style={{ width: '30%', height: '30%' }}>
					<svg width="100%" height="100%" className="virus" version="1.1" xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 362 362">
						<title>virus</title>
						<circle fill="#F08271" cx="182.199" cy="181.609" r="122.759" />
						<circle fill="#EDAAA4" cx="182.199" cy="181.608" r="108.92" />
						<g>
							<path fill="#EA5D4E" d="M182.197,302.184L182.197,302.184c4.57,0,8.31-2.508,8.31,2.062v44.904
		c-0.014,4.584-3.726,8.295-8.31,8.309l0,0c-4.583-0.014-8.295-3.725-8.309-8.309v-44.904
		C173.888,299.676,177.627,302.184,182.197,302.184z"/>
							<path fill="#EA5D4E" d="M202.324,293.415c1.394,0.002,2.521,1.133,2.52,2.525c-0.002,1.33-1.036,2.43-2.364,2.514
		c-0.553,0.037-12.261,0.959-12.261,10.84c0.004,1.395-1.123,2.525-2.516,2.529s-2.524-1.123-2.528-2.516c0-0.004,0-0.008,0-0.014
		c0-11.73,11.115-15.513,16.993-15.874C202.22,293.417,202.273,293.415,202.324,293.415z"/>
							<path fill="#EA5D4E" d="M162.14,293.415c0.053,0,0.104,0.002,0.156,0.005c5.878,0.361,16.993,4.144,16.993,15.874
		c0.004,1.395-1.123,2.525-2.516,2.529s-2.525-1.123-2.528-2.516c0-0.004,0-0.008,0-0.014c0-9.971-11.758-10.809-12.258-10.84
		c-1.39-0.086-2.447-1.281-2.361-2.672C159.708,294.453,160.809,293.417,162.14,293.415L162.14,293.415z"/>
							<g>
								<path fill="#EA5D4E" d="M170.6,361.913h23.194c5.979,0,5.513-5.514,5.513-5.514s0.289-5.416-5.417-5.416s-5.841-5.842-5.841-5.842
			h-11.704c0,0-0.135,5.842-5.841,5.842s-5.417,5.416-5.417,5.416S164.621,361.913,170.6,361.913z"/>
								<path fill="#EA5D4E" d="M176.345,342.62h14.168l0.057,2.463c-0.104,1.76,1.236,3.271,2.995,3.375
			c0.108,0.008,0.217,0.008,0.325,0.004c2.185-0.104,4.311,0.723,5.852,2.273c1.375,1.549,2.12,3.557,2.089,5.627
			c0.095,2.08-0.609,4.119-1.969,5.697c-1.585,1.631-3.797,2.498-6.067,2.375H170.6c-2.271,0.123-4.483-0.744-6.067-2.375
			c-1.359-1.578-2.063-3.617-1.969-5.697c-0.031-2.07,0.714-4.078,2.088-5.627c1.541-1.551,3.668-2.377,5.853-2.273
			c1.765,0.07,3.253-1.301,3.324-3.066c0.005-0.111,0.004-0.225-0.004-0.336l0.104-2.412L176.345,342.62z M185.945,347.665h-7.495
			c-0.975,3.553-4.264,5.971-7.945,5.84c-0.787-0.072-1.57,0.174-2.175,0.684c-0.48,0.596-0.736,1.342-0.723,2.107l0.004,0.141
			l-0.011,0.176l0,0c-0.021,0.74,0.213,1.463,0.662,2.051c0.648,0.549,1.492,0.812,2.338,0.727h23.194
			c0.854,0.088,1.705-0.182,2.354-0.742c0.44-0.586,0.668-1.303,0.646-2.035l-0.015-0.174l0.01-0.172
			c0.007-0.756-0.248-1.49-0.724-2.078c-0.604-0.51-1.388-0.756-2.175-0.684C190.207,353.635,186.919,351.217,185.945,347.665z"/>
							</g>
							<path fill="#EA5D4E" d="M182.198,286.764c1.393,0,2.521,1.129,2.521,2.521v0.001v19.093c0,1.393-1.13,2.521-2.523,2.521
		c-1.392-0.002-2.52-1.129-2.521-2.521v-19.093C179.675,287.894,180.804,286.764,182.198,286.764L182.198,286.764z"/>
						</g>
						<path fill="#516E7D" d="M73.869,233.043l13.451-7.129c2.584-1.369,5.789-0.385,7.158,2.199l0,0c1.369,2.584,0.385,5.789-2.199,7.158
	l-13.451,7.129c-2.584,1.369-5.788,0.385-7.158-2.199l0,0C70.301,237.618,71.285,234.413,73.869,233.043z"/>
						<path fill="#516E7D" d="M272.185,127.944l13.451-7.128c2.584-1.37,5.788-0.385,7.158,2.199l0,0c1.369,2.584,0.385,5.789-2.199,7.158
	l-13.451,7.129c-2.584,1.369-5.789,0.385-7.158-2.199l0,0C268.616,132.519,269.601,129.314,272.185,127.944z"/>
						<path fill="#516E7D" d="M66.821,214.292l14.449-4.79c2.776-0.92,5.772,0.584,6.692,3.359l0,0c0.921,2.775-0.584,5.771-3.359,6.692
	l-14.45,4.79c-2.775,0.92-5.771-0.584-6.692-3.359l0,0C62.54,218.209,64.044,215.213,66.821,214.292z"/>
						<path fill="#516E7D" d="M279.862,143.664l14.449-4.791c2.776-0.92,5.772,0.584,6.692,3.359l0,0c0.921,2.776-0.584,5.772-3.359,6.692
	l-14.45,4.791c-2.775,0.92-5.771-0.584-6.692-3.36l0,0C275.581,147.58,277.085,144.583,279.862,143.664z"/>
						<path fill="#516E7D" d="M69.239,141.354l14.552,4.471c2.795,0.859,4.365,3.821,3.507,6.617l0,0
	c-0.859,2.795-3.821,4.365-6.617,3.506l-14.552-4.471c-2.796-0.858-4.365-3.821-3.507-6.616l0,0
	C63.481,142.066,66.443,140.496,69.239,141.354z"/>
						<path fill="#516E7D" d="M283.784,207.268l14.552,4.471c2.796,0.859,4.365,3.821,3.507,6.617l0,0
	c-0.859,2.795-3.821,4.365-6.617,3.506l-14.552-4.471c-2.795-0.859-4.365-3.82-3.507-6.616h0.001
	C278.027,207.979,280.989,206.409,283.784,207.268z"/>
						<path fill="#516E7D" d="M77.513,123.111l13.605,6.83c2.613,1.312,3.668,4.495,2.356,7.108l0,0c-1.312,2.613-4.494,3.668-7.108,2.356
	l-13.604-6.83c-2.613-1.312-3.669-4.495-2.356-7.108l0,0C71.717,122.854,74.9,121.799,77.513,123.111z"/>
						<path fill="#516E7D" d="M278.098,223.811l13.604,6.83c2.613,1.312,3.669,4.494,2.356,7.108l0,0
	c-1.312,2.613-4.494,3.669-7.107,2.356l-13.605-6.83c-2.613-1.312-3.668-4.494-2.356-7.107l0,0
	C272.302,223.554,275.484,222.5,278.098,223.811z"/>
						<path fill="#516E7D" d="M130.797,73.246l7.128,13.451c1.37,2.584,0.386,5.789-2.198,7.158l0,0c-2.584,1.369-5.789,0.385-7.158-2.199
	l-7.129-13.451c-1.369-2.584-0.385-5.789,2.199-7.158l0,0C126.223,69.677,129.428,70.662,130.797,73.246z"/>
						<path fill="#516E7D" d="M235.896,271.561l7.129,13.451c1.369,2.584,0.385,5.788-2.199,7.158l0,0
	c-2.584,1.369-5.789,0.385-7.158-2.199l-7.128-13.451c-1.37-2.584-0.385-5.789,2.198-7.158l0,0
	C231.322,267.993,234.527,268.977,235.896,271.561z"/>
						<path fill="#516E7D" d="M149.549,66.197l4.79,14.45c0.92,2.776-0.584,5.772-3.359,6.692l0,0c-2.776,0.92-5.772-0.584-6.692-3.36
	l-4.791-14.45c-0.92-2.776,0.584-5.772,3.36-6.692l0,0C145.632,61.917,148.628,63.421,149.549,66.197z"/>
						<path fill="#516E7D" d="M220.177,279.237l4.791,14.451c0.92,2.775-0.584,5.771-3.36,6.691l0,0c-2.775,0.92-5.771-0.584-6.692-3.359
	l-4.79-14.45c-0.92-2.776,0.584-5.772,3.359-6.692l0,0C216.261,274.958,219.257,276.461,220.177,279.237z"/>
						<path fill="#516E7D" d="M222.486,68.614l-4.471,14.552c-0.858,2.795-3.821,4.366-6.616,3.507l0,0
	c-2.796-0.859-4.365-3.821-3.507-6.617l4.471-14.552c0.859-2.795,3.821-4.365,6.617-3.506l0,0
	C221.775,62.856,223.345,65.819,222.486,68.614z"/>
						<path fill="#516E7D" d="M156.573,283.161l-4.471,14.552c-0.859,2.796-3.821,4.366-6.617,3.507l0,0
	c-2.795-0.859-4.365-3.821-3.506-6.617l4.471-14.552c0.858-2.796,3.821-4.365,6.616-3.507l0,0
	C155.862,277.403,157.431,280.365,156.573,283.161z"/>
						<path fill="#516E7D" d="M240.73,76.889l-6.83,13.605c-1.312,2.613-4.494,3.668-7.108,2.356l0,0
	c-2.613-1.312-3.668-4.494-2.356-7.107l6.831-13.605c1.312-2.613,4.494-3.668,7.107-2.356l0,0
	C240.987,71.094,242.042,74.276,240.73,76.889z"/>
						<path fill="#516E7D" d="M140.03,277.473l-6.831,13.605c-1.312,2.613-4.494,3.668-7.107,2.356l0,0
	c-2.613-1.312-3.669-4.494-2.356-7.108l6.83-13.604c1.312-2.613,4.494-3.669,7.108-2.356l0,0
	C140.286,271.678,141.341,274.86,140.03,277.473z"/>
						<path fill="none" stroke="#F5EDD1" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" d="M252.175,127.048
	c-12.188,0.771-23.756,5.647-32.816,13.836c-3.007,2.735-5.9,6.464-5.138,10.457c0.878,4.598,6.012,6.905,10.556,8.032
	c13.816,3.4,28.313,2.821,41.815-1.668c2.056-0.688,4.412-1.871,4.626-4.028c0.308-3.107-3.819-4.452-6.939-4.581
	c-15.567-0.636-31.124,1.492-45.947,6.287c-4.541,1.471-9.464,3.616-11.304,8.021c-1.678,4.015-0.124,8.821,2.806,12.039
	c2.93,3.218,7.001,5.133,11.053,6.72c13.048,5.102,26.963,7.615,40.971,7.4c3.823-0.061,7.85-0.394,11.015-2.538
	c0.968-0.5,1.593-1.482,1.636-2.57c-0.254-0.966-0.938-1.761-1.856-2.155c-5.505-3.223-12.119-3.961-18.498-3.877
	c-8.16,0.111-16.259,1.445-24.023,3.958c-4.869,1.577-9.786,3.758-13.018,7.727c-3.232,3.969-4.24,10.139-1.095,14.176
	c1.66,1.857,3.711,3.322,6.007,4.289c11.569,5.779,23.859,9.99,36.542,12.521c1.206,0.364,2.496,0.345,3.691-0.057
	c2.029-0.927,2.405-3.87,1.282-5.799c-1.122-1.929-3.234-3.034-5.289-3.903c-11.72-4.955-24.786-5.383-37.508-5.654
	c-4.312-0.092-10.03,0.993-10.428,5.287c-0.231,2.502,1.669,4.639,3.437,6.424c11.103,11.215,38.157,32.896,38.916,25.469
	c0.165-6.295-9.845-13.499-15.779-15.605c-8.001-2.84-11.34-4.892-19.342-7.731c-5.316-1.887-13.156-0.95-18.066,1.827
	c-6.112,3.456-6.797,12.113-4.968,18.893c3.247,11.722,11.422,21.457,22.404,26.684c1.958,0.916,4.405,1.637,6.16,0.374
	c2.746-1.975,1.063-6.306-0.982-8.999c-8.219-10.8-18.877-19.501-31.104-25.393c-3.688-1.771-8.685-3.044-11.397,0.02
	c-0.803,1.025-1.382,2.206-1.699,3.469c-2.748,8.766-3.445,18.047-2.039,27.126c0.187,2.237,0.987,4.38,2.313,6.192
	c1.452,1.695,4.11,2.555,5.985,1.343c1.968-1.271,2.204-4.021,2.114-6.361c-0.43-10.858-3.395-21.467-8.658-30.975
	c-2.085-3.757-6.184-7.827-10.01-5.871"/>
						<path fill="none" stroke="#F5EDD1" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" d="M167.6,227.849
	c-14.024,1.45-22.207,17.538-28.668,30.036c-0.991,1.917-1.862,4.379-0.562,5.98c1.873,2.309,5.696,0.295,7.989-1.824
	c11.41-10.547,17.771-19.787,25.003-33.463c2.222-4.201,4.259-9.125,2.597-13.389c-1.516-3.887-5.848-6.022-10.083-6.115
	c-4.236-0.094-8.404,1.496-12.337,3.293c-12.704,5.827-24.217,13.963-33.95,23.992c-2.662,2.744-5.286,5.815-6.08,9.496
	c-0.223,1.029-0.227,2.256,0.572,2.887c0.85,0.471,1.87,0.521,2.762,0.137c6.062-1.725,11.235-5.904,15.689-10.473
	c5.687-5.832,10.511-12.449,14.324-19.648c2.382-4.504,4.392-9.449,4.007-14.404s-3.822-9.818-8.764-10.311
	c-2.448-0.07-4.883,0.394-7.133,1.361c-12.118,4.318-23.633,10.171-34.263,17.416c-1.1,0.609-1.995,1.531-2.571,2.648
	c-0.812,2.059,0.902,4.305,2.994,4.809c2.091,0.503,4.328-0.246,6.366-1.115c11.621-4.953,21.147-13.904,30.325-22.717
	c3.111-2.987,6.425-7.76,3.816-10.932c-1.519-1.846-4.3-1.939-6.751-1.891c-15.396,0.306-49.113,4.849-44.652,10.383
	c4.117,4.352,16.043,2.121,21.656-0.658c7.568-3.748,11.31-4.729,18.878-8.476c5.029-2.49,9.942-8.664,11.546-14.004
	c1.997-6.647-3.344-12.956-9.197-16.223c-10.416-5.605-22.763-6.375-33.795-2.11c-2,0.769-4.215,2.014-4.607,4.104
	c-0.613,3.271,3.49,4.994,6.749,5.36c13.23,1.435,26.612-0.247,39.076-4.911c3.801-1.416,8.19-4.093,8.047-8.072
	c-0.118-1.246-0.504-2.452-1.132-3.535c-3.938-7.821-9.703-14.576-16.809-19.692c-1.652-1.38-3.665-2.258-5.801-2.53
	c-2.168-0.114-4.625,1.188-5.137,3.329c-0.536,2.247,1.146,4.263,2.785,5.774c7.655,7.027,16.91,12.079,26.961,14.717
	c4.002,1.054,9.639,0.893,11.028-3.128"/>
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="137.673" y1="270.366" x2="138.37" y2="263.866" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="93.538" y1="228.165" x2="98.688" y2="222.743" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="86.774" y1="213.668" x2="97.721" y2="212.112" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="152.406" y1="278.071" x2="149.265" y2="262.528" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="86.057" y1="152.899" x2="93.527" y2="153.248" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="91.278" y1="135.44" x2="102.231" y2="149.293" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="229.48" y1="270.93" x2="224.288" y2="265.549" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="278.768" y1="149.615" x2="270.999" y2="151.188" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="271.358" y1="134.796" x2="258.472" y2="148.004" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="278.446" y1="211.333" x2="263.948" y2="213.079" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="213.734" y1="276.733" x2="212.658" y2="265.727" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="273.421" y1="226.774" x2="264.435" y2="220.331" />
						<path fill="none" stroke="#F5EDD1" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" d="M136.862,103.87
	c11.598,0.806,15.912,0.011,19.49-1.127c3.544-1.127,9.233-4.642,14.335-8.859c3.793-3.135,9.818-5.178,14.256-3.049
	c6.362,3.049,5.234,30.11-5.572,38.295c-17.703,14.042,4.99-29.006,17.161-36.306c2.235-1.341,4.957-2.459,7.39-1.522
	c1.227,0.532,2.271,1.408,3.008,2.523c3.856,5.392,3.815,13.475,0.386,19.148c-6.668,11.032-5.379,32.616-14.077,25.851
	c-5.154-5.315-3.526-9.898-1.611-13.047c1.916-3.149,7.546-8.872,10.471-11.114c8.497-6.515,13.432-9.196,24.062-10.471
	c4.031-0.483,8.297-0.096,11.813,1.933s6.118,5.922,5.838,9.973c-0.409,5.924-5.634,8.713-11.678,12.256
	c-6.37,3.735-13.787,7.676-21.017,9.182c-0.853,0.281-1.779,0.242-2.604-0.111c-1.112-0.65-1.241-2.221-0.951-3.476
	c1.313-5.683,10.43-10.913,16.119-12.198c7.11-1.76,14.459-2.355,21.759-1.764c2.522,0.167,3.828,0.062,5.946,1.441
	c0.721,0.469,2.415,3.833,0.645,5.638"/>
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="135.45" y1="92.311" x2="140.083" y2="102.743" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="150.837" y1="83.857" x2="153.319" y2="101.341" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="211.188" y1="85.402" x2="208.62" y2="94.528" />
						<line fill="none" stroke="#516E7D" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="227.224" y1="90.904" x2="225.775" y2="103.226" />
						<g>
							<path fill="#EA5D4E" d="M182.238,62.25L182.238,62.25c-4.57,0-8.31,2.509-8.31-2.062V15.283c0.014-4.583,3.726-8.295,8.31-8.309
		l0,0c4.583,0.014,8.295,3.726,8.309,8.309v44.905C190.546,64.758,186.807,62.25,182.238,62.25z"/>
							<path fill="#EA5D4E" d="M162.11,71.02c-1.393-0.001-2.521-1.132-2.52-2.525c0.002-1.331,1.036-2.431,2.364-2.514
		c0.553-0.038,12.261-0.958,12.261-10.84c0.001-1.393,1.131-2.521,2.523-2.521c1.392,0.001,2.52,1.129,2.521,2.521
		c0,11.731-11.115,15.513-16.993,15.875C162.214,71.018,162.161,71.02,162.11,71.02z"/>
							<path fill="#EA5D4E" d="M202.294,71.02c-0.053,0-0.104-0.001-0.156-0.005c-5.878-0.361-16.993-4.144-16.993-15.875
		c-0.004-1.393,1.123-2.525,2.516-2.529c1.393-0.003,2.525,1.123,2.528,2.516c0,0.004,0,0.008,0,0.013
		c0,9.972,11.758,10.809,12.258,10.84c1.39,0.085,2.447,1.282,2.362,2.672C204.727,69.981,203.626,71.018,202.294,71.02z"/>
							<g>
								<path fill="#EA5D4E" d="M193.834,2.521H170.64c-5.979,0-5.513,5.513-5.513,5.513s-0.289,5.417,5.417,5.417
			s5.842,5.841,5.842,5.841h11.703c0,0,0.135-5.841,5.841-5.841c5.707,0,5.417-5.417,5.417-5.417S199.813,2.521,193.834,2.521z"/>
								<path fill="#EA5D4E" d="M188.089,21.814h-14.168l-0.057-2.464c0.104-1.759-1.236-3.27-2.995-3.375
			c-0.108-0.006-0.217-0.007-0.325-0.003c-2.185,0.104-4.311-0.722-5.852-2.274c-1.375-1.549-2.12-3.556-2.089-5.626
			c-0.095-2.081,0.609-4.12,1.969-5.698c1.585-1.631,3.797-2.497,6.068-2.375h23.193c2.271-0.122,4.483,0.744,6.067,2.375
			c1.359,1.579,2.063,3.617,1.969,5.698c0.031,2.07-0.714,4.078-2.088,5.626c-1.541,1.552-3.668,2.378-5.853,2.274
			c-1.765-0.071-3.253,1.301-3.324,3.066c-0.005,0.112-0.004,0.224,0.004,0.335l-0.104,2.413L188.089,21.814z M178.49,16.771h7.495
			c0.976-3.553,4.264-5.971,7.945-5.841c0.787,0.072,1.57-0.174,2.175-0.683c0.48-0.596,0.736-1.342,0.723-2.107l-0.004-0.142
			l0.011-0.175v0c0.021-0.739-0.213-1.464-0.662-2.052c-0.648-0.549-1.492-0.811-2.338-0.727h-23.193
			c-0.854-0.087-1.706,0.182-2.354,0.744c-0.44,0.584-0.668,1.302-0.646,2.034l0.015,0.174l-0.009,0.173
			c-0.008,0.755,0.248,1.49,0.723,2.077c0.604,0.509,1.388,0.755,2.175,0.683C174.227,10.8,177.515,13.217,178.49,16.771z"/>
							</g>
							<path fill="#EA5D4E" d="M182.237,77.669c-1.393,0-2.521-1.128-2.521-2.521c0,0,0,0,0-0.001V56.055
		c0.001-1.393,1.13-2.521,2.523-2.521c1.392,0,2.52,1.128,2.521,2.521v19.093C184.759,76.54,183.63,77.669,182.237,77.669
		C182.238,77.669,182.238,77.669,182.237,77.669z"/>
						</g>
						<g>
							<path fill="#EA5D4E" d="M58.287,294.368l27.335-27.335c3.245-3.245,8.506-3.245,11.751,0l0,0c3.244,3.245,3.244,8.506,0,11.751
		l-27.335,27.334c-3.245,3.246-8.506,3.246-11.751,0l0,0C55.042,302.874,55.042,297.612,58.287,294.368z"/>
							<path fill="#EA5D4E" d="M117.807,275.064c0.983,0.985,0.982,2.583-0.004,3.567c-0.941,0.939-2.452,0.986-3.45,0.105
		c-0.417-0.363-9.347-7.992-16.334-1.004c-0.985,0.984-2.582,0.984-3.567,0c-0.984-0.985-0.984-2.582,0-3.566l0,0
		c8.295-8.296,18.829-3.111,23.241,0.79C117.732,274.991,117.77,275.028,117.807,275.064z"/>
							<path fill="#EA5D4E" d="M89.392,246.649c0.037,0.037,0.072,0.074,0.107,0.114c3.9,4.411,9.086,14.946,0.79,23.241
		c-0.986,0.982-2.584,0.979-3.566-0.009c-0.979-0.983-0.979-2.574,0-3.559c7.051-7.051-0.67-15.956-1.002-16.333
		c-0.923-1.043-0.824-2.637,0.22-3.559C86.938,245.663,88.449,245.708,89.392,246.649L89.392,246.649z"/>
							<g>
								<path fill="#EA5D4E" d="M46.939,301.067l6.463,6.463l3.476,3.475l6.462,6.463c4.228,4.227,7.797,0,7.797,0s4.034-3.625,0-7.66
			c-4.035-4.035,0-8.262,0-8.262l-8.275-8.275c0,0-4.227,4.035-8.262,0s-7.66,0-7.66,0S42.711,296.838,46.939,301.067z"/>
								<path fill="#EA5D4E" d="M64.644,291.487l10.018,10.018l-1.702,1.783c-1.317,1.17-1.438,3.186-0.269,4.504
			c0.072,0.08,0.148,0.158,0.229,0.232c1.618,1.471,2.537,3.559,2.529,5.746c-0.123,2.066-1.016,4.012-2.501,5.455
			c-1.405,1.537-3.345,2.48-5.422,2.637c-2.273,0.033-4.45-0.92-5.97-2.611l-16.4-16.4c-1.691-1.52-2.645-3.697-2.611-5.971
			c0.155-2.076,1.099-4.016,2.637-5.421c1.442-1.485,3.389-2.378,5.455-2.501c2.188-0.008,4.275,0.911,5.746,2.529
			c1.197,1.299,3.221,1.381,4.52,0.184c0.082-0.076,0.16-0.156,0.234-0.24l1.779-1.633L64.644,291.487z M67.865,301.84l-5.3-5.299
			c-3.202,1.822-7.236,1.207-9.749-1.488c-0.505-0.607-1.233-0.987-2.021-1.055c-0.762,0.082-1.47,0.429-2.001,0.979l-0.098,0.103
			l-0.132,0.117h0.001c-0.538,0.508-0.885,1.185-0.982,1.918c0.07,0.848,0.481,1.629,1.139,2.168l16.401,16.4
			c0.541,0.664,1.334,1.076,2.189,1.137c0.726-0.102,1.394-0.447,1.896-0.98l0.112-0.133l0.129-0.117
			c0.54-0.527,0.878-1.229,0.957-1.98c-0.066-0.787-0.446-1.514-1.055-2.02C66.657,309.079,66.041,305.043,67.865,301.84z"/>
							</g>
							<path fill="#EA5D4E" d="M108.277,256.129c0.985,0.984,0.985,2.581,0.001,3.566h-0.001l-13.501,13.501
		c-0.982,0.987-2.579,0.991-3.566,0.009s-0.991-2.58-0.009-3.566c0.003-0.004,0.006-0.006,0.009-0.01l13.501-13.5
		C105.695,255.145,107.291,255.144,108.277,256.129L108.277,256.129z"/>
						</g>
						<g>
							<path fill="#EA5D4E" d="M267.061,85.65l27.335-27.334c3.245-3.245,8.506-3.245,11.751,0l0,0c3.245,3.245,3.245,8.506,0,11.751
		l-27.335,27.334c-3.244,3.245-8.506,3.245-11.751,0l0,0C263.817,94.156,263.817,88.896,267.061,85.65z"/>
							<path fill="#EA5D4E" d="M246.627,89.37c-0.983-0.986-0.982-2.583,0.004-3.566c0.941-0.94,2.452-0.987,3.45-0.106
		c0.417,0.364,9.347,7.992,16.335,1.004c0.984-0.985,2.581-0.985,3.566,0c0.984,0.985,0.984,2.582,0,3.567l0,0
		c-8.295,8.295-18.829,3.11-23.241-0.791C246.702,89.443,246.664,89.407,246.627,89.37z"/>
							<path fill="#EA5D4E" d="M275.042,117.785c-0.037-0.037-0.072-0.075-0.107-0.114c-3.9-4.411-9.086-14.945-0.79-23.241
		c0.984-0.985,2.581-0.985,3.566,0c0.984,0.985,0.984,2.582,0,3.567c-7.051,7.051,0.671,15.957,1.002,16.333
		c0.923,1.043,0.824,2.637-0.219,3.56C277.496,118.771,275.985,118.726,275.042,117.785z"/>
							<g>
								<path fill="#EA5D4E" d="M317.495,63.368l-6.463-6.462l-3.475-3.476l-6.463-6.462c-4.228-4.228-7.797,0-7.797,0
			s-4.034,3.625,0,7.66c4.035,4.035,0,8.261,0,8.261l8.276,8.275c0,0,4.226-4.035,8.261,0c4.035,4.035,7.66,0,7.66,0
			S321.723,67.595,317.495,63.368z"/>
								<path fill="#EA5D4E" d="M299.791,72.947l-10.019-10.018l1.702-1.782c1.317-1.169,1.438-3.186,0.269-4.504
			c-0.072-0.081-0.148-0.158-0.228-0.231c-1.618-1.471-2.538-3.559-2.53-5.746c0.123-2.067,1.016-4.013,2.501-5.455
			c1.405-1.539,3.345-2.482,5.422-2.638c2.273-0.032,4.45,0.92,5.97,2.612l16.4,16.4c1.692,1.52,2.645,3.696,2.611,5.97
			c-0.155,2.078-1.099,4.017-2.637,5.421c-1.442,1.486-3.389,2.378-5.455,2.501c-2.188,0.008-4.275-0.912-5.746-2.53
			c-1.197-1.298-3.221-1.38-4.52-0.183c-0.082,0.076-0.16,0.156-0.234,0.24l-1.779,1.632L299.791,72.947z M296.57,62.593l5.3,5.3
			c3.202-1.823,7.236-1.207,9.749,1.488c0.505,0.608,1.233,0.988,2.021,1.055c0.762-0.082,1.47-0.429,2.001-0.979l0.098-0.103
			l0.132-0.117l-0.001,0.001c0.538-0.508,0.885-1.186,0.983-1.919c-0.071-0.847-0.482-1.629-1.14-2.167l-16.4-16.4
			c-0.542-0.666-1.335-1.078-2.19-1.139c-0.726,0.102-1.394,0.448-1.896,0.981l-0.112,0.133l-0.129,0.116
			c-0.54,0.529-0.878,1.229-0.957,1.98c0.066,0.788,0.446,1.516,1.055,2.021C297.777,55.356,298.393,59.391,296.57,62.593z"/>
							</g>
							<path fill="#EA5D4E" d="M256.157,108.305c-0.985-0.984-0.985-2.581-0.001-3.566c0,0,0.001,0,0.001,0l13.501-13.501
		c0.984-0.985,2.581-0.985,3.566,0s0.985,2.582,0,3.567l0,0l-13.501,13.5C258.74,109.29,257.143,109.29,256.157,108.305
		C256.157,108.305,256.157,108.305,256.157,108.305z"/>
						</g>
						<g>
							<path fill="#EA5D4E" d="M62.249,182.197L62.249,182.197c0,4.57,2.509,8.31-2.062,8.31H15.283c-4.584-0.014-8.296-3.727-8.31-8.31
		l0,0c0.014-4.583,3.726-8.295,8.31-8.309h44.904C64.758,173.888,62.249,177.627,62.249,182.197z"/>
							<path fill="#EA5D4E" d="M71.02,202.325c-0.002,1.393-1.132,2.521-2.525,2.52c-1.33-0.002-2.431-1.037-2.514-2.364
		c-0.038-0.553-0.959-12.261-10.841-12.261c-1.393,0.004-2.524-1.123-2.528-2.516s1.123-2.525,2.516-2.529c0.004,0,0.009,0,0.013,0
		c11.731,0,15.514,11.116,15.875,16.994C71.018,202.22,71.02,202.273,71.02,202.325z"/>
							<path fill="#EA5D4E" d="M71.02,162.14c0,0.053-0.002,0.104-0.005,0.157c-0.361,5.877-4.144,16.993-15.875,16.993
		c-1.393,0-2.522-1.128-2.523-2.521c-0.001-1.393,1.128-2.522,2.521-2.523c0.001,0,0.002,0,0.003,0
		c9.972,0,10.81-11.757,10.841-12.257c0.085-1.39,1.281-2.448,2.672-2.362C69.982,159.708,71.018,160.808,71.02,162.14L71.02,162.14
		z"/>
							<g>
								<path fill="#EA5D4E" d="M2.522,170.6v23.193c0,5.979,5.513,5.514,5.513,5.514s5.417,0.289,5.417-5.417s5.841-5.841,5.841-5.841
			v-11.704c0,0-5.841-0.135-5.841-5.841s-5.417-5.417-5.417-5.417S2.522,164.622,2.522,170.6z"/>
								<path fill="#EA5D4E" d="M21.815,176.345v14.168l-2.464,0.057c-1.759-0.104-3.271,1.235-3.375,2.995
			c-0.006,0.107-0.007,0.217-0.003,0.324c0.104,2.186-0.722,4.312-2.273,5.853c-1.549,1.374-3.557,2.12-5.627,2.089
			c-2.081,0.094-4.119-0.609-5.698-1.969c-1.631-1.585-2.496-3.797-2.374-6.068V170.6c-0.122-2.271,0.743-4.483,2.374-6.068
			c1.579-1.359,3.617-2.063,5.698-1.969c2.07-0.031,4.078,0.714,5.627,2.088c1.552,1.542,2.378,3.667,2.273,5.852
			c-0.071,1.765,1.302,3.253,3.066,3.325c0.111,0.004,0.224,0.003,0.335-0.004l2.413,0.104L21.815,176.345z M16.771,185.944v-7.494
			c-3.554-0.975-5.971-4.264-5.842-7.946c0.072-0.787-0.174-1.57-0.683-2.175c-0.597-0.48-1.343-0.736-2.107-0.723l-0.142,0.004
			L7.822,167.6h0.001c-0.739-0.021-1.464,0.212-2.052,0.662c-0.549,0.649-0.812,1.493-0.727,2.338v23.193
			c-0.088,0.854,0.182,1.706,0.744,2.354c0.584,0.441,1.302,0.669,2.033,0.646l0.174-0.015l0.174,0.009
			c0.755,0.008,1.489-0.248,2.077-0.723c0.509-0.604,0.755-1.389,0.683-2.176C10.8,190.208,13.217,186.919,16.771,185.944z"/>
							</g>
							<path fill="#EA5D4E" d="M77.669,182.197c0.001,1.393-1.128,2.522-2.521,2.522c-0.001,0-0.001,0-0.001,0H56.055
		c-1.394,0-2.521-1.131-2.521-2.523c0-1.392,1.128-2.52,2.521-2.521h19.093C76.54,179.675,77.669,180.804,77.669,182.197
		C77.669,182.197,77.669,182.197,77.669,182.197z"/>
						</g>
						<g>
							<path fill="#EA5D4E" d="M302.185,182.237L302.185,182.237c0-4.57-2.509-8.309,2.062-8.309h44.904
		c4.584,0.013,8.296,3.726,8.31,8.309l0,0c-0.014,4.583-3.726,8.295-8.31,8.309h-44.904
		C299.676,190.546,302.185,186.807,302.185,182.237z"/>
							<path fill="#EA5D4E" d="M293.414,162.109c0.002-1.393,1.133-2.521,2.525-2.519c1.33,0.001,2.431,1.036,2.514,2.364
		c0.038,0.553,0.959,12.261,10.841,12.261c1.393,0,2.522,1.128,2.523,2.521c0.001,1.393-1.128,2.523-2.521,2.524
		c-0.001,0-0.002,0-0.003,0c-11.731,0-15.514-11.116-15.875-16.993C293.416,162.214,293.414,162.161,293.414,162.109z"/>
							<path fill="#EA5D4E" d="M293.414,202.294c0-0.053,0.002-0.104,0.005-0.157c0.361-5.877,4.144-16.992,15.875-16.992
		c1.393-0.004,2.525,1.123,2.528,2.516c0.004,1.393-1.123,2.525-2.516,2.528c-0.004,0-0.009,0-0.013,0
		c-9.972,0-10.81,11.757-10.84,12.257c-0.086,1.391-1.283,2.448-2.673,2.362C294.452,204.727,293.416,203.625,293.414,202.294
		L293.414,202.294z"/>
							<g>
								<path fill="#EA5D4E" d="M361.912,193.834V170.64c0-5.979-5.513-5.513-5.513-5.513s-5.417-0.29-5.417,5.417
			s-5.841,5.842-5.841,5.842v11.703c0,0,5.841,0.136,5.841,5.842c0,5.707,5.417,5.417,5.417,5.417S361.912,199.813,361.912,193.834z
			"/>
								<path fill="#EA5D4E" d="M342.619,188.088v-14.167l2.464-0.057c1.759,0.105,3.271-1.236,3.375-2.995
			c0.007-0.108,0.007-0.216,0.003-0.325c-0.104-2.185,0.723-4.311,2.274-5.852c1.548-1.375,3.556-2.12,5.626-2.089
			c2.081-0.094,4.119,0.61,5.698,1.969c1.631,1.585,2.496,3.797,2.374,6.068v23.194c0.122,2.271-0.743,4.482-2.374,6.067
			c-1.579,1.359-3.617,2.063-5.698,1.969c-2.07,0.031-4.078-0.714-5.626-2.089c-1.552-1.541-2.379-3.667-2.274-5.852
			c0.071-1.765-1.302-3.254-3.066-3.324c-0.111-0.006-0.224-0.004-0.335,0.004l-2.413-0.105L342.619,188.088z M347.663,178.49v7.495
			c3.554,0.975,5.971,4.264,5.842,7.945c-0.072,0.787,0.174,1.57,0.683,2.175c0.597,0.48,1.343,0.736,2.108,0.723l0.141-0.005
			l0.176,0.012h-0.001c0.739,0.021,1.464-0.213,2.052-0.662c0.549-0.648,0.812-1.492,0.727-2.338v-23.194
			c0.088-0.854-0.182-1.706-0.744-2.354c-0.584-0.44-1.302-0.668-2.033-0.646l-0.174,0.015l-0.174-0.009
			c-0.755-0.008-1.489,0.248-2.077,0.723c-0.509,0.604-0.755,1.388-0.683,2.175C353.634,174.227,351.217,177.515,347.663,178.49z"/>
							</g>
							<path fill="#EA5D4E" d="M286.765,182.237c-0.001-1.393,1.128-2.522,2.521-2.522c0.001,0,0.001,0,0.001,0h19.093
		c1.394-0.001,2.523,1.127,2.524,2.521c0,1.393-1.128,2.523-2.521,2.523c-0.001,0-0.003,0-0.004,0h-19.093
		C287.894,184.759,286.765,183.63,286.765,182.237C286.765,182.237,286.765,182.237,286.765,182.237z"/>
						</g>
						<g>
							<path fill="#EA5D4E" d="M58.316,58.288L58.316,58.288c3.245-3.245,8.506-3.245,11.751,0l27.335,27.334
		c3.245,3.245,3.245,8.506,0,11.751l0,0c-3.245,3.245-8.506,3.245-11.751,0L58.316,70.038
		C55.071,66.793,55.071,61.532,58.316,58.288z"/>
							<path fill="#EA5D4E" d="M89.37,117.807c-0.986,0.984-2.583,0.982-3.566-0.004c-0.94-0.942-0.986-2.452-0.106-3.45
		c0.364-0.417,7.992-9.347,1.004-16.334c-0.986-0.984-0.987-2.581-0.004-3.567c0.983-0.986,2.581-0.988,3.566-0.004
		c0.002,0.001,0.003,0.003,0.005,0.004c8.295,8.295,3.109,18.829-0.791,23.241C89.443,117.732,89.406,117.77,89.37,117.807z"/>
							<path fill="#EA5D4E" d="M117.785,89.392c-0.037,0.037-0.075,0.073-0.114,0.107c-4.411,3.9-14.945,9.086-23.241,0.791
		c-0.984-0.985-0.984-2.582,0-3.567c0.985-0.985,2.582-0.985,3.567,0l0,0c7.051,7.051,15.957-0.67,16.332-1.002
		c1.044-0.923,2.638-0.824,3.561,0.219C118.771,86.938,118.726,88.449,117.785,89.392L117.785,89.392z"/>
							<g>
								<path fill="#EA5D4E" d="M63.367,46.938l-6.462,6.463l-3.476,3.476l-6.463,6.462c-4.228,4.228,0,7.796,0,7.796s3.625,4.035,7.66,0
			c4.035-4.035,8.262,0,8.262,0l8.275-8.275c0,0-4.035-4.227,0-8.261c4.034-4.035,0-7.66,0-7.66S67.595,42.711,63.367,46.938z"/>
								<path fill="#EA5D4E" d="M72.948,64.644L62.929,74.662l-1.782-1.702c-1.17-1.318-3.186-1.438-4.504-0.269
			c-0.081,0.072-0.158,0.148-0.231,0.228c-1.472,1.618-3.56,2.537-5.746,2.53c-2.067-0.123-4.014-1.016-5.455-2.501
			c-1.539-1.405-2.482-3.344-2.638-5.421c-0.032-2.274,0.92-4.451,2.611-5.97l16.4-16.4c1.52-1.692,3.696-2.645,5.97-2.612
			c2.078,0.155,4.018,1.099,5.422,2.637c1.486,1.442,2.378,3.388,2.501,5.455c0.008,2.187-0.911,4.275-2.529,5.746
			c-1.299,1.197-1.381,3.221-0.184,4.519c0.076,0.083,0.156,0.161,0.24,0.234l1.633,1.78L72.948,64.644z M62.593,67.864l5.3-5.3
			c-1.823-3.202-1.207-7.236,1.487-9.749c0.608-0.505,0.988-1.233,1.056-2.021c-0.082-0.761-0.429-1.47-0.979-2.001l-0.104-0.097
			l-0.116-0.132l0.001,0c-0.509-0.538-1.186-0.885-1.919-0.982c-0.847,0.07-1.629,0.481-2.167,1.14l-16.4,16.4
			c-0.666,0.542-1.078,1.334-1.139,2.19c0.102,0.725,0.448,1.394,0.981,1.895l0.133,0.113l0.116,0.129
			c0.529,0.54,1.229,0.878,1.98,0.957c0.788-0.067,1.516-0.447,2.021-1.055C55.357,66.657,59.391,66.042,62.593,67.864z"/>
							</g>
							<path fill="#EA5D4E" d="M108.305,108.277c-0.984,0.985-2.581,0.985-3.566,0v0L91.238,94.776c-0.984-0.986-0.982-2.583,0.004-3.566
		c0.984-0.982,2.578-0.982,3.562,0l13.501,13.5C109.289,105.695,109.29,107.292,108.305,108.277L108.305,108.277z"/>
						</g>
						<g>
							<path fill="#EA5D4E" d="M267.032,267.061L267.032,267.061c3.245-3.244,8.506-3.244,11.751,0l27.335,27.335
		c3.245,3.245,3.245,8.505,0,11.751l0,0c-3.245,3.244-8.506,3.244-11.751,0l-27.335-27.335
		C263.788,275.567,263.788,270.306,267.032,267.061z"/>
							<path fill="#EA5D4E" d="M275.064,246.627c0.986-0.984,2.583-0.982,3.566,0.004c0.94,0.941,0.987,2.451,0.106,3.449
		c-0.363,0.418-7.992,9.348-1.004,16.336c0.984,0.984,0.984,2.581,0,3.566c-0.985,0.984-2.582,0.984-3.567,0
		c-8.295-8.295-3.109-18.83,0.791-23.241C274.991,246.702,275.028,246.665,275.064,246.627z"/>
							<path fill="#EA5D4E" d="M246.649,275.042c0.037-0.037,0.075-0.073,0.114-0.107c4.412-3.9,14.946-9.086,23.241-0.79
		c0.983,0.986,0.981,2.582-0.005,3.566c-0.984,0.981-2.578,0.981-3.562,0c-7.051-7.051-15.957,0.67-16.332,1.002
		c-1.044,0.922-2.638,0.824-3.56-0.219C245.662,277.497,245.708,275.985,246.649,275.042L246.649,275.042z"/>
							<g>
								<path fill="#EA5D4E" d="M301.067,317.495l6.462-6.461l3.476-3.477l6.463-6.463c4.228-4.227,0-7.796,0-7.796
			s-3.625-4.034-7.66,0.001c-4.035,4.034-8.262-0.001-8.262-0.001l-8.275,8.276c0,0,4.035,4.227,0,8.26c-4.034,4.035,0,7.66,0,7.66
			S296.839,321.723,301.067,317.495z"/>
								<path fill="#EA5D4E" d="M291.487,299.792l10.019-10.02l1.782,1.703c1.17,1.318,3.187,1.438,4.504,0.268
			c0.081-0.071,0.158-0.147,0.231-0.227c1.472-1.619,3.56-2.538,5.746-2.531c2.067,0.123,4.014,1.016,5.456,2.502
			c1.538,1.404,2.481,3.344,2.637,5.422c0.032,2.273-0.92,4.449-2.611,5.969l-16.4,16.4c-1.52,1.693-3.696,2.645-5.97,2.613
			c-2.077-0.156-4.017-1.1-5.422-2.639c-1.485-1.441-2.378-3.387-2.501-5.455c-0.008-2.188,0.911-4.273,2.529-5.746
			c1.299-1.197,1.381-3.221,0.184-4.52c-0.076-0.082-0.156-0.16-0.24-0.232l-1.633-1.781L291.487,299.792z M301.841,296.571
			l-5.3,5.299c1.823,3.201,1.207,7.236-1.487,9.748c-0.608,0.506-0.988,1.234-1.055,2.021c0.081,0.762,0.428,1.469,0.979,2.002
			l0.104,0.096l0.116,0.133l-0.001-0.002c0.509,0.539,1.186,0.887,1.919,0.984c0.847-0.072,1.629-0.482,2.167-1.141l16.4-16.4
			c0.666-0.541,1.078-1.334,1.139-2.189c-0.102-0.726-0.448-1.395-0.981-1.896l-0.133-0.112l-0.116-0.129
			c-0.529-0.539-1.229-0.879-1.98-0.957c-0.787,0.066-1.516,0.446-2.021,1.055C309.077,297.778,305.043,298.393,301.841,296.571z"/>
							</g>
							<path fill="#EA5D4E" d="M256.129,256.157c0.984-0.984,2.581-0.984,3.566,0c0,0,0,0,0.001,0l13.5,13.502
		c0.985,0.984,0.985,2.581,0,3.566c-0.984,0.984-2.581,0.984-3.566,0l0,0l-13.501-13.501
		C255.145,258.739,255.144,257.143,256.129,256.157C256.129,256.158,256.129,256.158,256.129,256.157z"/>
						</g>
					</svg>
				</div>
			</div>
		)
	}
}

export default Virus
