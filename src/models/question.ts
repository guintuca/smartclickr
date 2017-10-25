export interface Question {
	_id: string;
	order?: number;
	stem: string;
	type: string;
	choices?: Choice[];
	responses?: Response[];
}

export interface Choice {
	order?: number;
	text: string;
	correct?: boolean;
}

export interface Response {
	user_id: string;
	response: any;
}