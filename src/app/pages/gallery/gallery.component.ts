import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@wawjs/ngx-translate';
import { LanguageService } from '../../feature/language/language.service';

interface GalleryPhoto {
	src: string;
	alt: string;
}

@Component({
	standalone: true,
	imports: [TranslatePipe],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	private readonly _translateService = inject(TranslateService);
	private readonly _languageService = inject(LanguageService);

	protected readonly languageTrigger = computed(() => this._languageService.language());

	protected readonly galleryTitle = computed(() => this._translateService.translate('Gallery')());
	protected readonly galleryHeadline = computed(() => this._translateService.translate('Golden Ring in photos')());
	protected readonly galleryDescription = computed(
		() => this._translateService.translate('Gallery description')(),
	);

	protected readonly photos: GalleryPhoto[] = [
		{ src: 'gallery/golden-ring-01.jpeg', alt: 'Golden Ring hotel exterior' },
		{ src: 'gallery/golden-ring-02.jpeg', alt: 'Interior and guest area at Golden Ring' },
		{ src: 'gallery/golden-ring-03.jpeg', alt: 'Hotel room at Golden Ring' },
		{ src: 'gallery/golden-ring-04.jpeg', alt: 'Room interior at Golden Ring' },
		{ src: 'gallery/golden-ring-05.jpeg', alt: 'Bed and relaxation area in a Golden Ring room' },
		{ src: 'gallery/golden-ring-06.jpeg', alt: 'Bright Golden Ring hotel room' },
		{ src: 'gallery/golden-ring-07.jpeg', alt: 'Room layout at Golden Ring' },
		{ src: 'gallery/golden-ring-08.jpeg', alt: 'Another guest room at Golden Ring' },
		{ src: 'gallery/golden-ring-09.jpeg', alt: 'Interior details in a Golden Ring room' },
		{ src: 'gallery/golden-ring-10.jpeg', alt: 'Living space at Golden Ring' },
		{ src: 'gallery/golden-ring-11.jpeg', alt: 'Furnished and decorated room at Golden Ring' },
		{ src: 'gallery/golden-ring-12.jpeg', alt: 'Relaxation area at Golden Ring hotel' },
		{ src: 'gallery/golden-ring-13.jpeg', alt: 'Restaurant or breakfast area at Golden Ring' },
		{ src: 'gallery/golden-ring-14.jpeg', alt: 'Table setting or food at Golden Ring' },
		{ src: 'gallery/golden-ring-15.jpeg', alt: 'Another shot of the restaurant section at Golden Ring' },
		{ src: 'gallery/golden-ring-16.jpeg', alt: 'Hotel interior at Golden Ring' },
		{ src: 'gallery/golden-ring-17.jpeg', alt: 'Photo of Golden Ring room details' },
		{ src: 'gallery/golden-ring-18.jpeg', alt: 'Room or apartment at Golden Ring' },
		{ src: 'gallery/golden-ring-19.jpeg', alt: 'Comfortable guest space at Golden Ring' },
		{ src: 'gallery/golden-ring-20.jpeg', alt: 'Another photo of the Golden Ring hotel in Ternopil' },
	];

	protected readonly selectedPhoto = signal<GalleryPhoto | null>(null);

	protected openPhoto(photo: GalleryPhoto) {
		this.selectedPhoto.set(photo);
	}

	protected closePhoto() {
		this.selectedPhoto.set(null);
	}
}
