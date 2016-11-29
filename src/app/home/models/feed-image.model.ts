export class FeedImage {
    constructor(
        public id: string,
        public maxHeight: number,
        public maxWidth: number,
        public src: string
    ) { }

    maxHeightString(): string {
        return this.maxHeight + 'px';
    }

    maxWidthString(): string {
        return this.maxWidth + 'px';
    }

    getPicEnd(): string {
        const jpgIndex = this.src.indexOf('.jpg');
        return this.src.substring(Math.max(0, jpgIndex - 5), jpgIndex);
    }

    static parseAttachments(attachments): FeedImage[] {
        if (!attachments || !attachments.data) {
            return [];
        }
        let foundFeedImages = [];

        attachments.data.forEach(dataObj => {
            if (dataObj.media && dataObj.media.image) {
                const i = dataObj.media.image;
                let pieces = i.src.split('/');
                let id = pieces[Math.max(pieces.length - 1, 0)];
                id = id.split('?')[0];
                id = id.replace(/\.jpg/, '');
                foundFeedImages.push(new FeedImage(id, i.height, i.width, i.src));
            }
            foundFeedImages = foundFeedImages.concat((FeedImage.parseAttachments(dataObj.subattachments)));
        });
        return foundFeedImages;
    }
}