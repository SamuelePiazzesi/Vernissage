export interface Image {
	src: string;
	alt: string;
}

export interface Picture extends Image {
	width: number | string;
	height: number | string;
}
