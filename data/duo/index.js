import sceneOne from './scene-1';
import sceneTwo from './scene-2';
import sceneThree from './scene-3';
import sceneFour from './scene-4';
import sceneFive from './scene-5';
import sceneSix from './scene-6';

export default [
	{
		id: 'duo-scene-1',
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
		id: 'duo-scene-2',
		bgColorPrimary: '0xE3DCE7',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneTwo.elements,
		animations: sceneTwo.animations
	},
	{
		id: 'duo-scene-3',
		bgColorPrimary: '0xF7D9E7',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations
	},
	{
		id: 'duo-scene-4',
		bgColorPrimary: '0xFBEBD9',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations
	},
	{
		id: 'duo-scene-5',
		bgColorPrimary: '0xFBEBD9',
		character: {
			animate: false,
			positionX: 290,
			flipX: false,
			behindElement: 'duo-desk-second'
		},
		elements: sceneFive.elements,
		animations: sceneFive.animations
	},
	{
		id: 'duo-scene-6',
		bgColorPrimary: '0xFBEBD9',
		character: {
			animate: false,
			positionX: 290,
			flipX: false,
			behindElement: 'duo-desk-first'
		},
		elements: sceneSix.elements,
		animations: sceneSix.animations,
		isLastScene: true
	}
];
