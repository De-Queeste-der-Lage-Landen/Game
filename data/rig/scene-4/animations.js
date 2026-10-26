import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'TOPPER, JE HEBT GEWONNEN! WE KUNNEN MENSEN ZOALS JIJ MISSCHIEN NOG WEL GOED GEBRUIKEN; HIER ZIJN ONZE VACATURES TE VINDEN. ZIEN WE JE SNEL WEER?',
		hasTextCloud: 'normal',
		positionY: 85,
		positionX: 257,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 304,
		nextIsVacancy: true,
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
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ HET RIG?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'rig',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/B-cWMOLZm7Va-zSEP3TyX4iss7QZl70exFhcUudXkP3pTK89D6HH2GtPDHoZKK4K/cmJNyX349LKiGIh',
		link: 'https://www.werkenvoornederland.nl/vakgebied/icters-bij-de-rijksoverheid/rijks-ict-gilde?utm_source=tweakers&utm_medium=referral&utm_campaign=23q2_i-amc&utm_term=think_rig&utm_content=game',
		positionY: 65,
		positionX: 305,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 220,
		align: 'center',
		hideElOnStart: true,
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
