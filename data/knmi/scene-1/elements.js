import types from '@/static/data/types';

export default [
	{
		img: 'cow-left',
		positionY: 280,
		positionX: 30
	},
	{
		img: 'cloud',
		positionY: 118,
		positionX: 120,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: 800,
			delay: 0
		}
	},
	{
		name: 'cloud-rain',
		sprite: 'wolkenregen_x_00000000',
		amountOfImages: 36,
		positionY: 30,
		positionX: 646,
		autoPlay: true,
		loop: true,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: -100,
			delay: 0
		}
	},
	{
		name: 'cloud-thunder',
		sprite: 'wolkendonder_161x90_00000000',
		amountOfImages: 48,
		positionY: 72,
		positionX: 430,
		autoPlay: true,
		loop: true,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: -100,
			delay: 0
		}
	},
	{
		img: 'weather-station',
		positionY: 63,
		positionX: 820
	},
	{
		name: 'farm',
		img: 'farm',
		positionY: 106,
		positionX: 298,
		originalWidth: 300,
		originalHeight: 232
	},
	{
		name: 'farm-mill',
		sprite: 'molen_85x82_00000000',
		amountOfImages: 15,
		positionY: -30,
		positionX: 250,
		posRelativeTo: 'farm',
		autoPlay: true,
		loop: true
	},
	{
		name: 'main-doors',
		sprite: 'KNMI_deur_x_00000000',
		amountOfImages: 18,
		positionY: 122,
		positionX: 108,
		posRelativeTo: 'farm',
		interaction: {
			type: types.NEXT_SCENE,
			playSpriteOnFinish: true
		}
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 630
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 708
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 787
	},
	{
		img: 'rijksoverheid-logo',
		positionY: 0,
		positionX: 435
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'knmi-character-1',
		img: 'knmi-character-1',
		positionY: 230,
		positionX: 211
	},
	{
		name: 'knmi-character-1-arm-down',
		img: 'knmi-character-1-arm-down',
		positionY: 230,
		positionX: 226,
		hideElOnStart: true
	}
];
