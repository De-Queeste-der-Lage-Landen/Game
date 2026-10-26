import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		img: 'celebration-flags',
		positionY: 0,
		positionX: 15
	},
	{
		img: 'celebration-flags',
		positionY: 0,
		positionX: 253
	},
	{
		img: 'celebration-flags',
		positionY: 0,
		positionX: 515
	},
	{
		img: 'celebration-flags',
		positionY: 0,
		positionX: 748
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 160
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 422
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 683
	},
	{
		img: 'rig-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		img: 'couch',
		positionY: 30,
		positionX: 152,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		img: 'couch',
		positionY: 30,
		positionX: 299,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		name: 'easter-egg-rig-1',
		img: 'controller',
		positionY: 295,
		positionX: 445,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		img: 'table-flowers-rig',
		positionY: 30,
		positionX: 435,
		scalesToWidth: true,
		positionFromBottom: true,
		interaction: {
			type: types.MOVE_OBJECT,
			duration: 500,
			endPositionX: 465
		}
	},
	{
		img: 'couch',
		positionY: 30,
		positionX: 500,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		img: 'couch',
		positionY: 30,
		positionX: 651,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		img: 'window-trees',
		positionY: 111,
		positionX: 144,
		scalesToWidth: true
	},
	// {
	// 	img: 'board-find-my-colleague',
	// 	positionY: 111,
	// 	positionX: 500,
	// 	scalesToWidth: true,
	// 	interaction: {
	// 		type: types.CLICK_ON_OBJECT,
	// 		showTextCloud: true,
	// 		textCloud: {
	// 			name: 'text-cloud-board-colleague',
	// 			text: `COLLEGA'S VAN RIG WERKEN DOOR HET HELE LAND VOOR VERSCHILLENDE RIJKSORGANISATIES.`,
	// 			hasTextCloud: 'normal',
	// 			positionY: 60,
	// 			positionX: 520,
	// 			fontSize: 10,
	// 			lineHeight: 20,
	// 			fill: '#77593C',
	// 			wordWrap: true,
	// 			wordWrapWidth: 304,
	// 			align: 'center'
	// 		}
	// 	}
	// },
	{
		name: 'rig-board-animation',
		sprite: 'rigscherm_520x310_00000000',
		autoPlay: true,
		amountOfImages: 41,
		loop: true,
		positionY: 111,
		positionX: 630,
		scalesToWidth: true,
		interaction: {
			type: types.CLICK_ON_OBJECT,
			showTextCloud: true,
			textCloud: {
				name: 'text-cloud-board-colleague',
				text: `COLLEGA'S VAN RIG WERKEN DOOR HET HELE LAND VOOR VERSCHILLENDE RIJKSORGANISATIES.`,
				hasTextCloud: 'normal',
				positionY: 60,
				positionX: 520,
				fontSize: 10,
				lineHeight: 20,
				fill: '#77593C',
				wordWrap: true,
				wordWrapWidth: 304,
				align: 'center'
			}
		}
	},
	{
		img: 'quiz-pub-text',
		positionY: 195,
		positionX: 793
	},
	{
		name: 'rig-character-1',
		img: 'rig-character-1',
		positionY: 233,
		positionX: 232
	},
	{
		name: 'rig-character-1-beer',
		img: 'rig-character-1-beer',
		positionY: 231,
		positionX: 324,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-character-1'
		}
	},
	{
		name: 'rig-character-2-beer',
		img: 'rig-character-2-beer',
		positionY: 228,
		positionX: 385,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-character-2'
		}
	},
	{
		name: 'rig-character-3-beer',
		img: 'rig-character-3-beer',
		positionY: 231,
		positionX: 527,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-character-3'
		}
	},
	{
		name: 'rig-character-4-beer',
		img: 'rig-character-4-beer',
		positionY: 231,
		positionX: 607,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-character-4'
		}
	},
	{
		name: 'rig-character-5-beer',
		img: 'rig-character-5-beer',
		positionY: 231,
		positionX: 670,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-character-5'
		}
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		name: 'right-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 828,
		interaction: {
			type: types.NEXT_SCENE,
			endPositionX: 575
		}
	},
	{
		img: 'floor-wood',
		positionY: 330,
		positionX: 0,
		repeat: true
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	},
	{
		name: 'text-cloud-character-1',
		text: "WIST JE DAT WE MOMENTEEL BIJ ZO'N 25 VERSCHILLENDE OPDRACHTGEVERS ZITTEN?",
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 240,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 240,
		hideElOnStart: true,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-character-2',
		text: 'WIST JE DAT WIJ EEN APPLICATIE BOUWDEN VOOR GLOBAL ENTRY?',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 310,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 220,
		hideElOnStart: true,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-character-3',
		text: 'WIST JE DAT WIJ IN SAMENWERKING MET PROVINCIE FRYSLÂN EN PROF. DR. ZICARI (AI-AUTORITEIT) DE BETROUWBAARHEID VAN AI-TOEPASSINGEN ONDERZOCHTEN?',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 360,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 400,
		hideElOnStart: true,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-character-4',
		text: 'WIST JE DAT WE HET NIEUWE ARCHEOLOGISCH INFORMATIESYSTEEM (ARCHIS) BOUWEN VOOR HET RCE?” (RIJKSDIENST VOOR HET CULTUREEL ERFGOED)',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 440,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 400,
		hideElOnStart: true,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-character-5',
		text: 'WIST JE DAT JE ALS SOFTWARE ENGINEER KAN MEEHELPEN AAN CRIMINALITEITSBESTRIJDING?',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 580,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 240,
		hideElOnStart: true,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	}
];
