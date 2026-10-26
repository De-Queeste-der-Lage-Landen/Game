import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'VERDRAAID, HIJ DEED ZICH VOOR ALS  ZIJN <purple-dark>TWEELINGBROER</purple-dark>! HIJ DACHT ONS TE SLIM AF TE ZIJN MAAR... WE’VE GOT HIM!',
		hasTextCloud: 'centered',
		positionY: 45,
		positionX: 275,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 254,
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
		name: 'board-end-of-message',
		img: 'board-end-of-message',
		positionY: 147,
		positionX: 313,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'animation-character',
		sprite: 'character_H_walk_61x150_00000000',
		autoPlay: true,
		loop: true,
		isCharacter: true,
		amountOfImages: 12,
		centerPivot: true,
		positionY: 231,
		positionX: -50,
		animation: {
			type: animationTypes.FADE_IN_MOVE,
			duration: 2500,
			flipX: false,
			stopSpriteOnFinish: true,
			alpha: 1,
			endPositionXPercentage: true,
			endPositionX: 540
		}
	},
	{
		name: 'text-cloud-2',
		text: 'GEFELICITEERD HELD! KNAP STAALTJE WERK: JIJ HEBT ERVOOR GEZORGD DAT MEDE MET ONZE INFORMATIE DE JUISTE PERSOON IS GEVONDEN ÉN KAN WORDEN BERECHT.',
		hasTextCloud: 'centered',
		positionY: 60,
		positionX: 425,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 254,
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
		text: 'WIL JIJ JOUW TALENTEN VAKER INZETTEN? WIJ GAAN GRAAG MET JE IN GESPREK!',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'justid',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/EoD9Y3_ObbzVfFT--D403riW4RIIgagM2whneR2sPUPeG5yS6BSLKOhQmruNmQ4q/aRKRAzSyqktq8WT',
		link: 'https://www.werkenvoornederland.nl/organisaties/ministerie-van-justitie-en-veiligheid/justitiele-informatiedienst?utm_source=tweakersgame&utm_medium=game&utm_campaign=2022_tweakersgame&utm_term=tweakers_justid',
		positionY: 45,
		positionX: 430,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 235,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-4',
		text: 'BEKIJK ALLE CHALLENGES',
		hasTextCloud: 'vacancy-big',
		hasColor: '-green',
		positionY: 40,
		positionX: 40,
		fontSize: 10,
		lineHeight: 20,
		fill: '#298941',
		wordWrap: true,
		wordWrapWidth: 105,
		align: 'center',
		interaction: {
			type: types.TOGGLE_MENU
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
