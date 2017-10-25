import { Person } from './person';
import { Question } from './question';

export class Poll {
	_id: string;
	name: string;
	creator: Person;
	description: string;
	questions: Question[];
}