import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

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
		name: 'easter-egg-ivo-1',
		img: 'controller',
		positionY: 150,
		positionX: 440,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	// {
	// 	img: 'king',
	// 	positionY: 109,
	// 	positionX: 412,
	// 	interaction: {
	// 		type: types.MOVE_OBJECT,
	// 		duration: 500,
	// 		endPositionX: 500
	// 	}
	// },
	{
		name: 'king-ivo-anim',
		sprite: 'wimlex_74x109_00000000',
		amountOfImages: 48,
		positionY: 109,
		positionX: 452,
		autoPlay: false,
		loop: true,
		interaction: {
			type: types.MOVE_OBJECT,
			playSpriteOnMoving: true,
			duration: 500,
			endPositionX: 530
		}
	},
	{
		img: 'ivo-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		img: 'judge-2',
		positionY: 65,
		positionX: 330,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		img: 'judge-1',
		positionY: 65,
		positionX: 470,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		img: 'judge-3',
		positionY: 65,
		positionX: 610,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		img: 'court-table',
		positionY: 30,
		positionX: 263,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		img: 'judge',
		positionY: 30,
		positionX: 181,
		scalesToWidth: true,
		positionFromBottom: true
	},
	{
		img: 'ivo-character-1',
		positionY: 228,
		positionX: 384,
		centerPivot: true,
		flipX: true
	},

	{
		img: 'exit',
		positionY: 192,
		positionX: 38
	},
	{
		img: 'devops',
		positionY: 192,
		positionX: 795
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
		positionX: 828
	},
	{
		img: 'floor-rocks',
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
