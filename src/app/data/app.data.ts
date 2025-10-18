export interface CardData {
  id: number;
  title: string;
  description: string;
  icon?: string;
  category: string;
}
export const AppData: CardData[] = [
  {
    id: 1,
    title: 'Mad Jun Angular for Beginners Lecture',
    description: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
    icon: '/images/angular-for-beginners.png',
    category: 'BEGINNER',
  },
  {
    id: 2,
    title: 'Mad Jun Angular Core Deep Dive Lecture',
    description: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
    icon: '/images/angular-small.png',
    category: 'INTERMEDIATE',
  },
  {
    id: 3,
    title: 'Mad Jun Angular RxJs In Practice Lecture',
    description: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    icon: '/images/rxjs-in-practice.png',
    category: 'BEGINNER',
  },
  {
    id: 4,
    title: 'Mad Jun Angular NgRx In Depth Lecture',
    description: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
    icon: '/images/angular-ngrx.png',
    category: 'ADVANCED'
  },
  {
    id: 5,
    title: 'Mad Jun Angular Advanced Lecture',
    description: 'Learn Advanced Angular functionality. Advanced Components, Directives, Testing, Npm',
    icon: '/images/advanced_angular.png',
    category: 'ADVANCED'
  },
  {
    id: 6,
    title: 'Mad Jun Angular PWA Super Lecture',
    description: 'Learn Angular Progressive Web Applications, build the future of the Web Today.',
    icon: '/images/angular-pwa.png',
    category: 'ADVANCED'
  },
  {
    id: 7,
    title: 'Mad Jun Angular Architecture Lecture',
    description: 'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.',
    icon: '/images/rxjs-reactive-patterns-small.png',
    category: 'BEGINNER'
  },
  {
    id: 8,
    title: 'Mad Jun Angular Material Lecture',
    description: 'Build Applications with the official Angular Widget Library',
    icon: '/images/material_design.png',
    category: 'ADVANCED'
  }
];

export function findCardData(id: number): CardData | undefined {
  return AppData.find(card=> card.id === id);
}
