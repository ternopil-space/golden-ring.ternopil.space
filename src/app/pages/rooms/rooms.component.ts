import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

type RoomCard = {
	name: string;
	description: string;
	price: string;
	image: string;
	imageAlt: string;
};

type ContactLink = {
	label: string;
	href: string;
	description: string;
};

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent {
	protected readonly amenities = [
		'Власна ванна кімната',
		'Телевізор у номері',
		'Безкоштовний Wi-Fi',
		'Кондиціонер',
		'Парковка для гостей',
		'Двоспальне або два окремі ліжка',
		'Просторі категорії для сімейного відпочинку',
		'Комфортне проживання в центрі Тернополя',
	];

	protected readonly rooms: RoomCard[] = [
		{
			name: 'Стандарт / Стандарт покращений',
			description:
				'Комфортний номер для короткого або ділового перебування. Залежно від категорії доступне двоспальне ліжко або два окремі ліжка, власна ванна кімната, телевізор, безкоштовний Wi-Fi, кондиціонер і парковка для гостей.',
			price: 'від 1200-1300 грн/ніч',
			image: 'room/golden-ring-room-1.jpeg',
			imageAlt: 'Номер категорії Стандарт у готелі Golden Ring',
		},
		{
			name: 'Сімейний люкс',
			description:
				'Просторий номер площею близько 60 м² для сімейного відпочинку або довшого проживання. Має дві окремі кімнати, велике двоспальне ліжко, власну ванну кімнату, Wi-Fi та базові зручності для комфортного розміщення.',
			price: 'від 2700 грн/ніч',
			image: 'room/golden-ring-room-2.jpeg',
			imageAlt: 'Сімейний люкс у готелі Golden Ring',
		},
	];

	protected readonly contactLinks: ContactLink[] = [
		{
			label: 'Зателефонувати',
			href: 'tel:+380680707717',
			description: '+380 68 070 77 17',
		},
		{
			label: 'Сайт готелю',
			href: 'https://goldenringhotel.com.ua/',
			description: 'Офіційний сайт Golden Ring',
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/goldenring_hotel/',
			description: '@goldenring_hotel',
		},
	];
}
