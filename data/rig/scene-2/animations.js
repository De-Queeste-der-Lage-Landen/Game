import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'BINNEN HET RIG WERKEN ONZE <light-orange>TECH CONSULTANTS</light-orange> OP PROJECTBASIS AAN ZINVOLLE EN IMPACTVOLLE VRAAGSTUKKEN BINNEN DE RIJKSOVERHEID OP HET GEBIED VAN SOFTWARE, DATA EN SECURITY...',
		hasTextCloud: 'centered',
		positionY: 90,
		positionX: 90,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 344,
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
		text: 'ZO ZORGEN WIJ BIJVOORBEELD DAT DE IT INFRASTRUCTUUR VAN HET RIJK OP ORDE IS, BOUWEN WIJ APPLICATIES EN ZORGEN WIJ DAT DATA OP EEN VEILIGE EN VERANTWOORDE MANIER WORDT INGEZET OM IMPACT TE KUNNEN MAKEN.',
		hasTextCloud: 'centered',
		positionY: 70,
		positionX: 90,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 344,
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
		text: 'BINNEN HET RIG LEIDT ONS WERK TOT RESULTAAT, TERWIJL ONZE KENNIS EN KUNDE GEDEELD WORDT EN BEHOUDEN BLIJFT BINNEN DE RIJKSOVERHEID.',
		hasTextCloud: 'centered',
		positionY: 95,
		positionX: 110,
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
		text: "MIJN COLLEGA'S KUNNEN JE OOK EEN PAAR LEUKE FEITJES OVER HET RIG VERTELLEN. KLIK LEKKER ROND EN SLUIT DAN AAN BIJ DE PUBQUIZ!",
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 111,
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
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 130,
		positionX: 811,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
