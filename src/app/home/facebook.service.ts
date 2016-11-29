import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Feed } from './models/feed.model';
import { FeedImage } from './models/feed-image.model';

const rootUrl = 'https://graph.facebook.com/v2.8';
const accessToken = 'access_token=1561362274164382|e778b18cdf49514ae4762eafee1a7081';

@Injectable()
export class FacebookService {
    constructor(private http: Http) { }

    async getFeed(): Promise<Feed[]> {
        const fields = ['created_time', 'message', 'picture', 'full_picture', 'attachments', 'link'].join(',');

        try {
            const body = await this.http.get(`${rootUrl}/somerledshetlandsheepdogs/posts?fields=${fields}&${accessToken}&limit=100`).toPromise();
            const feed = await this.format(body);
            return feed;
        }
        catch (e) {
            return this.handleError(e);
        }
    }

    async format(value: Response): Promise<Feed[]> {
        const json = value.json() || {};
        const data = json.data || [];
        const promises: Promise<Feed>[] = data.map(async d => {
            const feed = new Feed(new Date(d.created_time), d.message)
            if (d.full_picture) {
                feed.images.push(new FeedImage(d.id, 1024, 1024, d.full_picture));
            }
            let attachments: FeedImage[];

            attachments = FeedImage.parseAttachments(d.attachments);
            
            feed.images = feed.images.concat(attachments);
            feed.images = this.removeDuplicates(feed.images);
            
            return Promise.resolve(feed);
        });
        const f = await Promise.all(promises);
        return f;
    }

    handleError(err: any) {
        console.error(err);
        return [];
    }

    removeDuplicates(images: FeedImage[]): FeedImage[] {
        const uniques: FeedImage[] = [];

        images.forEach(image => {
            const ref = uniques.find(i => i.src === image.src || i.id === image.id || i.getPicEnd() === image.getPicEnd());
            if (!ref) {
                uniques.push(image);
            }
        });
        return uniques;
    }
}
