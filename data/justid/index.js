import sceneOne from '@/static/data/justid/scene-1';
import sceneTwo from '@/static/data/justid/scene-2';
import sceneThree from '@/static/data/justid/scene-3';
import sceneFour from '@/static/data/justid/scene-4';
import sceneFive from '@/static/data/justid/scene-5';

export default [
	{
		id: 'justid-scene-1',
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
		id: 'justid-scene-2',
		bgColorPrimary: '0xD5AFEC',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneTwo.elements,
		animations: sceneTwo.animations
	},
	{
		id: 'justid-scene-3',
		bgColorPrimary: '0xD5AFEC',
		character: {
			animate: true,
			positionX: -50,
			flipX: false,
			behindElement: 'justid-desk-brown'
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations
	},
	{
		id: 'justid-scene-4',
		bgColorPrimary: '0xD5AFEC',
		character: {
			animate: false,
			positionX: 735,
			flipX: true,
			behindElement: 'justid-desk-brown'
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations
	},
	{
		id: 'justid-scene-5',
		bgColorPrimary: '0xD5AFEC',
		character: {
			animate: false,
			positionX: 735,
			flipX: true,
			behindElement: 'justid-desk-brown'
		},
		elements: sceneFive.elements,
		animations: sceneFive.animations,
		isLastScene: true
	}
];
