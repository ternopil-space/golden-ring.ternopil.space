import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface GalleryPhoto {
	src: string;
	alt: string;
}

@Component({
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	protected readonly photos: GalleryPhoto[] = [
		{ src: 'gallery/golden-ring-01.jpeg', alt: 'Зовнішній вигляд готелю Golden Ring' },
		{ src: 'gallery/golden-ring-02.jpeg', alt: 'Інтерєр та зона для гостей у Golden Ring' },
		{ src: 'gallery/golden-ring-03.jpeg', alt: 'Номер у готелі Golden Ring' },
		{ src: 'gallery/golden-ring-04.jpeg', alt: 'Інтерєр номера в Golden Ring' },
		{ src: 'gallery/golden-ring-05.jpeg', alt: 'Ліжко та зона відпочинку в номері Golden Ring' },
		{ src: 'gallery/golden-ring-06.jpeg', alt: 'Світлий номер готелю Golden Ring' },
		{ src: 'gallery/golden-ring-07.jpeg', alt: 'Облаштування номера в Golden Ring' },
		{ src: 'gallery/golden-ring-08.jpeg', alt: 'Ще один номер для гостей у Golden Ring' },
		{ src: 'gallery/golden-ring-09.jpeg', alt: 'Деталі інтерєру в номері Golden Ring' },
		{ src: 'gallery/golden-ring-10.jpeg', alt: 'Простір для проживання у Golden Ring' },
		{ src: 'gallery/golden-ring-11.jpeg', alt: 'Номер із меблями та декором у Golden Ring' },
		{ src: 'gallery/golden-ring-12.jpeg', alt: 'Зона відпочинку в готелі Golden Ring' },
		{ src: 'gallery/golden-ring-13.jpeg', alt: 'Ресторанна або сніданкова зона Golden Ring' },
		{ src: 'gallery/golden-ring-14.jpeg', alt: 'Сервірування або їжа в Golden Ring' },
		{ src: 'gallery/golden-ring-15.jpeg', alt: 'Ще один кадр ресторанної частини Golden Ring' },
		{ src: 'gallery/golden-ring-16.jpeg', alt: 'Готельний інтерєр Golden Ring' },
		{ src: 'gallery/golden-ring-17.jpeg', alt: 'Фото деталей номеру Golden Ring' },
		{ src: 'gallery/golden-ring-18.jpeg', alt: 'Номер або апартаменти в Golden Ring' },
		{ src: 'gallery/golden-ring-19.jpeg', alt: 'Комфортний простір для гостей у Golden Ring' },
		{ src: 'gallery/golden-ring-20.jpeg', alt: 'Ще одне фото готелю Golden Ring у Тернополі' },
	];

	protected readonly selectedPhoto = signal<GalleryPhoto | null>(null);

	protected openPhoto(photo: GalleryPhoto) {
		this.selectedPhoto.set(photo);
	}

	protected closePhoto() {
		this.selectedPhoto.set(null);
	}
}
