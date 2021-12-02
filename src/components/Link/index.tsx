import NextLink from 'next/link';
import { UrlObject } from 'url';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    to: Url;
    className?: string;
}

type Url = string | UrlObject;

function Link({ to, children, className, ...rest }: LinkProps): JSX.Element {
    return (
        <NextLink href={to}>
            <a {...rest} className={`link ${className}`}>
                {children}
            </a>
        </NextLink>
    );
}

export default Link;
