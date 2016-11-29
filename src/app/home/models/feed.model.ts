import { FeedImage } from './feed-image.model';

export class Feed {
    public images: FeedImage[] = [];

    constructor(
        public createdTime: Date,
        public message: string
    ) {

    }
}