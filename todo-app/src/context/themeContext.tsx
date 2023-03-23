import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';

interface IThemeContext {
	theme: string;
	changeTheme: () => void;
}

type TContext = IThemeContext | undefined;

const ThemeContext = createContext<TContext>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
};

export const ThemeProvider = ({ children }): JSX.Element => {
	const [theme, setTheme] = useState('light');

	const changeTheme = useCallback(() => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}, [setTheme, theme]);

	const values = useMemo(
		() => ({
			theme,
			changeTheme,
		}),
		[changeTheme, theme]
	);

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};
