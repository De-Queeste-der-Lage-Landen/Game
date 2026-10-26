import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'WELKOM BIJ DE JUSTITIËLE INFORMATIEDIENST OFTEWEL: JUSTID.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 180,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 154,
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
		text: 'WE ZIJN DÉ SPECIALIST OP HET GEBIED VAN HET OPSLAAN, DELEN EN BORGEN VAN STRIKT VERTROUWELIJKE DIGITALE INFORMATIE.',
		hasTextCloud: 'centered',
		positionY: 95,
		positionX: 105,
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
		name: 'text-cloud-3',
		text: 'MET 600 COLLEGA’S WERKEN WE DAGELIJKS VANUIT DEN HAAG, LEEUWARDEN, ZUTPHEN EN ALMELO AAN SLIMME IT-OPLOSSINGEN...',
		hasTextCloud: 'centered',
		positionY: 95,
		positionX: 115,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 284,
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
		text: '...EN VOORZIEN WE ONZE PARTNERS, ZOALS DE POLITIE EN MARECHAUSSEE, VAN CRUCIALE INFORMATIE OP HET JUISTE MOMENT.',
		hasTextCloud: 'centered',
		positionY: 95,
		positionX: 105,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 300,
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
		text: 'FIJN DAT JE ER BENT! WE KUNNEN JOUW HULP GOED GEBRUIKEN BIJ DE <purple-dark>VOLGENDE ZAAK.</purple-dark>',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 165,
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
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 155,
		positionX: 811,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
