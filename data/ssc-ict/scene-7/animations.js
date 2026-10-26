import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'DANK HELD. WAT EEN GELUK DAT JIJ ER WAS OM DEZE DDOS-AANVAL TE STOPPEN!',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 105,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 185,
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
		text: 'WIJ KUNNEN ALTIJD NIEUWE COLLEGA`S GEBRUIKEN MET GOEDE ICT-SKILLS!',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 105,
		fontSize: 10,
		lineHeight: 20,
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
		name: 'text-cloud-3',
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ SSC-ICT?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'ssc-ict',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/3jlIBAiTUHJYYBAKPT9OoGvh_1ObfAafTz8go0WQn_RbB2ThiBDafU4KOoq5TX2L/rjvpiVedqqt4Af5',
		link: ' https://www.werkenvoornederland.nl/organisaties/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties/ssc-ict?utm_source=tweakers&utm_medium=referral&utm_campaign=23q2_i-amc&utm_term=think_ssc-ict&utm_content=game',
		positionY: 45,
		positionX: 410,
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
