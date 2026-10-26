import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'animation-character',
		sprite: 'character_J_walk_61x150_00000000',
		autoPlay: true,
		loop: true,
		isCharacter: true,
		amountOfImages: 12,
		centerPivot: true,
		positionY: 231,
		positionX: -50,
		animation: {
			type: animationTypes.FADE_IN_MOVE,
			duration: 2500,
			flipX: false,
			alpha: 1,
			stopSpriteOnFinish: true,
			endPositionXPercentage: true,
			endPositionX: 540
		}
	},
	{
		name: 'text-cloud-1',
		text: 'GEWELDIG GEDAAN, HELD! WE ZIJN HELEMAAL KLAAR VOOR EEN <light-green>DIGISTORM</light-green>.',
		hasTextCloud: 'centered',
		positionY: 115,
		positionX: 455,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 174,
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
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ LOGIUS?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'logius',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/x4yiZfZIjCj1Fl4w7_1HK3GCED9Xtyp8b7mpF1tPGVNk8QmenzQai0PJcIb_wxAc/47VG65rL8jTqqMW',
		link: 'https://www.werkenvoornederland.nl/organisaties/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties/logius?utm_source=tweakersgame&utm_medium=game&utm_campaign=2022_tweakersgame&utm_term=tweakers_logius',
		positionY: 45,
		positionX: 440,
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
