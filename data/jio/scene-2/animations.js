import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-2',
		text: 'HIER ZORGEN WIJ VOOR DE JUISTE <blue-jio>HARD- EN SOFTWARE</blue-jio> OP WERKPLEKKEN...',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 135,
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
	{
		name: 'text-cloud-3',
		text: '...OVERAL IN NEDERLAND, IN DE VORM VAN OP MAAT GEMAAKTE APPS, SYSTEMEN EN APPLICATIES...',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 105,
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
		text: '...DAAROM WERKEN WIJ MET <blue-jio>VERSCHILLENDE PROGRAMMEERTALEN</blue-jio>.',
		hasTextCloud: 'normal',
		positionY: 125,
		positionX: 125,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 180,
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
		text: 'VANDAAG ORGANISEERT ÉÉN VAN ONZE OPDRACHTGEVERS EEN <blue-jio>FOXHUNT</blue-jio>: EEN SIMULATIE VAN EEN SITUATIE WAARIN DRIE GEVANGENEN ZIJN ONTSNAPT...',
		hasTextCloud: 'normal',
		positionY: 85,
		positionX: 590,
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
		name: 'text-cloud-6',
		text: '...HET DOEL VAN DE FOXHUNT IS OM DE ONTSNAPTE GEVANGENEN ZO SNEL MOGELIJK TE LOKALISEREN EN OP TE SLUITEN.',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 580,
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
		name: 'text-cloud-7',
		text: 'DIT DOE JE DOOR ALLE DATA TE VERZAMELEN EN DE GEVANGENEN OP HET JUISTE MOMENT TE VANGEN.',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 585,
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
		name: 'text-cloud-8',
		text: 'DOE JE MEE? NEEM PLAATS AAN HET BUREAU!',
		hasTextCloud: 'normal',
		positionY: 125,
		positionX: 635,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 144,
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
		positionY: 200,
		positionX: 550,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
