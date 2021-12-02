import { HTMLAttributes } from 'react';
import Draggable from 'react-draggable';

import { InviteText } from '../../models/Invite';

import { BoxTextContainer } from './styles';

interface BoxTextProps extends HTMLAttributes<HTMLDivElement> {
	text: InviteText;
	className?: string;
	isSelected: boolean;
}

function BoxText({
	text,
	className,
	isSelected,
	...rest
}: BoxTextProps): JSX.Element {
	return (
		<Draggable bounds="parent" onStart={() => isSelected ? undefined : false}>
			<BoxTextContainer
				className={`
                    text
                    ${className}
                    ${isSelected ? 'selected' : ''}
                `}
				style={{
					color: text.style.color,
					fontSize: text.style.size + 'px',
				}}
				{...rest}
			>
				{text.content}
			</BoxTextContainer>
		</Draggable>
	);
}

export default BoxText;
