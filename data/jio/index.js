import sceneOne from '@/static/data/jio/scene-1';
import sceneTwo from '@/static/data/jio/scene-2';
import sceneThree from '@/static/data/jio/scene-3';
import sceneFour from '@/static/data/jio/scene-4';

export default [
	{
		id: 'jio-scene-1',
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
		id: 'jio-scene-2',
		bgColorPrimary: '0x89AAD5',
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
		id: 'jio-scene-3',
		bgColorPrimary: '0x89AAD5',
		character: {
			animate: false,
			positionX: 555,
			flipX: false,
			behindElement: 'jio-desk-1'
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations,
		isLastScene: true
	},
	{
		id: 'jio-scene-4',
		bgColorPrimary: '0x89AAD5',
		character: {
			animate: false,
			positionX: 555,
			flipX: false,
			behindElement: 'jio-desk-1'
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations,
		isLastScene: true
	}
];
