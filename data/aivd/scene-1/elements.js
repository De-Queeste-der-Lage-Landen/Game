import types from '@/static/data/types';

export default [
	{
		img: 'cloud',
		positionY: 175,
		positionX: -100,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: 800,
			delay: 0
		}
	},
	{
		img: 'cloud',
		positionY: 70,
		positionX: 512,
		centerPivot: true,
		repeatingAnimation: {
			duration: 30000,
			endPositionX: -100,
			delay: 0
		}
	},
	{
		img: 'cloud',
		positionY: 173,
		positionX: 765,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: -100,
			delay: 0
		}
	},
	{
		name: 'aivd-house-1',
		img: 'aivd-house-1',
		positionY: 40,
		positionX: 262
	},
	{
		name: 'aivd-house-2',
		img: 'aivd-house-2',
		positionY: 330,
		positionX: 325,
		originalWidth: 250,
		originalHeight: 286
	},
	{
		img: 'pole',
		positionY: 0,
		positionX: 150
	},
	{
		name: 'camera-1',
		sprite: 'bewegendecamera_74x54_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 120,
		positionX: 197
	},
	{
		name: 'camera-2',
		sprite: 'bewegendecamera_74x54_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		flipX: true,
		positionY: 180,
		positionX: 115
	},
	{
		img: 'pole',
		positionY: 0,
		positionX: 745
	},
	{
		name: 'camera-3',
		sprite: 'bewegendecamera_74x54_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 120,
		positionX: 790
	},
	{
		name: 'camera-4',
		sprite: 'bewegendecamera_74x54_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		flipX: true,
		positionY: 180,
		positionX: 710
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 268
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 268
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 581
	},
	// {
	// 	name: 'easter-egg-aivd-1',
	// 	img: 'controller',
	// 	positionY: 290,
	// 	positionX: 775,
	// 	isEasterEgg: true,
	// 	interaction: {
	// 		type: types.FOUND_EASTER_EGG
	// 	}
	// },
	{
		name: 'black-car',
		sprite: 'auto_180x68_00000000',
		autoPlay: false,
		loop: true,
		amountOfImages: 60,
		positionY: 258,
		positionX: 775
		// interaction: {
		// 	type: types.MOVE_OBJECT,
		// 	playSpriteOnMoving: true,
		// 	duration: 1500,
		// 	endPositionX: 1000
		// }
	},
	{
		name: 'floor-grass',
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'aivd-character-1',
		img: 'aivd-character-1',
		positionY: 231,
		positionX: 184
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	}
];
