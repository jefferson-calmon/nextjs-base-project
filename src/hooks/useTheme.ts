import { useTheme as useStyledTheme } from 'styled-components';

import { Theme } from 'models/Theme';

export const useTheme = (): Theme => {
	const theme = useStyledTheme();

	return theme;
};
