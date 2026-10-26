import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'THANKS HELD! DOOR JOU KAN DE RECHTER WEER BIJ DE BENODIGDE INFORMATIE EN DE RECHTSZAAK KAN WEER DOORGAAN.',
		hasTextCloud: 'normal',
		positionY: 75,
		positionX: 365,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 260,
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
		name: 'text-cloud-3',
		text: 'HEB JE WEL EENS NAGEDACHT OVER EEN CARRIÈRE ALS HELD?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'ivo',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/oDaRuOUXACtGCd1fFqD6nNB9EV-JaIeW70eWLVtv0dPrFUOnPX3eM8U9__hoZs7i/rhxPV5qvPgHkgkA',
		link: 'https://www.werkenbijderechtspraak.nl/ivo-rechtspraak?utm_source=tweakers&utm_medium=referral&utm_campaign=23q2_i-amc&utm_term=think_ivo-rechtspraak&utm_content=game',
		positionY: 30,
		positionX: 505,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 250,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-5',
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
