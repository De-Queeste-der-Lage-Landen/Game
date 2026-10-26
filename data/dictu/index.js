import sceneOne from '@/static/data/dictu/scene-1';
import sceneTwo from '@/static/data/dictu/scene-2';
import sceneThree from '@/static/data/dictu/scene-3';
import sceneFour from '@/static/data/dictu/scene-4';

export default [
	{
		id: 'dictu-scene-1',
		bgColorPrimary: '0xAECADF',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneOne.elements,
		animations: sceneOne.animations
	},
	{
		id: 'dictu-scene-2',
		bgColorPrimary: '0x8EDCE1',
		character: {
			animate: true,
			positionX: -50,
			centerPivot: true,
			flipX: false
		},
		elements: sceneTwo.elements,
		animations: sceneTwo.animations
	},
	{
		id: 'dictu-scene-3',
		bgColorPrimary: '0x8EDCE1',
		character: {
			animate: false,
			positionX: 290,
			flipX: false,
			behindElement: 'dictu-desk-1'
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations,
		isLastScene: true
	},
	{
		id: 'dictu-scene-4',
		bgColorPrimary: '0x8EDCE1',
		character: {
			animate: false,
			positionX: 290,
			flipX: false,
			behindElement: 'dictu-desk-1'
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations,
		isLastScene: true
	}
];
