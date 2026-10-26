export default {
	metadata: {
		report_info: {
			report_id: [],
			report_language: 'nl',
			report_time_coordinate: 'local',
			report_dtg_issued: '2022-02-18T14:03+01:00',
			report_start_valid_time: '2022-02-18T14:03+01:00',
			report_end_valid_time: '2022-02-20T14:00:00+01:00',
			report_issued_by: 'KNMI',
			report_forecaster_id: 'KNMI cube generator',
			report_additional_information: '3',
			report_disclaimer: 'http://www.knmi.nl/waarschuwingen_en_verwachtingen/disclaimer.html',
			report_credit: 'http://www.knmi.nl',
			report_credit_logo: 'URL KNMI'
		},
		report_structure: {
			report_languages: {
				report_language_def: {
					report_language_id: 'nl',
					report_language_descr: 'string'
				}
			},
			report_locations: [
				{
					location_id: 'WAE',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Waddeneilanden',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'GR',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Groningen',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'FR',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Friesland',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'DR',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Drenthe',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'NH',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Noord-Holland',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'FL',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Flevoland',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'OV',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Overijssel',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'GL',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Gelderland',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'UT',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Utrecht',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'ZH',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Zuid-Holland',
							text_data: 'RED'
						}
					}
				},
				{
					location_id: 'ZE',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Zeeland',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'NB',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Noord-Brabant',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'LB',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Limburg',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'WAD',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Waddenzee',
							text_data: 'GREEN'
						}
					}
				},
				{
					location_id: 'IJG',
					location_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'IJsselmeergebied',
							text_data: 'GREEN'
						}
					}
				}
			],
			report_phenomena: [
				{
					phenomenon_id: 'LT',
					phenomenon_icon: [],
					report_phenomenon_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Onweersbuien',
							text_data: 'GREEN'
						}
					}
				},
				{
					phenomenon_id: 'FX',
					phenomenon_icon: [],
					report_phenomenon_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Windstoten',
							text_data: 'GREEN'
						}
					}
				},
				{
					phenomenon_id: 'IC',
					phenomenon_icon: [],
					report_phenomenon_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Sneeuw en gladheid',
							text_data: 'GREEN'
						}
					}
				},
				{
					phenomenon_id: 'RR',
					phenomenon_icon: [],
					report_phenomenon_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Zware regen',
							text_data: 'GREEN'
						}
					}
				},
				{
					phenomenon_id: 'VV',
					phenomenon_icon: [],
					report_phenomenon_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Zicht',
							text_data: 'GREEN'
						}
					}
				},
				{
					phenomenon_id: 'TX',
					phenomenon_icon: [],
					report_phenomenon_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Temperatuur',
							text_data: 'GREEN'
						}
					}
				},
				{
					phenomenon_id: 'WS',
					phenomenon_icon: [],
					report_phenomenon_descr: {
						text: {
							text_language_id: 'NL',
							text_header: 'Hozen',
							text_data: 'GREEN'
						}
					}
				}
			],
			report_criteria: [
				{
					criterion_id: 'FX000',
					color_id: 'GREEN',
					criterion_descr: 'Geen waarschuwing'
				},
				{
					criterion_id: 'FX001',
					color_id: 'YELLOW',
					criterion_descr: '75 km per uur. Kust, winter: 90 km per uur'
				},
				{
					criterion_id: 'FX002',
					color_id: 'ORANGE',
					criterion_descr: '100 km per uur. Kust, winter:120 km per uur'
				},
				{
					criterion_id: 'FX003',
					color_id: 'RED',
					criterion_descr: 'Weeralarm voor windstoten op basis van impactanalyse'
				},
				{
					criterion_id: 'HB000',
					color_id: 'GREEN',
					criterion_descr: []
				},
				{
					criterion_id: 'IC000',
					color_id: 'GREEN',
					criterion_descr: 'Geen waarschuwing'
				},
				{
					criterion_id: 'IC001',
					color_id: 'YELLOW',
					criterion_descr:
						'Lokale gladheid door op-, aan- of bevriezing van natte weggedeelten, hagel, sneeuwresten of lokale ijzel'
				},
				{
					criterion_id: 'IC002',
					color_id: 'ORANGE',
					criterion_descr: 'Op uitgebreide schaal gladheid door ijzel of bevriezing'
				},
				{
					criterion_id: 'IC003',
					color_id: 'YELLOW',
					criterion_descr: 'Tot 5 cm sneeuw in 6 uur'
				},
				{
					criterion_id: 'IC004',
					color_id: 'ORANGE',
					criterion_descr: '5-15 cm sneeuw in 6 uur'
				},
				{
					criterion_id: 'IC005',
					color_id: 'YELLOW',
					criterion_descr: 'Tot 3 cm sneeuw in 1 uur'
				},
				{
					criterion_id: 'IC006',
					color_id: 'ORANGE',
					criterion_descr: '3-5 cm sneeuw in 1 uur'
				},
				{
					criterion_id: 'IC007',
					color_id: 'ORANGE',
					criterion_descr: 'Sneeuwval en/of driftsneeuw (> 40 km per uur), leidend tot sneeuwduinen'
				},
				{
					criterion_id: 'IC008',
					color_id: 'RED',
					criterion_descr: 'Weeralarm voor sneeuw en gladheid op basis van impactanalyse'
				},
				{
					criterion_id: 'LT000',
					color_id: 'GREEN',
					criterion_descr: 'Geen waarschuwing'
				},
				{
					criterion_id: 'LT001',
					color_id: 'YELLOW',
					criterion_descr: 'Lokale onweersbuien met: (zware) windstoten (> 60 km/uur)'
				},
				{
					criterion_id: 'LT002',
					color_id: 'YELLOW',
					criterion_descr: 'Lokale onweersbuien met: (zware) windstoten (> 60 km/uur) en hagel (tot 2 cm)'
				},
				{
					criterion_id: 'LT003',
					color_id: 'YELLOW',
					criterion_descr:
						'Lokale onweersbuien met: (zware) windstoten (> 60 km/uur) en lokaal veel neerslag  (> 30 mm in 1 uur)'
				},
				{
					criterion_id: 'LT004',
					color_id: 'YELLOW',
					criterion_descr:
						'Lokale onweersbuien met: (zware) windstoten (> 60 km/uur) en lokaal veel neerslag (> 30 mm in 1 uur) en hagel (tot 2 cm)'
				},
				{
					criterion_id: 'LT005',
					color_id: 'ORANGE',
					criterion_descr: 'Georganiseerde onweersbuien met: (zeer)zware windstoten (> 75 km/uur)'
				},
				{
					criterion_id: 'LT006',
					color_id: 'ORANGE',
					criterion_descr:
						'Georganiseerde onweersbuien met: (zeer)zware windstoten (> 75 km/uur) en grote hagel (2-4 cm)'
				},
				{
					criterion_id: 'LT007',
					color_id: 'ORANGE',
					criterion_descr:
						'Georganiseerde onweersbuien met: (zeer)zware windstoten (> 75 km/uur) en lokaal veel neerslag (>50 mm in 1 uur)'
				},
				{
					criterion_id: 'LT008',
					color_id: 'ORANGE',
					criterion_descr:
						'Georganiseerde onweersbuien met: (zeer)zware windstoten (> 75 km/uur) en lokaal veel neerslag (>50 mm in 1 uur) en grote hagel (2-4 cm)'
				},
				{
					criterion_id: 'LT009',
					color_id: 'YELLOW',
					criterion_descr: 'Lokale onweersbuien met: lokaal veel neerslag (> 30 mm in 1 uur)'
				},
				{
					criterion_id: 'LT010',
					color_id: 'YELLOW',
					criterion_descr:
						'Lokale onweersbuien met: lokaal veel neerslag (> 30 mm in 1 uur) en hagel (tot 2 cm)'
				},
				{
					criterion_id: 'LT011',
					color_id: 'ORANGE',
					criterion_descr: 'Georganiseerde onweersbuien met: lokaal veel neerslag (>50 mm in 1 uur)'
				},
				{
					criterion_id: 'LT012',
					color_id: 'ORANGE',
					criterion_descr:
						'Georganiseerde onweersbuien met: lokaal veel neerslag (>50 mm in 1 uur) en grote hagel (2-4 cm)'
				},
				{
					criterion_id: 'LT013',
					color_id: 'YELLOW',
					criterion_descr: 'Lokale onweersbuien met: hagel (tot 2 cm)'
				},
				{
					criterion_id: 'LT014',
					color_id: 'ORANGE',
					criterion_descr: 'Georganiseerde onweersbuien met: grote hagel (2-4 cm)'
				},
				{
					criterion_id: 'LT015',
					color_id: 'RED',
					criterion_descr: 'Weeralarm voor onweersbuien op basis van impactanalyse'
				},
				{
					criterion_id: 'RR000',
					color_id: 'GREEN',
					criterion_descr: 'Geen waarschuwing'
				},
				{
					criterion_id: 'RR001',
					color_id: 'YELLOW',
					criterion_descr: 'Verkeershinder door aquaplaning, of > 50 mm in 24 uur'
				},
				{
					criterion_id: 'RR002',
					color_id: 'ORANGE',
					criterion_descr: '> 75 mm in 24 uur'
				},
				{
					criterion_id: 'RR003',
					color_id: 'RED',
					criterion_descr: 'Weeralarm voor zware regen op basis van impactanalyse'
				},
				{
					criterion_id: 'TX000',
					color_id: 'GREEN',
					criterion_descr: 'Geen waarschuwing'
				},
				{
					criterion_id: 'TX001',
					color_id: 'YELLOW',
					criterion_descr: 'Nationaal Hitteplan actief, na consultatie RIVM'
				},
				{
					criterion_id: 'TX002',
					color_id: 'YELLOW',
					criterion_descr: '1 dag met een TX > 35'
				},
				{
					criterion_id: 'TX003',
					color_id: 'ORANGE',
					criterion_descr: 'Drie aaneengesloten dagen TX > 34 of 2 dagen TX > 36 of 1 dag TX > 38'
				},
				{
					criterion_id: 'TX004',
					color_id: 'RED',
					criterion_descr: 'Weeralarm voor extreem hoge temperaturen op basis van impactanalyse'
				},
				{
					criterion_id: 'TX005',
					color_id: 'YELLOW',
					criterion_descr: 'Windchill < -15'
				},
				{
					criterion_id: 'TX006',
					color_id: 'ORANGE',
					criterion_descr: 'Windchill < -20'
				},
				{
					criterion_id: 'TX007',
					color_id: 'RED',
					criterion_descr: 'Weeralarm voor extreem lage temperaturen op basis van impactanalyse'
				},
				{
					criterion_id: 'VV000',
					color_id: 'GREEN',
					criterion_descr: 'Geen waarschuwing'
				},
				{
					criterion_id: 'VV001',
					color_id: 'YELLOW',
					criterion_descr: '< 200 m'
				},
				{
					criterion_id: 'VV002',
					color_id: 'ORANGE',
					criterion_descr: '< 10 m'
				},
				{
					criterion_id: 'VV003',
					color_id: 'RED',
					criterion_descr: 'Weeralarm voor zicht op basis van impactanalyse'
				},
				{
					criterion_id: 'WS000',
					color_id: 'GREEN',
					criterion_descr: 'Geen waarschuwing'
				},
				{
					criterion_id: 'WS001',
					color_id: 'YELLOW',
					criterion_descr: 'Bij waarneming (geen standaard tijdsduur)'
				}
			],
			report_colors: [
				{
					color_id: 'GRAY',
					color_hex: '#888888',
					color_icon: 'gray.gif',
					color_descr: [
						{
							text_language_id: 'NL',
							text_header: 'Grijs',
							text_data: []
						},
						{
							text_language_id: 'EN',
							text_header: 'Gray',
							text_data: []
						}
					]
				},
				{
					color_id: 'GREEN',
					color_hex: '#00FF00',
					color_icon: 'green.gif',
					color_descr: [
						{
							text_language_id: 'NL',
							text_header: 'Groen',
							text_data: []
						},
						{
							text_language_id: 'EN',
							text_header: 'Green',
							text_data: []
						}
					]
				},
				{
					color_id: 'YELLOW',
					color_hex: '#FFFF00',
					color_icon: 'yellow.gif',
					color_descr: [
						{
							text_language_id: 'NL',
							text_header: 'Geel',
							text_data: []
						},
						{
							text_language_id: 'EN',
							text_header: 'Yellow',
							text_data: []
						}
					]
				},
				{
					color_id: 'ORANGE',
					color_hex: '#FF8000',
					color_icon: 'orange.gif',
					color_descr: [
						{
							text_language_id: 'NL',
							text_header: 'Oranje',
							text_data: []
						},
						{
							text_language_id: 'EN',
							text_header: 'Orange',
							text_data: []
						}
					]
				},
				{
					color_id: 'RED',
					color_hex: '#FF0000',
					color_icon: 'red.gif',
					color_descr: [
						{
							text_language_id: 'NL',
							text_header: 'Rood',
							text_data: []
						},
						{
							text_language_id: 'EN',
							text_header: 'Red',
							text_data: []
						}
					]
				},
				{
					color_id: 'BLACK',
					color_hex: '#000000',
					color_icon: 'black.gif',
					color_descr: [
						{
							text_language_id: 'NL',
							text_header: 'Zwart',
							text_data: []
						},
						{
							text_language_id: 'EN',
							text_header: 'Black',
							text_data: []
						}
					]
				}
			],
			report_timeframe: {
				report_valid_period: '48:00:00.00',
				report_increment_period: '01:00:00.00'
			}
		}
	}
};
