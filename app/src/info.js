/*
 * Copyright (c) 2022 MineEjo.
 * This file is part of Discord-Chess <https://github.com/MineEjo/Discord-Chess>.
 *
 * Discord-Chess is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Discord-Chess is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Discord-Chess. If not, see <http://www.gnu.org/licenses/>.
 */

const LINKS = {
	donate: 'https://nowpayments.io/donation/u032ch',
	github: 'https://github.com/MineEjo/Discord-Chess',
	discord: 'https://discord.gg/ZHpdPgBb54',
	oneChess24: 'https://chess24.com/en/profile/chesshedge',
	oneChess: 'https://www.chess.com/member/chesshedgeh',
	twoWebsite: '#', /* !TODO: Add link */
	twoGitHub: 'https://github.com/MineEjo'
};

const LANGUAGES = [
	/* The first basic */
	/* English */
	[
		'English', 'en', {
		name: 'Discord Chess',
		menu: 'Menu',
		menuClose: 'Close menu',
		home: 'Home',
		donate: 'Donate',
		sourceCode: 'Source Code',
		join: 'Join',
		headline: 'IMAGINE A PLACE…',
		subline: '…where you can become a member of the international chess community.',
		language: 'Language',
		interface: 'Interface',
		important: 'Important',
		notificationCookie: 'This website uses cookies to offer you the most up-to-date information. By accessing this site, you automatically agree to the processing of your cookies!',
		copyright: 'All rights reserved',
		bio1: 'Owner, Admin and Chessman (IM)',
		bio2: 'Programmer, designer, illustrator',
		nick1: 'u032',
		nick2: 'MineEjo',
		websiteChess24: 'Chess24',
		websiteChess: 'Chess',
		github: 'GitHub',
		website: 'Website'
	}
	],
	
	/* The rest are secondary */
	/* Finnish */
	[
		'Suomi', 'fi', {
		menu: 'Valikko',
		menuClose: 'Sulje valikko',
		home: 'Etusivu',
		donate: 'Lahjoita',
		sourceCode: 'Lähdekoodi',
		join: 'Liity',
		headline: 'KUVITTELE PAIKKA…',
		subline: '…jossa voit liittyä kansainvälisen shakkiyhteisön jäseneksi.',
		language: 'Kieli',
		interface: 'Liitäntä',
		important: 'Tärkeä',
		notificationCookie: 'Tämä verkkosivusto käyttää evästeitä, jotta voimme tarjota sinulle ajantasaisimmat tiedot. Käyttämällä tätä sivustoa hyväksyt automaattisesti evästeiden käsittelyn!',
		copyright: 'Kaikki oikeudet pidätetään',
		bio1: 'Omistaja, ylläpitäjä ja shakinpelaaja (IM)',
		bio2: 'Ohjelmoija, suunnittelija, taiteilija',
		website: 'Verkkosivusto'
	}
	],
	/* Russian */
	[
		'Русский', 'ru', {
		menu: 'Меню',
		menuClose: 'Закрыть меню',
		home: 'Основная',
		donate: 'Поддержка',
		sourceCode: 'Исходный код',
		join: 'Войти',
		headline: 'ПРЕДСТАВЬТЕ МЕСТО…',
		subline: '…где вы можете стать членом международного шахматного сообщества.',
		language: 'Язык',
		interface: 'Интерфейс',
		important: 'Важно',
		notificationCookie: 'Этот сайт использует файлы cookie, чтобы предложить вам самую актуальную информацию. Заходя на этот сайт, вы автоматически соглашаетесь на обработку файлов cookie!',
		copyright: 'Все права защищены',
		bio1: 'Владелец, админ и шахматист (IM)',
		bio2: 'Программист, дизайнер, художник',
		website: 'Веб-сайт'
	}
	],
	/* Ukraine */
	[
		'Українська', 'uk', {
		menu: 'Меню',
		menuClose: 'Закрити меню',
		home: 'Основна',
		donate: 'Підтримка',
		sourceCode: 'Вихідний код',
		join: 'Увійти',
		headline: 'УЯВИ МІСЦЕ…',
		subline: '…де ви можете стати членом міжнародного шахового товариства.',
		language: 'Мова',
		interface: 'Інтерфейс',
		important: 'Важливо',
		notificationCookie: 'Цей сайт використовує файли cookie, щоб запропонувати вам найактуальнішу інформацію. Заходячи на цей сайт, ви автоматично погоджуєтеся на обробку файлів cookie!',
		copyright: 'Всі права захищені',
		bio1: 'Власник, Адмін і шахіст (IM)',
		bio2: 'Програміст, дизайнер, художник',
		website: 'Веб-сайт'
	}
	]
];

const CHESS_BOARD = {
	letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
	numbers: ['1', '2', '3', '4', '5', '6', '7', '8'],
	emotions: [
		'?', '!!!', '!', ' :D', ' XD', ' >:)', ' :’-)', ' =)', ' :)', ' =3', ' :3', ' :P', ' :-/', ' :-|', ' ._.',
		' -_-', ' (* ^ ω ^)', ' (o^▽^o)', ' (o･ω･o)', ' (^人^)', ' ( ´ ω )', ' ╰(▔∀▔)╯', ' (✯◡✯)', ' (o˘◡˘o)', ' *О*',
		' *_*', ' о_О', ' :-E', ' :-<', ' :*)', ' [:]|||[:]', ' *:O)', ' (:\\/)', ' (MineEjo: **Keats**, stop what?!)',
		' (ಥ﹏ಥ)', ' ╮(￣_￣)╭', ' (¬‿¬ )', ' (´• ω •)ﾉ', ' (づ◡﹏◡)づ', ' (づ ◕‿◕ )づ', ' Krabi 🦀'
	]
};
