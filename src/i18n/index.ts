import { it } from './it';
import { en } from './en';

export const translations = { it, en } as const;
export type Locale = keyof typeof translations;
export type Translation = typeof it;
