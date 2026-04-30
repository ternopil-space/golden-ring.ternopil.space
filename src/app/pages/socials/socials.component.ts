import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslatePipe, TranslateService } from '@wawjs/ngx-translate';
import { LanguageService } from '../../feature/language/language.service';

const SOCIALS_SEO_TITLE_KEY = 'SEO Socials Title';
const SOCIALS_SEO_DESCRIPTION_KEY = 'SEO Socials Description';

@Component({
	imports: [NgOptimizedImage, TranslatePipe],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
	private readonly _title = inject(Title);
	private readonly _meta = inject(Meta);
	private readonly _translateService = inject(TranslateService);
	private readonly _languageService = inject(LanguageService);

	constructor() {
		effect(() => {
			this._languageService.language();

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
