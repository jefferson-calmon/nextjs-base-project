import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {
	alt?: string;
}

const Image = ({ alt, ...rest }: ImageProps): JSX.Element => (
	<NextImage alt={`${alt} | EasyInvite`} {...rest} />
);

export default Image;
