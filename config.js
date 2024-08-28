// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'anonuumne',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,
	timeZone: 'America/Fortaleza',

	// Greetings
	greetingMorning: 'Bom dia, po :)!',
	greetingAfternoon: 'Opa, boa tarde ;),',
	greetingEvening: 'Opa, noite,',
	greetingNight: 'Vou dormir!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '8b05d62206f459e1d298cbe5844d7d87', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'pt-BR', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '19.593',
	defaultLongitude: '-99.250',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'star',
			id: '1',
			links: [
				{
					name: 'z0mbi3 dots',
					link: 'https://github.com/gh0stzk/dotfiles',
				},
				{
					name: 'Arch Linux',
					link: 'https://archlinux.org/',
				},
				{
					name: 'Gemini',
					link: 'https://gemini.google.com/u/0/app',
				},
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'YouTube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'Instagram',
					link: 'https://www.instagram.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Telegram',
					link: 'https://web.telegram.org/k/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'square-user-round',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'r/unixporn',
					link: 'https://www.reddit.com/r/unixporn',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com/drive/u/2/folders/1QY_09bWGDHk2oCJQKxn52CTS-kkLKTlH',
				},
				{
					name: 'Figma',
					link: 'https://www.figma.com/files/team/1298334772112038703/recents-and-sharing/recently-viewed?fuid=1298334769958264777',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'iLoveIMG',
					link: 'https://www.iloveimg.com/pt/comprimir-imagem',
				},
				{
					name: 'Planilha',
					link: 'https://docs.google.com/spreadsheets/d/15doEHKRS6bG-GNY-9E6dlq5DB1MdMxbEvt6cu56DGTE/edit?gid=0#gid=0',
				},
				{
					name: 'Notion',
					link: 'https://www.notion.so/Terminal-6de4b54db7184cb78caa9d1a16ba6b99',
				},
				{
					name: 'Pinterest',
					link: 'https://br.pinterest.com/',
				},
			],
		},
	],
};
