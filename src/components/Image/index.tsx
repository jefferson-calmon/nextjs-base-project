import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { app } from 'config/app';

interface ImageProps extends NextImageProps {
	alt?: string;
}

const Image = ({ alt, ...rest }: ImageProps): JSX.Element => (
	<NextImage alt={`${alt} | ${app.name}`} {...rest} />
);

export default Image;
