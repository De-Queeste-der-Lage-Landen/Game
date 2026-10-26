import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-2',
		text: 'WELKOM BIJ <blue-dictu>TEAM DATADIENSTEN</blue-dictu>. GA SNEL ZITTEN: WE HEBBEN EEN PROBLEEM!',
		hasTextCloud: 'normal',
		positionY: 110,
		positionX: 490,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 194,
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
		name: 'text-cloud-3',
		text: 'VIA SATELLIETBEELDEN, FORMULIEREN EN DRONES KOMT VEEL DATA BINNEN. DEZE WORDT GEBRUIKT OM SUBSIDIE-AANVRAGEN MET BEHULP VAN AI TE BEOORDELEN.',
		hasTextCloud: 'normal',
		positionY: 90,
		positionX: 445,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 294,
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
		name: 'text-cloud-4',
		text: 'DE OPGEHAALDE DATA IS IN DE WAR GERAAKT EN LANDT NIET GOED OP ONS DATAPLATFORM.',
		hasTextCloud: 'normal',
		positionY: 125,
		positionX: 475,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 234,
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
		text: 'KAN JE HELPEN OM DE DATA TE STRUCTUREREN? DAN KUNNEN ONZE KLANTEN DEZE VEILIG EN BETROUWBAAR VERWERKEN EN ANALYSEREN.',
		hasTextCloud: 'normal',
		positionY: 90,
		positionX: 470,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 234,
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
	// 	name: 'text-cloud-6',
	// 	text: 'ZORG DAT JE EEN SCORE VAN MINIMAAL 1250 HAALT EN WIE WEET WIN JIJ EEN PRIJS!',
	// 	hasTextCloud: 'normal',
	// 	positionY: 125,
	// 	positionX: 470,
	// 	fontSize: 10,
	// 	lineHeight: 20,
	// 	fill: '#000000',
	// 	wordWrap: true,
	// 	wordWrapWidth: 234,
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
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 200,
		positionX: 280,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
