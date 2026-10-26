import types from '@/static/data/types';

export default [
	{
		img: 'celebration-flags',
		positionY: 0,
		positionX: 15
	},
	{
		img: 'celebration-flags',
		positionY: 0,
		positionX: 253
	},
	{
		img: 'celebration-flags',
		positionY: 0,
		positionX: 515
	},
	{
		img: 'celebration-flags',
		positionY: 0,
		positionX: 748
	},
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
		img: 'rig-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		name: 'board-pubquiz',
		img: 'board-pubquiz',
		positionY: 120,
		positionX: 183
	},
	{
		name: 'rig-character-1',
		img: 'rig-character-1',
		positionY: 233,
		positionX: 242,
		centerPivot: true
	},
	{
		name: 'rig-character-7',
		img: 'rig-character-7',
		positionY: 231,
		positionX: 554
	},
	{
		name: 'rig-character-2',
		img: 'rig-character-2',
		positionY: 231,
		positionX: 520,
		centerPivot: true,
		flipX: true,
		hideElOnStart: true
	},
	{
		name: 'rig-character-8',
		img: 'rig-character-8',
		positionY: 231,
		positionX: 669
	},
	{
		name: 'rig-character-4',
		img: 'rig-character-4',
		positionY: 231,
		positionX: 637,
		centerPivot: true,
		flipX: true,
		hideElOnStart: true
	},
	{
		name: 'rig-character-9',
		img: 'rig-character-9',
		positionY: 231,
		positionX: 789
	},
	{
		name: 'rig-character-6',
		img: 'rig-character-6',
		positionY: 231,
		positionX: 737,
		hideElOnStart: true
	},
	{
		name: 'desk-team-data',
		img: 'desk-team-data',
		positionY: 268,
		positionX: 493,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-2'
		}
	},
	{
		name: 'text-cloud-2',
		text: 'WELKOM IN TEAM DATA! IK BEN SIMON EN IK BEN MOMENTEEL WERKZAAM ALS DATA ARCHITECT...',
		hasTextCloud: 'vacancy-big',
		hasChooseTeamBtn: true,
		positionY: 70,
		positionX: 480,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 194,
		align: 'center',
		hideElOnStart: true,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			stopAfter: true,
			endPositionX: 520,
			index: 'text-cloud-5',
			selectTeam: 'data'
		}
	},
	{
		name: 'desk-team-software',
		img: 'desk-team-software',
		positionY: 268,
		positionX: 610,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-3'
		}
	},
	{
		name: 'text-cloud-3',
		text: 'WELKOM IN TEAM SOFTWARE! IK BEN LARA EN IK BEN MOMENTEEL WERKZAAM ALS SOFTWARE ENGINEER...',
		hasTextCloud: 'vacancy-big',
		hasChooseTeamBtn: true,
		positionY: 70,
		positionX: 590,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 235,
		align: 'center',
		hideElOnStart: true,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			stopAfter: true,
			endPositionX: 637,
			index: 'text-cloud-5',
			selectTeam: 'software'
		}
	},
	{
		name: 'desk-team-security',
		img: 'desk-team-security',
		positionY: 268,
		positionX: 727,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-4'
		}
	},
	{
		name: 'text-cloud-4',
		text: 'WELKOM IN TEAM SECURITY! IK BEN EDWARD EN IK BEN MOMENTEEL WERKZAAM ALS SECURITY SPECIALIST...',
		hasTextCloud: 'vacancy-big',
		hasChooseTeamBtn: true,
		positionY: 70,
		positionX: 650,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 225,
		align: 'center',
		hideElOnStart: true,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			stopAfter: true,
			endPositionX: 757,
			index: 'text-cloud-5',
			selectTeam: 'security'
		}
	},
	{
		name: 'text-cloud-5',
		text: 'OKAY, IEDEREEN KLAAR? LET’S GO!',
		hasTextCloud: 'normal',
		positionY: 150,
		positionX: 182,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 154,
		align: 'center',
		hideElOnStart: true,
		interaction: {
			type: types.CLOSE_TEXT_CLOUD,
			pubQuiz: true,
			startGameAfterLoading: 'pubquiz',
			showLoadingScreen: false
		}
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		img: 'floor-rocks',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
