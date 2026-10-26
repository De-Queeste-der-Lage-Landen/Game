import types from '@/static/data/types';

export default [
	// {
	// 	name: 'easter-egg-justid-1',
	// 	img: 'controller',
	// 	positionY: 290,
	// 	positionX: 35,
	// 	isEasterEgg: true,
	// 	interaction: {
	// 		type: types.FOUND_EASTER_EGG
	// 	}
	// },
	{
		img: 'cloud',
		positionY: 73,
		positionX: 70,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: 800,
			delay: 0
		}
	},
	{
		img: 'cloud',
		positionY: 176,
		positionX: 187,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: -50,
			delay: 0
		}
	},
	{
		img: 'cloud',
		positionY: 168,
		positionX: 608,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: 600,
			delay: 0
		}
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 160
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 750
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 820
	},
	{
		name: 'rig-house',
		img: 'rig-house',
		positionY: 40,
		positionX: 250,
		originalWidth: 469,
		originalHeight: 358,
		positionFromBottom: true,
		scalesToWidth: true
	},
	{
		name: 'main-doors',
		sprite: 'Rig_deur_x_00000000',
		amountOfImages: 14,
		positionY: 240,
		positionX: 175,
		posRelativeTo: 'rig-house',
		interaction: {
			type: types.NEXT_SCENE,
			playSpriteOnFinish: true
		}
	},
	{
		img: 'rijksoverheid-logo',
		positionY: 0,
		positionX: 435
	},
	{
		img: 'bike',
		positionY: 275,
		positionX: 600
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'character-1',
		img: 'rig-character-1',
		positionY: 232,
		positionX: 206
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	}
];
