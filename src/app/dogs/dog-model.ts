type Gender = 'boy' | 'girl';

export class Dog {
    constructor(
        public name: string,
        public gender: Gender,
        public coverImage: string,
        public otherImages: string[]
    ) {}
}
