import types from '@/static/data/types';

export default [
	{
		img: 'lamp-big',
		positionY: 0,
		positionX: 143
	},
	{
		img: 'lamp-big',
		positionY: 0,
		positionX: 390
	},
	{
		img: 'lamp-big',
		positionY: 0,
		positionX: 636
	},
	{
		img: 'camera-left',
		positionY: 64,
		positionX: 0
	},
	{
		img: 'camera-right',
		positionY: 64,
		positionX: 822
	},
	{
		img: 'plant',
		positionY: 238,
		positionX: 320
	},
	{
		name: 'klok',
		img: 'clock-big',
		positionY: 163,
		positionX: 318
	},
	{
		img: 'enigma-stand',
		positionY: 266,
		positionX: 512
	},
	{
		name: 'enigma',
		img: 'enigma-plaque',
		positionY: 220,
		positionX: 525,
		interaction: {
			type: types.CLICK_ON_OBJECT,
			showTextCloud: true,
			textCloud: {
				name: 'text-cloud-enigma',
				text: 'DE ENIGMA IS EEN (DE)CODERINGSMACHINE DIE INFORMATIE KON VERSLEUTELEN.',
				hasTextCloud: 'normal',
				positionY: 90,
				positionX: 445,
				fontSize: 10,
				lineHeight: 20,
				fill: '#77593C',
				wordWrap: true,
				wordWrapWidth: 190,
				align: 'center'
			}
		}
	},
	{
		img: 'painting-background',
		positionY: 180,
		positionX: 610
	},
	{
		name: 'easter-egg-aivd-2',
		img: 'controller',
		positionY: 219,
		positionX: 625,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		img: 'painting',
		positionY: 180,
		positionX: 610,
		interaction: {
			type: types.MOVE_OBJECT,
			duration: 500,
			endPositionX: 555
		}
	},
	{
		img: 'paintings',
		positionY: 157,
		positionX: 670
	},
	{
		img: 'key',
		positionY: 193,
		positionX: 733
	},
	{
		name: 'sleutel',
		img: 'enigma-plaque',
		positionY: 195,
		positionX: 754,
		interaction: {
			type: types.CLICK_ON_OBJECT,
			showTextCloud: true,
			textCloud: {
				name: 'text-cloud-key',
				text: 'IN DEZE SLEUTEL ZIT EEN HOLLE RUIMTE. DAARIN KONDEN CODEMATERIALEN WORDEN VERSTOPT.',
				hasTextCloud: 'normal',
				positionY: 70,
				positionX: 668,
				fontSize: 10,
				lineHeight: 20,
				fill: '#77593C',
				wordWrap: true,
				wordWrapWidth: 210,
				align: 'center'
			}
		}
	},
	{
		img: 'couch-chairs',
		positionY: 275,
		positionX: 580
	},
	{
		img: 'table-flowers',
		positionY: 262,
		positionX: 821
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		name: 'secret-door',
		sprite: 'AIVD_geheimedeur_x_00000000',
		amountOfImages: 16,
		positionY: 220,
		positionX: 430,
		interaction: {
			type: types.NEXT_SCENE,
			endPositionX: 425
		}
	},
	{
		img: 'floor-rocks',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
