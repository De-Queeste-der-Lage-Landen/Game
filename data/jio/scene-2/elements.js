import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		img: 'jio-screen',
		positionY: 80,
		positionX: 280
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
		img: 'jio-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		name: 'water-cooler',
		sprite: 'watercooler_32x84_00000000',
		amountOfImages: 60,
		autoPlay: true,
		loop: true,
		positionY: 247,
		positionX: 147
	},
	{
		img: 'easter-egg-bg-jio',
		positionY: 192,
		positionX: 415
	},
	{
		name: 'easter-egg-jio-1',
		img: 'controller',
		positionY: 188,
		positionX: 430,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		img: 'jio-name-tag',
		positionY: 192,
		positionX: 415,
		interaction: {
			type: types.MOVE_OBJECT,
			duration: 500,
			endPositionY: 168
		}
	},
	{
		img: 'jio-plan-board',
		positionY: 140,
		positionX: 678
	},
	{
		name: 'character-2',
		img: 'jio-character-2',
		positionY: 230,
		positionX: 677
	},
	{
		name: 'character-3',
		img: 'jio-character-3',
		positionY: 230,
		positionX: 803
	},
	{
		img: 'jio-desk-1',
		positionY: 262,
		positionX: 494,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			stopAfter: true,
			endPositionX: 560,
			index: 'text-cloud-9',
			foxhunt: true
		}
	},
	{
		img: 'jio-desk-2',
		positionY: 262,
		positionX: 623
	},
	{
		img: 'jio-desk-1',
		positionY: 262,
		positionX: 753
	},
	{
		name: 'text-cloud-9',
		text: 'KLAAR VOOR DE START? LET THE FOXHUNT BEGIN!',
		hasTextCloud: 'normal',
		positionY: 130,
		positionX: 148,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 144,
		align: 'center',
		hideElOnStart: true,
		// interaction: {
		// 	type: types.CLICK_ON_OBJECT,
		// 	showTextCloud: true,
		// 	index: 5,
		// 	textCloud: {
		// 		name: 'text-cloud-10',
		// 		text: 'ZORG DAT JE EEN SCORE VAN MINIMAAL 1500 HAALT EN WIE WEET WIN JIJ EEN PRIJS!',
		// 		hasTextCloud: 'normal',
		// 		positionY: 130,
		// 		positionX: 110,
		// 		fontSize: 10,
		// 		lineHeight: 20,
		// 		fill: '#000000',
		// 		wordWrap: true,
		// 		wordWrapWidth: 234,
		// 		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD,
			startGameAfterLoading: 'pacman',
			hideCloudBeforeGame: true,
			showLoadingScreen: true
		}
		// 	}
		// }
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		name: 'jio-character-1',
		img: 'jio-character-1',
		positionY: 230,
		positionX: 215,
		centerPivot: true
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
	}
];
