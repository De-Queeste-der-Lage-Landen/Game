import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-2',
		text: 'MET WATERKERINGEN, SLUIZEN, BRUGGEN EN TUNNELS HOUDEN WIJ NEDERLAND VEILIG, LEEFBAAR EN BEREIKBAAR.',
		hasTextCloud: 'normal',
		positionY: 90,
		positionX: 100,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 214,
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
		text: `IN VAKTAAL NOEMEN WE DIT SOORT BOUWWERKEN OOK WEL <green-rws>'KUNSTWERKEN'</green-rws>. NIET VOOR NIETS, WANT HET ZIJN WARE TECHNISCHE HOOGSTANDJES.`,
		hasTextCloud: 'normal',
		positionY: 90,
		positionX: 90,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 242,
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
		text: 'HIER ZIE JE DRIE KUNSTWERKEN: EEN BRUG, EEN WATERKERING EN EEN TUNNEL. NEEM VOORAL EEN KIJKJE!',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 90,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 244,
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
		name: 'text-cloud-9',
		text: 'BIJ ALLE DRIE IS ER EEN STORING IN DE APPLICATIE, WAARDOOR DE VEILIGHEID EN BEREIKBAARHEID VAN ONS LAND IN GEVAAR IS.',
		hasTextCloud: 'normal',
		positionY: 85,
		positionX: 465,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 224,
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
		name: 'text-cloud-10',
		text: 'AAN JOU DE TAAK OM DIE TE VERHELPEN.',
		hasTextCloud: 'normal',
		positionY: 140,
		positionX: 480,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 204,
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
		name: 'text-cloud-11',
		text: 'ALS JIJ BINNEN <green-rws>3 MINUTEN</green-rws> DE KUNSTWERKEN HEBT BEZOCHT, DAN VERHELP JE DE STORING. MAAR LET OP: ZORG DAT JE MET JOUW VOERTUIG EEN VEILIGE OVERTOCHT MAAKT.',
		hasTextCloud: 'normal',
		positionY: 85,
		positionX: 420,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 304,
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
		name: 'text-cloud-12',
		text: 'NEEM PLAATS AAN HET <green-rws>VRIJE BUREAU</green-rws>.',
		hasTextCloud: 'normal',
		positionY: 142,
		positionX: 500,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 164,
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
	// 	name: 'text-cloud-13',
	// 	text: 'ZORG DAT JE EEN SCORE VAN MINIMAAL 1500 HAALT EN WIE WEET WIN JIJ EEN PRIJS!',
	// 	hasTextCloud: 'normal',
	// 	positionY: 125,
	// 	positionX: 460,
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
		positionX: 680,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
