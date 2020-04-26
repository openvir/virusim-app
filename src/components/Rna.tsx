import React, { Component } from 'react'

import { VisualElement } from '../models/Keyframe'
import './Rna.scss'
import anime from 'animejs'

class Rna extends Component implements VisualElement {
  setStatus(status: string, remove: boolean): void {}

  getTarget() {
    return '.rnaWrapper'
  }

  idle() {
    anime({
      targets: '.rna',
      duration: 10000,
      rotate: '360',
      direction: 'forward',
      loop: true,
      easing: 'linear',
      scale: [0.8, 1, 0.8, 1, 0.8, 1, 0.8, 1],
    })
  }

  componentDidMount() {
    this.idle()
  }

  render() {
    return (
      <div className="rnaWrapper" style={{ width: '30%', height: '30%' }}>
        <svg
          className="rna"
          width="100%"
          height="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 362 362"
        >
          <g>
            <path
              fill="none"
              stroke="#F5EDD1"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="M252.175,127.048
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
	c-2.085-3.757-6.184-7.827-10.01-5.871"
            />
            <path
              fill="none"
              stroke="#F5EDD1"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="M167.6,227.849
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
	c4.002,1.054,9.639,0.893,11.028-3.128"
            />
            <path
              fill="none"
              stroke="#F5EDD1"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="M136.862,103.87
	c11.598,0.806,15.912,0.011,19.49-1.127c3.544-1.127,9.233-4.642,14.335-8.859c3.793-3.135,9.818-5.178,14.256-3.049
	c6.362,3.049,5.234,30.11-5.572,38.295c-17.703,14.042,4.99-29.006,17.161-36.306c2.235-1.341,4.957-2.459,7.39-1.522
	c1.227,0.532,2.271,1.408,3.008,2.523c3.856,5.392,3.815,13.475,0.386,19.148c-6.668,11.032-5.379,32.616-14.077,25.851
	c-5.154-5.315-3.526-9.898-1.611-13.047c1.916-3.149,7.546-8.872,10.471-11.114c8.497-6.515,13.432-9.196,24.062-10.471
	c4.031-0.483,8.297-0.096,11.813,1.933s6.118,5.922,5.838,9.973c-0.409,5.924-5.634,8.713-11.678,12.256
	c-6.37,3.735-13.787,7.676-21.017,9.182c-0.853,0.281-1.779,0.242-2.604-0.111c-1.112-0.65-1.241-2.221-0.951-3.476
	c1.313-5.683,10.43-10.913,16.119-12.198c7.11-1.76,14.459-2.355,21.759-1.764c2.522,0.167,3.828,0.062,5.946,1.441
	c0.721,0.469,2.415,3.833,0.645,5.638"
            />
          </g>
        </svg>
      </div>
    )
  }
}

export default Rna
