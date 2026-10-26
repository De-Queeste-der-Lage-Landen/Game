import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	// {
	// 	name: 'text-cloud-1',
	// 	text: 'JE SCORE IS {score}! JE HEBT DUS GENOEG PUNTEN GESCOORD OM KANS TE MAKEN OP DE HOOFDPRIJS!',
	// 	hasTextCloud: 'normal',
	// 	hasScore: true,
	// 	hasCompetePriceBtn: true,
	// 	competeLink:
	// 		'https://docs.google.com/forms/d/e/1FAIpQLScpMDQWBUBzw_3lcAZS_aYJqxz16oCkZAEea-wfSXYiEj4pNQ/viewform',
	// 	organisation: 'jio',
	// 	goToGame: 'pacman',
	// 	positionY: 40,
	// 	positionX: 40,
	// 	fontSize: 10,
	// 	lineHeight: 20,
	// 	hasColor: '-green',
	// 	fill: '#000000',
	// 	wordWrap: true,
	// 	wordWrapWidth: 180,
	// 	align: 'center',
	// 	interaction: {
	// 		type: types.GO_TO_NEXT_ANIMATION_ELEMENT
	// 	},
	// 	animation: {
	// 		type: animationTypes.FADE_IN,
	// 		pauseAfter: true,
	// 		reverseAnimation: true
	// 	}
	// },
	{
		name: 'text-cloud-2',
		text: 'BEDANKT VOOR JE HULP! DANKZIJ JOU ZITTEN ALLE GEVANGENEN WEER NETJES IN HUN CEL!',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 590,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 204,
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
		name: 'text-cloud-3',
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ DE JUSTITIËLE ICT ORGANISATIE?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'jio',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/YyWdIrvT5HZnwRfcNuSehRNeiLB2it6usAOoHf22mg6KBSxWpezGRy8EuRswmWEK/Rnum4Yet77FBzGI',
		link: 'https://www.justitieleictorganisatie.nl/werken-bij-de-justitiele-ict-organisatie?utm_source=tweakers&utm_medium=tweakers&utm_campaign=2405_lead_amc-ict&utm_term=think',
		positionY: 25,
		positionX: 590,
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
		name: 'text-cloud-4',
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
