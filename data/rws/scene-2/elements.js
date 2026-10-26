import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

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
		img: 'rws-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		img: 'rws-easter-egg-bg',
		positionY: 205,
		positionX: 580
	},
	{
		name: 'easter-egg-rws-1',
		img: 'controller',
		positionY: 285,
		positionX: 263,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		img: 'rws-plan-board-tomorrow',
		positionY: 140,
		positionX: 730
	},
	{
		img: 'rws-plan-board-today',
		positionY: 140,
		positionX: 580
	},
	{
		name: 'character-2',
		img: 'rws-character-2',
		positionY: 230,
		positionX: 555
	},
	{
		name: 'character-3',
		img: 'rws-character-3',
		positionY: 230,
		positionX: 816
	},
	{
		img: 'rws-art-object-1',
		positionY: 235,
		positionX: 245,
		interaction: {
			type: types.MOVE_OBJECT,
			duration: 500,
			endPositionX: 170
		}
		// interaction: {
		// 	type: types.CLICK_ON_OBJECT,
		// 	showTextCloud: true,
		// 	textCloud: {
		// 		name: 'text-cloud-brienenoordbrug',
		// 		text: 'DIT IS <green-rws>DE VAN BRIENENOORDBRUG</green-rws>, DE DRUKSTE BRUG VAN ONS LAND. DAGELIJKS RIJDEN HIER MEER DAN 230.000 VOERTUIGEN OVERHEEN. EN JAARLIJKS PASSEREN ER ZO’N 120.000 SCHEPEN DE BRUG.',
		// 		hasTextCloud: 'normal',
		// 		positionY: 70,
		// 		positionX: 150,
		// 		fontSize: 10,
		// 		lineHeight: 20,
		// 		fill: '#513922',
		// 		hasColor: '-light-brown',
		// 		wordWrap: true,
		// 		wordWrapWidth: 284,
		// 		align: 'center'
		// 	}
		// }
	},
	{
		img: 'rws-art-object-2',
		positionY: 235,
		positionX: 328
		// interaction: {
		// 	type: types.CLICK_ON_OBJECT,
		// 	showTextCloud: true,
		// 	textCloud: {
		// 		name: 'text-cloud-oorstercheldekering',
		// 		text: 'HIER ZIE JE HET GROOTSTE EN BEROEMDSTE DELTAWERK: <green-rws>DE OOSTERSCHELDEKERING</green-rws>. DE 9 KILOMETER LANGE STORMVLOEDKERING SLUIT DE OOSTERSCHELDE AF BIJ DREIGEND HOOGWATER VAN 3 METER BOVEN NAP...',
		// 		hasTextCloud: 'normal',
		// 		positionY: 85,
		// 		positionX: 200,
		// 		fontSize: 10,
		// 		lineHeight: 20,
		// 		fill: '#513922',
		// 		hasColor: '-light-brown',
		// 		wordWrap: true,
		// 		wordWrapWidth: 344,
		// 		align: 'center',
		// 		interaction: {
		// 			type: types.CLICK_ON_OBJECT,
		// 			showTextCloud: true,
		// 			index: 5,
		// 			textCloud: {
		// 				name: 'text-cloud-oorstercheldekering-two',
		// 				text: '...DE KERING STAAT WERELDWIJD BEKEND ALS EEN WATERBOUWKUNDIG HOOGSTANDJE. DAAR ZIJN WE MAAR WÁT TROTS OP.',
		// 				hasTextCloud: 'normal',
		// 				positionY: 85,
		// 				positionX: 260,
		// 				fontSize: 10,
		// 				lineHeight: 20,
		// 				fill: '#513922',
		// 				hasColor: '-light-brown',
		// 				wordWrap: true,
		// 				wordWrapWidth: 224,
		// 				align: 'center'
		// 			}
		// 		}
		// 	}
		// }
	},
	{
		img: 'rws-art-object-3',
		positionY: 239,
		positionX: 436
		// interaction: {
		// 	type: types.CLICK_ON_OBJECT,
		// 	showTextCloud: true,
		// 	textCloud: {
		// 		name: 'text-cloud-gaasperdammer-tunnel',
		// 		text: 'DIT IS DE <green-rws>GAASPERDAMMERTUNNEL</green-rws>; MET ZIJN LENGTE VAN 3 KILOMETER IS DIT DE LANGSTE LANDTUNNEL VAN NEDERLAND. BOVENOP HET TUNNELDAK HEBBEN WE EEN PARK AANGELEGD DIE TWEE AMSTERDAMSE WIJKEN MET ELKAAR VERBINDT.',
		// 		hasTextCloud: 'normal',
		// 		positionY: 65,
		// 		positionX: 325,
		// 		fontSize: 10,
		// 		lineHeight: 20,
		// 		fill: '#513922',
		// 		hasColor: '-light-brown',
		// 		wordWrap: true,
		// 		wordWrapWidth: 344,
		// 		align: 'center'
		// 	}
		// }
	},
	{
		img: 'rws-desk',
		positionY: 263,
		positionX: 630,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'frogger',
			endPositionX: 692,
			showLoadingScreen: true
		}
	},
	{
		img: 'rws-desk',
		positionY: 263,
		positionX: 759
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		name: 'character-1',
		img: 'rws-character-1',
		positionY: 230,
		positionX: 175
	},
	{
		img: 'floor-rocks',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
