import NextHead from 'next/head';
import { app } from 'config/app';

interface HeadProps {
    title?: string;
    children?: React.ReactNode
}

function Head({ title, children }: HeadProps): JSX.Element {
	return (
		<NextHead>
            <title>
                {title ? title + ' | ' : null}{app.name}
                {children}
            </title>
		</NextHead>
	);
}

export default Head;
