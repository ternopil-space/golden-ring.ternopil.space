import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@wawjs/ngx-translate';
import { LanguageService } from '../../feature/language/language.service';

const SOCIALS_SEO_TITLE_KEY = 'SEO Socials Title';
const SOCIALS_SEO_DESCRIPTION_KEY = 'SEO Socials Description';

@Component({
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
	private readonly _title = inject(Title);
	private readonly _meta = inject(Meta);
	private readonly _cd = inject(ChangeDetectorRef);
	private readonly _translateService = inject(TranslateService);
	private readonly _languageService = inject(LanguageService);

	// Force change detection when language changes
	protected readonly languageTrigger = computed(() => this._languageService.language());

	// Computed signals for all translated strings to ensure reactivity
	protected readonly socialsTitle = computed(() => this._translateService.translate('Socials')());
	protected readonly goldenRingContactsTitle = computed(() => this._translateService.translate('Golden Ring contacts and socials')());
	protected readonly phoneLabel = computed(() => this._translateService.translate('Phone')());
	protected readonly phoneDescription = computed(() => this._translateService.translate('Main number for room booking, service details and inquiries.')());
	protected readonly websiteLabel = computed(() => this._translateService.translate('Website')());
	protected readonly websiteDescription = computed(() => this._translateService.translate('Official website with description of rooms, restaurant, SPA and additional services.')());
	protected readonly guestRatingLabel = computed(() => this._translateService.translate('Guest rating')());
	protected readonly guestRatingValue = computed(() => this._translateService.translate('Approximately 8.5 / 10')());
	protected readonly guestRatingDescription = computed(() => this._translateService.translate('According to Booking.com and other services, guests positively note the location, cleanliness and comfort.')());
	protected readonly formatLabel = computed(() => this._translateService.translate('Format')());
	protected readonly formatDescription = computed(() => this._translateService.translate('Hotel with restaurant and additional services for leisure, family trips, and business events.')());
	protected readonly servicesLabel = computed(() => this._translateService.translate('Services')());
	protected readonly serviceComfortableRooms = computed(() => this._translateService.translate('Comfortable rooms of different classes')());
	protected readonly serviceRestaurant = computed(() => this._translateService.translate('Restaurant')());
	protected readonly serviceSpa = computed(() => this._translateService.translate('SPA center')());
	protected readonly serviceConference = computed(() => this._translateService.translate('Conference hall and children\'s room')());
	protected readonly serviceWifi = computed(() => this._translateService.translate('Free Wi-Fi')());
	protected readonly serviceParking = computed(() => this._translateService.translate('Free parking')());

	constructor() {
		effect(() => {
			this._languageService.language();
			this._cd.markForCheck();

			const title = this._translateService.translate(SOCIALS_SEO_TITLE_KEY)();
			const description = this._translateService.translate(SOCIALS_SEO_DESCRIPTION_KEY)();

			this._title.setTitle(title);
			this._meta.updateTag({ name: 'description', content: description });
			this._meta.updateTag({ property: 'og:title', content: title });
			this._meta.updateTag({ property: 'og:description', content: description });
			this._meta.updateTag({ name: 'twitter:title', content: title });
			this._meta.updateTag({ name: 'twitter:description', content: description });
			this._meta.updateTag({ itemprop: 'name', content: title });
			this._meta.updateTag({ itemprop: 'description', content: description });
		});
	}
}
