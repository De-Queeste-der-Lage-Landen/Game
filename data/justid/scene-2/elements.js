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
		name: 'justid-board-1',
		sprite: 'Justid_schermen_X_1_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 120,
		positionX: 208
	},
	{
		name: 'justid-board-2',
		sprite: 'Justid_schermen_X_2_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 120,
		positionX: 370
	},
	{
		name: 'justid-board-3',
		sprite: 'Justid_schermen_X_3_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 120,
		positionX: 530
	},
	{
		name: 'justid-board-4',
		sprite: 'Justid_schermen_X_4_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 120,
		positionX: 690
	},
	{
		img: 'justid-character-2',
		positionY: 231,
		positionX: 364
	},
	{
		img: 'justid-character-3',
		positionY: 231,
		positionX: 526
	},
	{
		img: 'justid-desk-brown',
		positionY: 272,
		positionX: 151
	},
	{
		img: 'justid-desk-brown',
		positionY: 272,
		positionX: 313
	},
	{
		img: 'justid-desk-brown',
		positionY: 272,
		positionX: 475
	},
	{
		img: 'justid-character-4',
		positionY: 231,
		positionX: 229
	},
	{
		name: 'water-cooler',
		sprite: 'watercooler_32x84_00000000',
		amountOfImages: 60,
		autoPlay: true,
		loop: true,
		positionY: 247,
		positionX: 647
	},
	{
		name: 'coffee-machine',
		sprite: 'koffieautomaat_29x43_00000000',
		amountOfImages: 60,
		autoPlay: true,
		loop: true,
		positionY: 242,
		positionX: 691
	},
	{
		img: 'coffee-table',
		positionY: 285,
		positionX: 675
	},
	{
		img: 'floor-rocks',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
