import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'WELKOM IN DE <light-blue>WEERKAMER</light-blue>',
		hasTextCloud: 'centered-small',
		positionY: 146,
		positionX: 160,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 114,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-2',
		text: 'HIER HOUDEN METEOROLOGEN 24/7 HET WEER IN DE GATEN OM TIJDIG TE KUNNEN WAARSCHUWEN VOOR EXTREEM WEER.',
		hasTextCloud: 'centered',
		positionY: 110,
		positionX: 85,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 264,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	// {
	// 	name: 'text-cloud-3',
	// 	text: 'DE MEESTE MENSEN ZIJN GEWEND OM ALLES TE KUNNEN DOEN WAT ZE GEPLAND HEBBEN, MAAR HET WEER KAN GRILLIG ZIJN.',
	// 	hasTextCloud: 'centered',
	// 	positionY: 110,
	// 	positionX: 85,
	// 	fontSize: 10,
	// 	lineHeight: 20,
	// 	fill: '#000000',
	// 	wordWrap: true,
	// 	wordWrapWidth: 264,
	// 	align: 'center',
	// 	interaction: {
	// 		type: types.GO_TO_NEXT_ANIMATION_ELEMENT
	// 	},
	// 	animation: {
	// 		type: animationTypes.FADE_IN,
	// 		pauseAfter: true,
	// 		reverseAnimation: true
	// 	}
	// },
	{
		name: 'text-cloud-4',
		text: 'WIJ WAARSCHUWEN MET EEN CODE <yellow>GEEL</yellow>, <orange>ORANJE</orange> OF <red>ROOD</red> ALS ER KANS IS OP GEVAARLIJK WEER, ZOALS ONWEER, ZWARE WINDSTOTEN OF GLADHEID...',
		hasTextCloud: 'centered',
		positionY: 90,
		positionX: 80,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 274,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-5',
		text: '...ZODAT JIJ JE OP HET WEER KUNT VOORBEREIDEN EN DE KANS OP SCHADE OF LETSEL WORDT VOORKOMEN.',
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 75,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 274,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'board-1-orange',
		sprite: 'oplichtende_schermen_ORANJE_X_1_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 212,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'board-3-orange',
		sprite: 'oplichtende_schermen_ORANJE_X_3_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 535,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'board-2-orange',
		sprite: 'oplichtende_schermen_ORANJE_X_2_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 375,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'board-4-orange',
		sprite: 'oplichtende_schermen_ORANJE_X_4_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 695,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-6',
		text: 'ALLE HENS AAN DEK! ER LIJKT EEN FOUT IN DE DATA TE ZITTEN. KAN JIJ HET DATA TEAM HELPEN?',
		hasTextCloud: 'centered-small',
		positionY: 90,
		positionX: 465,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 185,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'board-3-red',
		sprite: 'oplichtende_schermen_ROOD_X_3_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 535,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'board-1-red',
		sprite: 'oplichtende_schermen_ROOD_X_1_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 212,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'board-4-red',
		sprite: 'oplichtende_schermen_ROOD_X_4_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 695,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'board-2-red',
		sprite: 'oplichtende_schermen_ROOD_X_2_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 375,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	// {
	// 	name: 'code-red-sign',
	// 	sprite: 'code-red-anim_00000000',
	// 	scalesToWidth: true,
	// 	amountOfImages: 10,
	// 	positionY: 185,
	// 	positionX: 827,
	// 	autoPlay: true,
	// 	loop: true,
	// 	animation: {
	// 		type: animationTypes.FADE_IN
	// 		// reverseAnimation: true
	// 	}
	// },
	{
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 155,
		positionX: 811,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
