import {
	DefaultTheme,
	ThemeProvider as ThemeProviderComponent,
	ThemeProviderProps,
} from 'styled-components';

import { Theme } from 'models/Theme';

export const ThemeProvider = ThemeProviderComponent as unknown as (
	props: ThemeProviderProps<AnyIfEmpty<DefaultTheme>>
) => JSX.Element;

type AnyIfEmpty<T extends object> = keyof T extends never ? unknown : T;

export const dark: Theme = {
	name: 'dark',

	colors: {
		primary: '',
		secondary: '',

		background: '#101010',
		surface: '#16191C',

		title: '#FFFFFF',
		text: '#ADB5BD',
	},
};

export const light: Theme = {
	name: 'light',

	colors: {
		primary: '',
		secondary: '',

		background: '#ffffff',
		surface: '#f1f3f4',

		title: '#000000',
		text: '#333333',
	},
};

