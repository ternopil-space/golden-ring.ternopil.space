import { ChangeDetectionStrategy, Component } from '@angular/core';

type Review = {
	author: string;
	date: string;
	score: string;
	text: string;
};

@Component({
	templateUrl: './reviews.component.html',
	styleUrl: './reviews.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
	protected readonly reviews: Review[] = [
		{
			author: 'Алексей',
			date: 'жовтень 2025',
			score: '10/10',
			text: 'Все чітко, дуже привітний персонал, комфортні затишні номери, парковка, поруч магазини.',
		},
		{
			author: 'Ekaterina',
			date: 'жовтень 2025',
			score: '8.0/10',
			text: 'Гарне розташування, поруч є магазини й заправки. Номер зручний, є все необхідне. Але чути шум з дороги.',
		},
		{
			author: 'Yurii',
			date: 'вересень 2025',
			score: '8.0/10',
			text: 'Номер з мансардним вікном, але зручне розташування для пересадки на автобус.',
		},
		{
			author: 'Марія',
			date: 'вересень 2025',
			score: '10/10',
			text: 'Дуже чисто, приємний персонал, хороше співвідношення ціни та якості.',
		},
		{
			author: 'Юлія',
			date: 'вересень 2025',
			score: '9.0/10',
			text: 'Комфортно та чисто. Відсканували документи, чути шум машин та сусідів.',
		},
		{
			author: 'Надія',
			date: 'вересень 2025',
			score: '10/10',
			text: 'Сподобалось, що можна заварити чай/каву прямо в номері.',
		},
		{
			author: 'Олександр',
			date: 'вересень 2025',
			score: '7.0/10',
			text: 'Сніданок не вартий своїх коштів, маленький телевізор, запах приготування їжі поруч.',
		},
		{
			author: 'Oksana',
			date: 'вересень 2025',
			score: '7.0/10',
			text: 'Приємний персонал, чисті номери. Але в душі був грибок, не було деяких засобів гігієни.',
		},
		{
			author: 'Maryna',
			date: 'вересень 2025',
			score: '8.0/10',
			text: 'Гарна локація, рушники та постіль добре пропрасовані, привітний персонал.',
		},
		{
			author: 'Ihor',
			date: 'вересень 2025',
			score: '7.0/10',
			text: 'Проблеми з лампочкою, чути сусідів. Але чисто, персонал добрий.',
		},
	];
}
