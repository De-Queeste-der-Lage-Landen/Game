import sceneOne from '@/static/data/aivd/scene-1';
import sceneTwo from '@/static/data/aivd/scene-2';
import sceneThree from '@/static/data/aivd/scene-3';
import sceneFour from '@/static/data/aivd/scene-4';
import sceneFive from '@/static/data/aivd/scene-5';
import sceneSix from '@/static/data/aivd/scene-6';

export default [
	{
		id: 'aivd-scene-1',
		bgColorPrimary: '0xAECADF',
		character: {
			animate: true,
			positionX: -50,
			endPositionX: 120,
			flipX: false
		},
		elements: sceneOne.elements,
		animations: sceneOne.animations
	},
	{
		id: 'aivd-scene-2',
		bgColorPrimary: '0x676767',
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
		id: 'aivd-scene-3',
		bgColorPrimary: '0x676767',
		character: {
			animate: false,
			positionX: 460,
			centerPivot: true,
			flipX: false
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations
	},
	{
		id: 'aivd-scene-4',
		bgColorPrimary: '0x4E4E4E',
		character: {
			animate: true,
			positionX: -50,
			centerPivot: true,
			flipX: false
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations
	},
	{
		id: 'aivd-scene-5',
		bgColorPrimary: '0x4E4E4E',
		character: {
			animate: false,
			positionX: 460,
			centerPivot: true,
			flipX: true,
			behindElement: 'aivd-desk'
		},
		elements: sceneFive.elements,
		animations: sceneFive.animations
	},
	{
		id: 'aivd-scene-6',
		bgColorPrimary: '0xAECADF',
		character: {
			animate: false,
			positionX: 552,
			centerPivot: true,
			flipX: true
		},
		elements: sceneSix.elements,
		animations: sceneSix.animations,
		isLastScene: true
	}
];
