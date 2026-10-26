import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-2',
		text: 'WIJ DOEN BELANGRIJK WERK VOOR DE <yellow-rivm>VOLKSGEZONDHEID</yellow-rivm> EN HET <yellow-rivm>MILIEU</yellow-rivm> IN NEDERLAND...',
		hasTextCloud: 'normal',
		positionY: 110,
		positionX: 115,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 210,
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
		text: 'ZO DOEN WE BIJVOORBEELD ONDERZOEK NAAR ZAKEN DIE GEVOLGEN HEBBEN VOOR DE VOLKSGEZONDHEID...',
		hasTextCloud: 'normal',
		positionY: 110,
		positionX: 115,
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
		name: 'text-cloud-4',
		text: '...DENK AAN VIRUSSEN ZOALS COVID, KINKHOEST, MAZELEN, POKKEN MAAR OOK NAAR RADIOACTIVITEIT.',
		hasTextCloud: 'normal',
		positionY: 110,
		positionX: 110,
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
		name: 'text-cloud-5',
		text: 'DE INFORMATIE DIE WE BINNEN HET RIVM HEBBEN, IS OOK AANTREKKELIJK VOOR DE MENSEN DIE HIER NIET WERKEN.',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 100,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 244,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT,
			flipXElement: 'character-1'
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-6',
		text: 'WELKOM OP DE <yellow-rivm>IT-AFDELING</yellow-rivm>. HIER BEWAKEN WE ALLE IT VOORZIENINGEN OM TE CONTROLEREN OF ER GEEN RARE DINGEN GEBEUREN.',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 520,
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
		name: 'text-cloud-7',
		text: 'OP DIT MOMENT HEBBEN WE EEN <yellow-rivm>VLOEDGOLF VAN AANVALLEN</yellow-rivm> EN HEBBEN WE JOU NODIG OM HET PROBLEEM PLAT TE SLAAN, VOORDAT WE OVERSTROMEN!',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 510,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 314,
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
		name: 'text-cloud-8',
		text: 'GA SNEL ZITTEN EN HELP ONS OM DE AANVALLEN PLAT TE SLAAN! HET IS HEEL EENVOUDIG: ALS JE EEN PROBLEEM ZIET, SLA ER OP!',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 535,
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
	{
		name: 'text-cloud-9',
		text: 'MAAR <yellow-rivm>LET OP</yellow-rivm>, WIJ DOEN ZELF OOK ONDERHOUD EN SOMS KOMT ER DUS EEN RIVM- COLLEGA TUSSENDOOR.',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 550,
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
		name: 'text-cloud-10',
		text: `HET ZOU JAMMER ZIJN ALS JE DIE PER ONGELUK PLAT SLAAT... HELDER? ZET 'M OP!`,
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 570,
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
	// {
	// 	name: 'text-cloud-11',
	// 	text: 'ZORG DAT JE EEN SCORE VAN MINIMAAL 2500 HAALT EN WIE WEET WIN JIJ EEN PRIJS!',
	// 	hasTextCloud: 'normal',
	// 	positionY: 125,
	// 	positionX: 555,
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
		positionX: 325,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
