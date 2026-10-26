export default [
	// level 1
	{
		number: 1,
		layout: [
			{
				type: 'bricks'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'bricks'
			},
			{
				type: 'road',
				hasDottedLine: true
			},
			{
				type: 'road',
				hasSolidLine: true
			},
			{
				type: 'road',
				hasDottedLine: true
			},
			{
				type: 'road'
			},
			{
				type: 'bricks'
			}
		],
		obstacles: [
			// row 2 - boats
			{ type: 'boat-1', speed: 1, direction: 'left', row: 2, initialPosition: 10, class: 'frogger__boat' },
			{ type: 'boat-1', speed: 1, direction: 'left', row: 2, initialPosition: 140, class: 'frogger__boat' },
			{ type: 'boat-1', speed: 1, direction: 'left', row: 2, initialPosition: 265, class: 'frogger__boat' },

			// row 3 - boats
			{ type: 'boat-2', speed: 1, direction: 'right', row: 3, initialPosition: -10, class: 'frogger__boat' },
			{ type: 'boat-3', speed: 1, direction: 'right', row: 3, initialPosition: 96, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 1, direction: 'right', row: 3, initialPosition: 300, class: 'frogger__boat' },

			// row 4 - boats
			{ type: 'boat-4', speed: 1, direction: 'left', row: 4, initialPosition: -45, class: 'frogger__boat' },
			{ type: 'boat-5', speed: 1, direction: 'left', row: 4, initialPosition: 170, class: 'frogger__boat' },
			{ type: 'boat-4', speed: 1, direction: 'left', row: 4, initialPosition: 280, class: 'frogger__boat' },

			// row 5 - boats
			{ type: 'boat-6', speed: 1, direction: 'right', row: 5, initialPosition: 10, class: 'frogger__boat' },
			{ type: 'boat-6', speed: 1, direction: 'right', row: 5, initialPosition: 140, class: 'frogger__boat' },
			{ type: 'boat-6', speed: 1, direction: 'right', row: 5, initialPosition: 265, class: 'frogger__boat' },

			// row 7 - cars
			{ type: 'car-1', speed: 1.2, direction: 'left', row: 7, initialPosition: 55, class: 'frogger__car' },
			{ type: 'car-2', speed: 1.2, direction: 'left', row: 7, initialPosition: 160, class: 'frogger__car' },
			{ type: 'car-3', speed: 1.2, direction: 'left', row: 7, initialPosition: 280, class: 'frogger__car' },

			// row 8 - cars
			{ type: 'car-4', speed: 1.6, direction: 'left', row: 8, initialPosition: 25, class: 'frogger__car' },
			{ type: 'car-5', speed: 1.6, direction: 'left', row: 8, initialPosition: 135, class: 'frogger__car' },
			{ type: 'truck-1', speed: 1.6, direction: 'left', row: 8, initialPosition: 240, class: 'frogger__car' },

			// row 9 - cars
			{ type: 'truck-2', speed: 1.2, direction: 'right', row: 9, initialPosition: 15, class: 'frogger__car' },
			{ type: 'car-6', speed: 1.2, direction: 'right', row: 9, initialPosition: 175, class: 'frogger__car' },
			{ type: 'car-7', speed: 1.2, direction: 'right', row: 9, initialPosition: 280, class: 'frogger__car' },

			// row 10 - cars
			{ type: 'car-8', speed: 1.6, direction: 'right', row: 10, initialPosition: 50, class: 'frogger__car' },
			{ type: 'car-9', speed: 1.6, direction: 'right', row: 10, initialPosition: 160, class: 'frogger__car' },
			{ type: 'car-10', speed: 1.6, direction: 'right', row: 10, initialPosition: 270, class: 'frogger__car' }
		]
	},

	// level 2
	{
		number: 2,
		layout: [
			{
				type: 'bricks'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'bricks'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'bricks'
			}
		],
		obstacles: [
			// row 2 - boats
			{ type: 'boat-1', speed: 1.6, direction: 'left', row: 2, initialPosition: 10, class: 'frogger__boat' },
			{ type: 'boat-1', speed: 1.6, direction: 'left', row: 2, initialPosition: 140, class: 'frogger__boat' },
			{ type: 'boat-1', speed: 1.6, direction: 'left', row: 2, initialPosition: 265, class: 'frogger__boat' },

			// row 3 - boats
			{ type: 'boat-2', speed: 2, direction: 'right', row: 3, initialPosition: -10, class: 'frogger__boat' },
			{ type: 'boat-3', speed: 2, direction: 'right', row: 3, initialPosition: 96, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 2, direction: 'right', row: 3, initialPosition: 300, class: 'frogger__boat' },

			// row 4 - boats
			{ type: 'boat-4', speed: 1.6, direction: 'left', row: 4, initialPosition: -45, class: 'frogger__boat' },
			{ type: 'boat-5', speed: 1.6, direction: 'left', row: 4, initialPosition: 170, class: 'frogger__boat' },
			{ type: 'boat-4', speed: 1.6, direction: 'left', row: 4, initialPosition: 280, class: 'frogger__boat' },

			// row 5 - boats
			{ type: 'boat-6', speed: 2, direction: 'right', row: 5, initialPosition: 10, class: 'frogger__boat' },
			{ type: 'boat-6', speed: 2, direction: 'right', row: 5, initialPosition: 140, class: 'frogger__boat' },
			{ type: 'boat-6', speed: 2, direction: 'right', row: 5, initialPosition: 265, class: 'frogger__boat' },

			// row 7 - boats
			{ type: 'boat-1', speed: 1, direction: 'left', row: 7, initialPosition: 10, class: 'frogger__boat' },
			{ type: 'boat-1', speed: 1, direction: 'left', row: 7, initialPosition: 140, class: 'frogger__boat' },
			{ type: 'boat-1', speed: 1, direction: 'left', row: 7, initialPosition: 265, class: 'frogger__boat' },

			// row 8 - boats
			{ type: 'boat-2', speed: 1, direction: 'right', row: 8, initialPosition: -10, class: 'frogger__boat' },
			{ type: 'boat-3', speed: 1, direction: 'right', row: 8, initialPosition: 96, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 1, direction: 'right', row: 8, initialPosition: 300, class: 'frogger__boat' },

			// row 9 - boats
			{ type: 'boat-4', speed: 1, direction: 'left', row: 9, initialPosition: -45, class: 'frogger__boat' },
			{ type: 'boat-5', speed: 1, direction: 'left', row: 9, initialPosition: 170, class: 'frogger__boat' },
			{ type: 'boat-4', speed: 1, direction: 'left', row: 9, initialPosition: 280, class: 'frogger__boat' },

			// row 10 - boats
			{ type: 'boat-6', speed: 1, direction: 'right', row: 10, initialPosition: 10, class: 'frogger__boat' },
			{ type: 'boat-6', speed: 1, direction: 'right', row: 10, initialPosition: 140, class: 'frogger__boat' },
			{ type: 'boat-6', speed: 1, direction: 'right', row: 10, initialPosition: 265, class: 'frogger__boat' }
		]
	},

	// level 3
	{
		number: 3,
		layout: [
			{
				type: 'bricks'
			},
			{
				type: 'road',
				hasDottedLine: true
			},
			{
				type: 'road',
				hasSolidLine: true
			},
			{
				type: 'road',
				hasDottedLine: true
			},
			{
				type: 'road'
			},
			{
				type: 'bricks'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'water'
			},
			{
				type: 'bricks'
			}
		],
		obstacles: [
			// row 7 - cars
			{ type: 'car-1', speed: 1.2, direction: 'left', row: 2, initialPosition: 55, class: 'frogger__car' },
			{ type: 'car-2', speed: 1.2, direction: 'left', row: 2, initialPosition: 160, class: 'frogger__car' },
			{ type: 'car-3', speed: 1.2, direction: 'left', row: 2, initialPosition: 280, class: 'frogger__car' },

			// row 8 - cars
			{ type: 'car-4', speed: 2.3, direction: 'left', row: 3, initialPosition: 25, class: 'frogger__car' },
			{ type: 'car-5', speed: 2.3, direction: 'left', row: 3, initialPosition: 135, class: 'frogger__car' },
			{ type: 'truck-1', speed: 2.3, direction: 'left', row: 3, initialPosition: 240, class: 'frogger__car' },

			// row 9 - cars
			{ type: 'truck-2', speed: 1.2, direction: 'right', row: 4, initialPosition: 15, class: 'frogger__car' },
			{ type: 'car-6', speed: 1.2, direction: 'right', row: 4, initialPosition: 175, class: 'frogger__car' },
			{ type: 'car-7', speed: 1.2, direction: 'right', row: 4, initialPosition: 280, class: 'frogger__car' },

			// row 10 - cars
			{ type: 'car-8', speed: 2.3, direction: 'right', row: 5, initialPosition: 50, class: 'frogger__car' },
			{ type: 'car-9', speed: 2.3, direction: 'right', row: 5, initialPosition: 160, class: 'frogger__car' },
			{ type: 'car-10', speed: 2.3, direction: 'right', row: 5, initialPosition: 270, class: 'frogger__car' },

			// row 7 - boats
			{ type: 'boat-5', speed: 2, direction: 'left', row: 7, initialPosition: 30, class: 'frogger__boat' },
			{ type: 'boat-5', speed: 2, direction: 'left', row: 7, initialPosition: 150, class: 'frogger__boat' },
			{ type: 'boat-5', speed: 2, direction: 'left', row: 7, initialPosition: 265, class: 'frogger__boat' },

			// row 8 - boats
			{ type: 'boat-2', speed: 2.3, direction: 'right', row: 8, initialPosition: -10, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 2.3, direction: 'right', row: 8, initialPosition: 100, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 2.3, direction: 'right', row: 8, initialPosition: 205, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 2.3, direction: 'right', row: 8, initialPosition: 300, class: 'frogger__boat' },

			// row 9 - boats
			{ type: 'boat-5', speed: 2, direction: 'left', row: 9, initialPosition: 30, class: 'frogger__boat' },
			{ type: 'boat-5', speed: 2, direction: 'left', row: 9, initialPosition: 150, class: 'frogger__boat' },
			{ type: 'boat-5', speed: 2, direction: 'left', row: 9, initialPosition: 265, class: 'frogger__boat' },

			// row 10 - boats
			{ type: 'boat-2', speed: 2.3, direction: 'right', row: 10, initialPosition: -10, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 2.3, direction: 'right', row: 10, initialPosition: 100, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 2.3, direction: 'right', row: 10, initialPosition: 205, class: 'frogger__boat' },
			{ type: 'boat-2', speed: 2.3, direction: 'right', row: 10, initialPosition: 300, class: 'frogger__boat' }
		]
	}
];
