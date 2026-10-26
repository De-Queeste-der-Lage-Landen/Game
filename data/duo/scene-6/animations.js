import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'JA PERFECT, DANK VOOR JE SNELLE ACTIE HELD!',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 415,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 144,
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
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ DUO?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'duo',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/lZJ4R6hkbOkRkHrVKiV0xjLUioDwfNC-lW3gjo-4rAc-jZoG48rUrAONfIRvWLDE/7k3D8gnSX3gDQm8',
		link: 'https://www.werkenvoornederland.nl/organisaties/ministerie-van-onderwijs-cultuur-en-wetenschap/dienst-uitvoering-onderwijs?utm_source=tweakers&utm_medium=referral&utm_campaign=23q2_i-amc&utm_term=think_duo&utm_content=game',
		positionY: 55,
		positionX: 570,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 220,
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
