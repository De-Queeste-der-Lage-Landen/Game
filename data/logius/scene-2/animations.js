import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'logius-board-1',
		sprite: 'schermen_x_1_00000000',
		autoPlay: false,
		loop: false,
		amountOfImages: 13,
		scalesToWidth: true,
		positionY: 120,
		positionX: 208,
		animation: {
			type: animationTypes.FADE_IN,
			duration: 50,
			playSpriteOnFinish: true
		}
	},
	{
		name: 'logius-board-2',
		sprite: 'schermen_x_2_00000000',
		autoPlay: false,
		loop: false,
		amountOfImages: 19,
		scalesToWidth: true,
		positionY: 120,
		positionX: 370,
		animation: {
			type: animationTypes.FADE_IN,
			duration: 50,
			playSpriteOnFinish: true
		}
	},
	{
		name: 'logius-board-3',
		sprite: 'schermen_x_3_00000000',
		autoPlay: false,
		loop: false,
		amountOfImages: 8,
		scalesToWidth: true,
		positionY: 120,
		positionX: 530,
		animation: {
			type: animationTypes.FADE_IN,
			duration: 50,
			playSpriteOnFinish: true
		}
	},
	{
		name: 'logius-board-4',
		sprite: 'schermen_x_4_00000000',
		autoPlay: false,
		loop: false,
		amountOfImages: 10,
		scalesToWidth: true,
		positionY: 120,
		positionX: 690,
		animation: {
			type: animationTypes.FADE_IN,
			duration: 50,
			playSpriteOnFinish: true
		}
	},
	{
		name: 'text-cloud-1',
		text: 'IK ZIE JE DENKEN... <light-green>LOGIUS</light-green>? HEEL BEGRIJPELIJK HOOR...',
		hasTextCloud: 'centered',
		positionY: 120,
		positionX: 205,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 175,
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
		text: 'ALS WIJ AAN VRIENDEN EN FAMILIE VERTELLEN DAT WE VOOR LOGIUS WERKEN, DAN GAAT ER MEESTAL NIET METEEN EEN BELLETJE RINKELEN.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 135,
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
		name: 'text-cloud-3',
		text: 'MAAR ALS IK <light-green>DIGID</light-green> OF <light-green>MIJNOVERHEID</light-green> ZEG, DAN HEEFT IEDEREEN MEESTAL AAN ÉÉN WOORD GENOEG.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 170,
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
		name: 'text-cloud-4',
		text: 'LOGIUS IS DE <light-green>DIENST DIGITALE OVERHEID</light-green>...',
		hasTextCloud: 'centered',
		positionY: 140,
		positionX: 195,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 174,
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
		text: 'MET ONZE PRODUCTEN EN DIENSTEN HELPEN WE OVERHEIDSDEPARMENTEN EN MENSEN OM SNEL, EENVOUDIG EN VEILIG MET ELKAAR TE COMMUNICEREN.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 125,
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
		name: 'text-cloud-6',
		text: 'LOGIUS GELOOFT IN EEN OVERHEID DIE ALTIJD, OVERAL EN <light-green>VOOR IEDEREEN BESCHIKBAAR EN TOEGANKELIJK</light-green> IS.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 140,
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
		text: 'WELKOM IN HET HART VAN DE <light-green>DIGITALE OVERHEID</light-green>!',
		hasTextCloud: 'centered',
		positionY: 120,
		positionX: 200,
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
		name: 'text-cloud-8',
		text: 'GOED DAT JE ER BENT: WE HEBBEN JE HULP NODIG!',
		hasTextCloud: 'centered',
		positionY: 115,
		positionX: 205,
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
		name: 'text-cloud-9',
		text: 'ALLE NEDERLANDERS KUNNEN VANAF VOLGENDE MAAND VIA HUN <light-green>DIGID</light-green> EEN GRATIS <light-green>ENERGIESUBSIDIE</light-green> AANVRAGEN.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 160,
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
		text: 'HELP JE ONS OM ONZE SERVER OP TE SCHALEN OM DEZE <red>DIGISTORM</red> ZO GOED MOGELIJK OP TE KUNNEN VANGEN?',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 160,
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
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 155,
		positionX: 811,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
