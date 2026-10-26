import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'JE SCORE IS {score}! OM KANS TE MAKEN OP DE HOOFDPRIJS MOET JE HOGER SCOREN DAN 1250.',
		hasTextCloud: 'normal',
		hasScore: true,
		hasPlayAgainBtn: true,
		organisation: 'dictu',
		goToGame: 'tetris',
		positionY: 40,
		positionX: 40,
		fontSize: 10,
		lineHeight: 20,
		hasColor: '-green',
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 180,
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
		text: 'DANK VOOR JE HULP! ONDERNEMERS KUNNEN NU SUBSIDIE AANVRAGEN VOOR INNOVATIEPROJECTEN. MET AI WORDT EEN VOORSELECTIE GEMAAKT OP BASIS VAN HUN OPGEVOERDE DATA.',
		hasTextCloud: 'normal',
		positionY: 85,
		positionX: 440,
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
		name: 'text-cloud-3',
		text: 'DIT HELPT HET SUBSIDIEPROCES TE VERSNELLEN!',
		hasTextCloud: 'normal',
		positionY: 125,
		positionX: 515,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 164,
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
		name: 'text-cloud-4',
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ DICTU?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'dictu',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/Fy0MVE4i9-rRtYXnwdSSjlwcZH4EAkCzzCbSr9_Q0qe_GVcE7vdsgCrGFsP6TeTw/An42gMUMDYNErju',
		link: 'https://www.dictu.nl/werken-bij?utm_source=tweakers&utm_medium=tweakers&utm_campaign=2404_lead_amc-ict&utm_term=think',
		positionY: 45,
		positionX: 490,
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
