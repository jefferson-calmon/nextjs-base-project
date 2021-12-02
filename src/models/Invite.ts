export interface Invite {
	width: number;
	height: number;
	text: InviteText[];
}

export interface InviteText {
    id: string;
    content: string;
    style: {
        color?: string;
        size: number;
        scale?: number;
    },
    position?: {
        x: number;
        y: number;
    },
}
