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
		img: 'logius-secondary-bg',
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
		name: 'logius-board-1-static',
		sprite: 'schermen_x_1_00000000',
		autoPlay: false,
		loop: false,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 208
	},
	{
		name: 'logius-board-2-static',
		sprite: 'schermen_x_2_00000000',
		autoPlay: false,
		loop: false,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 370
	},
	{
		name: 'logius-board-3-static',
		sprite: 'schermen_x_3_00000000',
		autoPlay: false,
		loop: false,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 530
	},
	{
		name: 'logius-board-4-static',
		sprite: 'schermen_x_4_00000000',
		autoPlay: false,
		loop: false,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 690
	},
	{
		img: 'bike',
		positionY: 280,
		positionX: 131
	},
	{
		img: 'logius-character-1',
		positionY: 231,
		positionX: 249
	},
	{
		img: 'logius-character-2',
		positionY: 231,
		positionX: 431
	},
	{
		img: 'logius-character-3',
		positionY: 231,
		positionX: 512
	},
	{
		name: 'easter-egg-logius-1',
		img: 'controller',
		positionY: 280,
		positionX: 655,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		name: 'cat',
		sprite: 'kat_47x78_00000000',
		amountOfImages: 24,
		autoPlay: true,
		loop: true,
		positionY: 253,
		positionX: 675,
		interaction: {
			type: types.MOVE_OBJECT,
			endPositionX: 730
		}
	},
	{
		img: 'floor-stones',
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
