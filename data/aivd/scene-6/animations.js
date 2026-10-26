import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';
import easings from '@/static/data/easings';

export default [
	{
		name: 'text-cloud-1',
		text: 'ONZE DEUR STAAT NU VOOR JE OPEN. ALS AIVD ZIJN WE NAMELIJK REGELMATIG OP ZOEK NAAR MENSEN ZOALS JIJ...',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 235,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 265,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-2',
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ DE AIVD?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'aivd',
		link: 'https://www.werkenvoornederland.nl/organisaties/algemene-inlichtingen-en-veiligheidsdienst?utm_source=tweakersgame&utm_medium=game&utm_campaign=2022_tweakersgame&utm_term=tweakers_aivd',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/yoofgKK6wm4LdSzzd0MlfgYsk6rWLfmnEx4l6foIgl85dCZcYazPn9R5mi9dKGri/BFpp83wm2BvXgQM',
		positionY: 45,
		positionX: 270,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 185,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-3',
		text: 'BEKIJK ALLE CHALLENGES',
		hasTextCloud: 'vacancy-big',
		hasColor: '-green',
		positionY: 40,
		positionX: 40,
		fontSize: 10,
		lineHeight: 20,
		fill: '#298941',
		wordWrap: true,
		wordWrapWidth: 105,
		align: 'center',
		interaction: {
			type: types.TOGGLE_MENU
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
