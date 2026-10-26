export default [
	{
		id: 'data',
		questions: [
			{
				question: 'Welke fields of knowledge hoort niet bij de DAMA DMBOK?',
				answers: [
					{
						answer: 'Data Architectuur',
						correct: false
					},
					{
						answer: 'Data Security',
						correct: false
					},
					{
						answer: 'Data Schuld',
						correct: true
					},
					{
						answer: 'Metadata Management',
						correct: false
					}
				]
			},
			{
				question: 'Welke toetst of algoritmen inbreuk maken op mensenrechten?',
				answers: [
					{
						answer: 'IAMA',
						correct: true
					},
					{
						answer: 'DPIA',
						correct: false
					},
					{
						answer: 'BIA',
						correct: false
					},
					{
						answer: 'DTIA',
						correct: false
					}
				]
			},
			{
				question: 'Wat is geen tool om een model beter uitlegbaar te maken?',
				answers: [
					{
						answer: 'Lime',
						correct: false
					},
					{
						answer: 'Sheppy',
						correct: false
					},
					{
						answer: 'Crappy',
						correct: true
					},
					{
						answer: 'Counterfactuals',
						correct: false
					}
				]
			},
			{
				question: 'Jullie ML model gaat in productie, wat doe je als eerst?',
				answers: [
					{
						answer: 'Impact assesments',
						correct: true
					},
					{
						answer: 'Performance check',
						correct: false
					},
					{
						answer: 'MLOps inrichten',
						correct: false
					},
					{
						answer: 'Verwachting van de klant managen',
						correct: false
					}
				]
			},
			{
				question: 'Welke van de volgende tools is geen big data maar een Pokémon?',
				answers: [
					{
						answer: 'Tokutek',
						correct: false
					},
					{
						answer: 'Gorebyss',
						correct: true
					},
					{
						answer: 'Azkaban',
						correct: false
					},
					{
						answer: 'Titan',
						correct: false
					}
				]
			}
		]
	},
	{
		id: 'software',
		questions: [
			{
				question: 'Wat is geen principe van het DevOps Manifesto?',
				answers: [
					{
						answer: 'Alles is code',
						correct: false
					},
					{
						answer: 'Het team reflecteert vaak',
						correct: false
					},
					{
						answer: 'Codeurs doen ook aan onderhoud',
						correct: true
					},
					{
						answer: 'Alles is observeerbaar',
						correct: false
					}
				]
			},
			{
				question: 'Welk command in Vim gebruik je om op te slaan en af te sluiten?',
				answers: [
					{
						answer: ':wq',
						correct: true
					},
					{
						answer: ':x',
						correct: false
					},
					{
						answer: 'ESC',
						correct: false
					},
					{
						answer: '^c',
						correct: false
					}
				]
			},
			{
				question: 'Met welk bash command kom je erachter of je een database verwijderd hebt?',
				answers: [
					{
						answer: '`history | grep -i TRUNCATE`',
						correct: false
					},
					{
						answer: '`history > hist.txt`',
						correct: false
					},
					{
						answer: '`history | grep -i DROP`',
						correct: false
					},
					{
						answer: 'Geen, kijk in de database logs',
						correct: true
					}
				]
			},
			{
				question: 'Wat is geen voordeel van containerisatie?',
				answers: [
					{
						answer: 'Isolation',
						correct: false
					},
					{
						answer: 'Reproduceerbaarheid',
						correct: false
					},
					{
						answer: 'Portabiliteit',
						correct: false
					},
					{
						answer: 'Opschaling',
						correct: true
					}
				]
			},
			{
				question: 'Wat is de meest populaire linux distro voor virtualisatie in de cloud?',
				answers: [
					{
						answer: 'Ubuntu',
						correct: true
					},
					{
						answer: 'Debian',
						correct: false
					},
					{
						answer: 'Kubuntu',
						correct: false
					},
					{
						answer: 'Centos',
						correct: false
					}
				]
			}
		]
	},
	{
		id: 'security',
		questions: [
			{
				question: 'Wat is een kenmerk van het Zero Trust Security Model?',
				answers: [
					{
						answer: 'Overal twee factor authorizatie',
						correct: false
					},
					{
						answer: 'Controls zitten in de netwerklaag',
						correct: false
					},
					{
						answer: 'Geen VPN meer nodig',
						correct: true
					},
					{
						answer: 'Alleen specifieke logins mogelijk',
						correct: false
					}
				]
			},
			{
				question: 'Waarom is het whitelisten van 0.0.0.0/0 een slecht idee?',
				answers: [
					{
						answer: 'Het geeft toegang tot alle IPs',
						correct: true
					},
					{
						answer: 'Geeft toegang tot alle interne IPs',
						correct: false
					},
					{
						answer: 'Er is helemaal niks mis mee',
						correct: false
					},
					{
						answer: 'Geeft alleen toegang tot 0.0.0.0',
						correct: false
					}
				]
			},
			{
				question: 'Welke beschrijving past het beste bij wat een bastion host is?',
				answers: [
					{
						answer: 'Een server tussen jou en de klant',
						correct: false
					},
					{
						answer: 'Een sever tegen DDoS',
						correct: false
					},
					{
						answer: 'Een proxy server',
						correct: false
					},
					{
						answer: 'Een loadbalancer met security',
						correct: true
					}
				]
			},
			{
				question: 'Welk principe speelt een belangrijke rol in data security?',
				answers: [
					{
						answer: 'Least Privilege',
						correct: true
					},
					{
						answer: 'Trust Nobody',
						correct: false
					},
					{
						answer: 'Minimal multiple factor authentication',
						correct: false
					},
					{
						answer: 'Classify your data',
						correct: false
					}
				]
			},
			{
				question: 'Hybride cloud maakt security lastiger, hoezo?',
				answers: [
					{
						answer: 'Een ingewikkeld virtueel network',
						correct: false
					},
					{
						answer: 'Meer mogelijke ingangen',
						correct: false
					},
					{
						answer: 'IAM is nodig om het te managen',
						correct: true
					},
					{
						answer: 'Iedereen moet security kennen',
						correct: false
					}
				]
			}
		]
	}
];
