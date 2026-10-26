import types from '@/static/data/types';

export default [
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
		img: 'justid-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		img: 'clock',
		positionY: 156,
		positionX: 53
	},
	{
		img: 'justid-board-big',
		positionY: 147,
		positionX: 313
	},
	{
		img: 'justid-desk-brown',
		positionY: 272,
		positionX: 679,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			endPositionX: 745,
			startGameAfterLoading: 'find-suspect',
			showLoadingScreen: false
		}
	},
	{
		name: 'coffee-cup',
		sprite: 'koffiemok_20x25_00000000',
		amountOfImages: 48,
		autoPlay: true,
		loop: true,
		positionY: 258,
		positionX: 770
	},
	{
		img: 'floor-rocks',
		positionY: 330,
		positionX: 0,
		repeat: true
	},
	{
		name: 'token-copied',
		img: 'token-copied',
		positionY: -50,
		positionX: 350
	}
];
