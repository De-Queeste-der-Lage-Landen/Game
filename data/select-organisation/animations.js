import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';
import easings from '@/static/data/easings';

export default [
	{
		name: 'wave-1',
		img: 'wave-1',
		positionY: 45,
		positionX: 13,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 45,
			duration: 350
		}
	},
	{
		name: 'wave-2',
		img: 'wave-2',
		positionY: 304,
		positionX: 98,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 304,
			duration: 350,
			offset: '-=400'
		}
	},
	{
		name: 'wave-3',
		img: 'wave-2',
		scalesToWidth: true,
		positionY: 97,
		positionX: 526,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 97,
			duration: 350,
			offset: '-=350'
		}
	},
	{
		name: 'wave-4',
		img: 'wave-2',
		scalesToWidth: true,
		positionY: 224,
		positionX: 479,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 224,
			duration: 350,
			offset: '-=300'
		}
	},
	{
		name: 'wave-5',
		img: 'wave-3',
		positionY: 292,
		positionX: 418,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 292,
			duration: 350,
			offset: '-=150'
		}
	},
	{
		name: 'wave-7',
		img: 'wave-1',
		positionY: 260,
		positionX: 754,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 260,
			duration: 350,
			offset: '-=400'
		}
	},
	{
		name: 'wave-8',
		img: 'wave-1',
		positionY: 40,
		positionX: 795,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 40,
			duration: 350,
			offset: '-=100'
		}
	},
	{
		name: 'map',
		img: 'map',
		scalesToHeight: true,
		positionY: 30,
		positionX: -10,
		originalWidth: 516,
		originalHeight: 377,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			duration: 750,
			endPositionY: 20,
			offset: '-=400'
		}
	},
	{
		name: 'terms-transparent-bg',
		img: 'terms-transparent-bg',
		positionY: 350,
		positionX: 0,
		width: 530,
		posScaleToWidth: true,
		posScaleToHeight: true,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			duration: 750,
			endPositionY: 300,
			offset: '-=50'
		}
	},
	{
		name: 'organisation-bg',
		img: 'organisation-bg',
		positionY: 0,
		positionX: 800,
		width: 320,
		posScaleToWidth: true,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionXPercentage: true,
			endPositionX: 530,
			duration: 500,
			offset: '-=1950'
		}
	},
	{
		name: 'dot-rivm',
		img: 'dot-rivm',
		positionY: 40, // Position for RIVM
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'rivm'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 32,
			offset: '-=1350',
			duration: 250
		}
	},
	{
		name: 'logo-rivm',
		img: 'logo-rivm',
		positionY: 35,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'rivm'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 25,
			offset: '-=1250',
			duration: 250
		}
	},
	{
		name: 'dot-jio',
		img: 'dot-jio',
		positionY: 72,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'jio'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 64,
			offset: '-=1150',
			duration: 250
		}
	},
	{
		name: 'logo-jio',
		img: 'logo-jio',
		positionY: 67,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'jio'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 57,
			offset: '-=1050',
			duration: 250
		}
	},
	{
		name: 'dot-dictu',
		img: 'dot-dictu',
		positionY: 105,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'dictu'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 96,
			offset: '-=950',
			duration: 250
		}
	},
	{
		name: 'logo-dictu',
		img: 'logo-dictu',
		positionY: 100,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'dictu'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 90,
			offset: '-=850',
			duration: 250
		}
	},
	{
		name: 'dot-rws',
		img: 'dot-rws',
		positionY: 140,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'rws'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 131,
			offset: '-=750',
			duration: 250
		}
	},
	{
		name: 'logo-rws',
		img: 'logo-rws',
		positionY: 135,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'rws'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 125,
			offset: '-=650',
			duration: 250
		}
	},
	{
		name: 'dot-rig',
		img: 'dot-rig',
		positionY: 175,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'rig'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 166,
			offset: '-=550',
			duration: 250
		}
	},
	{
		name: 'logo-rig',
		img: 'logo-rig',
		positionY: 170,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'rig'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 160,
			offset: '-=450',
			duration: 250
		}
	},
	{
		name: 'dot-ssc-ict',
		img: 'dot-ssc-ict',
		positionY: 210,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'ssc-ict'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 201,
			offset: '-=350',
			duration: 250
		}
	},
	{
		name: 'logo-ssc-ict',
		img: 'logo-ssc-ict',
		positionY: 205,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'ssc-ict'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 195,
			offset: '-=250',
			duration: 250
		}
	},
	{
		name: 'dot-duo-ict',
		img: 'dot-duo',
		positionY: 245,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'duo'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 236,
			offset: '-=150',
			duration: 250
		}
	},
	{
		name: 'logo-duo-ict',
		img: 'logo-duo-ict',
		positionY: 240,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'duo'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 230,
			offset: '-=50',
			duration: 250
		}
	},
	{
		name: 'dot-ivo',
		img: 'dot-ivo',
		positionY: 280,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'ivo'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 271,
			offset: '-=50',
			duration: 250
		}
	},
	{
		name: 'logo-ivo',
		img: 'logo-ivo',
		positionY: 275,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'ivo'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 265,
			offset: '-=50',
			duration: 250
		}
	},
	{
		name: 'dot-aivd',
		img: 'dot-aivd',
		positionY: 40, // Position for aivd
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'aivd'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 35,
			offset: '-=1350',
			duration: 250
		}
	},
	{
		name: 'logo-aivd',
		img: 'logo-aivd',
		positionY: 35,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'aivd'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 25,
			offset: '-=1250',
			duration: 250
		}
	},
	{
		name: 'dot-logius',
		img: 'dot-logius',
		positionY: 72,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'logius'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 67,
			offset: '-=1150',
			duration: 250
		}
	},
	{
		name: 'logo-logius',
		img: 'logo-logius',
		positionY: 67,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'logius'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 57,
			offset: '-=1050',
			duration: 250
		}
	},
	{
		name: 'dot-knmi',
		img: 'dot-knmi',
		positionY: 105,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'knmi'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 100,
			offset: '-=950',
			duration: 250
		}
	},
	{
		name: 'logo-knmi',
		img: 'logo-knmi',
		positionY: 100,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'knmi'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 90,
			offset: '-=850',
			duration: 250
		}
	},
	{
		name: 'dot-justid',
		img: 'dot-justid',
		positionY: 140,
		positionX: 552,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'justid'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 136,
			offset: '-=750',
			duration: 250
		}
	},
	{
		name: 'logo-justid',
		img: 'logo-justid',
		positionY: 135,
		positionX: 587,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.SET_ORGANISATION,
			index: 'justid'
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 125,
			offset: '-=650',
			duration: 250
		}
	},
	{
		name: 'prev-page',
		img: 'prev-page',
		positionY: 230,
		positionX: 560,
		posScaleToHeight: true,
		showOnPage: 2,
		interaction: {
			type: types.GO_TO_PAGE,
			pageId: 1
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 250,
			offset: '-=50',
			duration: 250
		}
	},
	{
		name: 'next-page',
		img: 'next-page',
		positionY: 223,
		positionX: 825,
		posScaleToHeight: true,
		showOnPage: 1,
		interaction: {
			type: types.GO_TO_PAGE,
			pageId: 2
		},
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_CIRC,
			endPositionY: 240,
			offset: '-=50',
			duration: 250
		}
	},
	{
		name: 'marker-aivd',
		img: 'marker-aivd',
		positionY: 120,
		positionX: 120,
		posRelativeTo: 'map',
		showOnPage: 2,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'aivd'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=1250',
			duration: 250
		}
	},
	{
		name: 'marker-rig',
		img: 'marker-rig',
		positionY: 120,
		positionX: 140,
		posRelativeTo: 'map',
		showOnPage: 1,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'rig'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=1150',
			duration: 250
		}
	},
	{
		name: 'marker-dictu',
		img: 'marker-dictu',
		positionY: 135,
		positionX: 95,
		posRelativeTo: 'map',
		showOnPage: 1,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'dictu'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=1050',
			duration: 250
		}
	},
	{
		name: 'marker-logius',
		img: 'marker-logius',
		positionY: 140,
		positionX: 105,
		posRelativeTo: 'map',
		showOnPage: 2,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'logius'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=1050',
			duration: 250
		}
	},
	{
		name: 'marker-duo',
		img: 'marker-duo',
		positionY: -20,
		positionX: 430,
		posRelativeTo: 'map',
		showOnPage: 1,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'duo'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=950',
			duration: 250
		}
	},
	{
		name: 'marker-ssc-ict',
		img: 'marker-ssc-ict',
		positionY: 145,
		positionX: 113,
		posRelativeTo: 'map',
		showOnPage: 1,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'ssc-ict'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=850',
			duration: 250
		}
	},
	{
		name: 'marker-jio',
		img: 'marker-jio',
		positionY: 155,
		positionX: 128,
		posRelativeTo: 'map',
		showOnPage: 1,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'ssc-ict'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=850',
			duration: 250
		}
	},
	{
		name: 'marker-rws',
		img: 'marker-rws',
		positionY: 155,
		positionX: 135,
		posRelativeTo: 'map',
		showOnPage: 1,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'rws'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=1250',
			duration: 250
		}
	},
	{
		name: 'marker-rivm',
		img: 'marker-rivm',
		positionY: 125,
		positionX: 205,
		posRelativeTo: 'map',
		showOnPage: 1,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'rivm'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=1250',
			duration: 250
		}
	},
	{
		name: 'marker-ivo',
		img: 'marker-ivo',
		positionY: 132,
		positionX: 220,
		posRelativeTo: 'map',
		showOnPage: 1,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'ivo'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=750',
			duration: 250
		}
	},
	{
		name: 'marker-knmi',
		img: 'marker-knmi',
		positionY: 130,
		positionX: 240,
		posRelativeTo: 'map',
		showOnPage: 2,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'knmi'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=650',
			duration: 250
		}
	},
	{
		name: 'marker-justid',
		img: 'marker-justid',
		positionY: 90,
		positionX: 413,
		posRelativeTo: 'map',
		showOnPage: 2,
		// interaction: {
		// 	type: types.SET_ORGANISATION,
		// 	index: 'justid'
		// },
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			offset: '-=550',
			duration: 250
		}
	},
	// {
	// 	name: 'terms-text',
	// 	img: 'terms-text',
	// 	positionY: 390,
	// 	positionX: 30,
	// 	posScaleToHeight: true,
	// 	link: 'https://www.dequeestederlagelanden.nl/actievoorwaarden',
	// 	animation: {
	// 		type: animationTypes.FADE_IN,
	// 		easing: easings.EASE_OUT_EXPO,
	// 		duration: 500,
	// 		endPositionY: 325,
	// 		offset: '-=750'
	// 	}
	// },
	{
		name: 'privacy-text',
		img: 'privacy-text',
		positionY: 390,
		positionX: 30,
		posScaleToHeight: true,
		link: 'https://www.dequeestederlagelanden.nl/privacy',
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			duration: 500,
			endPositionY: 325,
			offset: '-=750'
		}
	},
	{
		name: 'contact-text',
		img: 'contact-text',
		positionY: 390,
		positionX: 125,
		posScaleToHeight: true,
		link: 'https://www.dequeestederlagelanden.nl/contact',
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			duration: 500,
			endPositionY: 325,
			offset: '-=750'
		}
	}
];
