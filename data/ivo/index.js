import sceneOne from '@/static/data/ivo/scene-1';
import sceneTwo from '@/static/data/ivo/scene-2';
import sceneThree from '@/static/data/ivo/scene-3';
import sceneFour from '@/static/data/ivo/scene-4';

export default [
	{
		id: 'ivo-scene-1',
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
		id: 'ivo-scene-2',
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
		id: 'ivo-scene-3',
		bgColorPrimary: '0x88798C',
		character: {
			animate: true,
			positionX: -50,
			centerPivot: true,
			flipX: false
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations
	},
	{
		id: 'ivo-scene-4',
		bgColorPrimary: '0x676767',
		character: {
			animate: false,
			positionX: 764,
			centerPivot: true,
			flipX: true
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations,
		isLastScene: true
	}
];
