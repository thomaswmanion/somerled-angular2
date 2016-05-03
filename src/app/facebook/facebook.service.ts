import {Injectable} from "angular2/core";
import {Subject, BehaviorSubject} from "rxjs";
import {Headers} from "angular2/http";

@Injectable()
export class FacebookService {
	public feed: Subject<Array<any>> = new BehaviorSubject<Array<any>>([{ "created_time": "2016-03-01T22:23:57+0000", "message": "Left: Besame's Lionheart of Somerled , \"Leo\"\n\nBy Raisin a Lion in Winter (Preferential son) out of Besame's Attitude Dancing (GCH Raisin Jr High Crush granddaughter)", "picture": "https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/s130x130/12795371_990324547750058_7153924509252527703_n.jpg?oh=f9b8adac48f3d06ce394f0b57478ffcb&oe=57E6132B", "full_picture": "https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/q85/s720x720/12795371_990324547750058_7153924509252527703_n.jpg?oh=1ce9dec89c1737cd381222379f937cf1&oe=57B079C2", "id": "893557890760058_990324547750058", "attachments": { "data": [{ "description": "Left: Besame's Lionheart of Somerled , \"Leo\"\n\nBy Raisin a Lion in Winter (Preferential son) out of Besame's Attitude Dancing (GCH Raisin Jr High Crush granddaughter)", "media": { "image": { "height": 576, "src": "https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/q85/s720x720/12795371_990324547750058_7153924509252527703_n.jpg?oh=1ce9dec89c1737cd381222379f937cf1&oe=57B079C2", "width": 720 } }, "target": { "id": "990324547750058", "url": "https://www.facebook.com/somerledshetlandsheepdogs/photos/a.990324507750062.1073741829.893557890760058/990324547750058/?type=3" }, "title": "Untitled Album", "type": "photo", "url": "https://www.facebook.com/somerledshetlandsheepdogs/photos/a.990324507750062.1073741829.893557890760058/990324547750058/?type=3" }] } },
		{ "created_time": "2016-03-01T22:02:08+0000", "message": "So thrilled with our latest hopefuls pictured here their second time in the ring at 6 months! Thank you Jennie Lamb for the opportunity for these two to come to Somerled!\n\nLeft: Besame's Lionheart of Somerled , \"Leo\"\nRight: Besame Mi Amor de Somerled, \"Mia\"\n\nThese littermates are by Raisin a Lion in Winter (Preferential son) out of Besame's Attitude Dancing (GCH Raisin Jr High Crush granddaughter)\n\nThanks Canine Candids by Lynda for capturing these two!", "picture": "https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/s130x130/12512459_990311327751380_9144629118625194786_n.jpg?oh=0465d255ae212a533365b802e94f0317&oe=57B47C63", "full_picture": "https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/q82/s720x720/12512459_990311327751380_9144629118625194786_n.jpg?oh=5441a5782bce573c1d6ddec7f95d4d63&oe=57E7BE76", "id": "893557890760058_990325211083325", "attachments": { "data": [{ "description": "Besame Mi Amor de Somerled, \"Mia\"\n\nBy Raisin a Lion in Winter (Preferential son) out of Besame's Attitude Dancing (GCH Raisin Jr High Crush granddaughter)", "media": { "image": { "height": 720, "src": "https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/q82/s720x720/12512459_990311327751380_9144629118625194786_n.jpg?oh=5441a5782bce573c1d6ddec7f95d4d63&oe=57E7BE76", "width": 576 } }, "target": { "id": "990311327751380", "url": "https://www.facebook.com/somerledshetlandsheepdogs/photos/a.990312361084610.1073741828.893557890760058/990311327751380/?type=3" }, "type": "photo", "url": "https://www.facebook.com/somerledshetlandsheepdogs/photos/a.990312361084610.1073741828.893557890760058/990311327751380/?type=3" }] } },
		{ "created_time": "2016-02-23T03:58:44+0000", "picture": "https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/s130x130/12729360_10205526051059454_5079829286549747337_n.jpg?oh=aacdf3eeeeb37ff41701bea279c0799d&oe=57AD45CF", "full_picture": "https://scontent.xx.fbcdn.net/hphotos-xpa1/t31.0-8/s720x720/12719549_10205526051059454_5079829286549747337_o.jpg", "id": "893557890760058_986014374847742", "attachments": { "data": [{ "description": "Good advice for a potential puppy owner.", "media": { "image": { "height": 720, "src": "https://scontent.xx.fbcdn.net/hphotos-xpa1/t31.0-8/s720x720/12719549_10205526051059454_5079829286549747337_o.jpg", "width": 363 } }, "target": { "id": "10205526051059454", "url": "https://www.facebook.com/photo.php?fbid=10205526051059454&set=gm.1135596506474908&type=3" }, "type": "photo", "url": "https://www.facebook.com/photo.php?fbid=10205526051059454&set=gm.1135596506474908&type=3" }] } },
		{ "created_time": "2015-12-20T14:58:31+0000", "message": "Mia is getting into the holiday spirit! https://t.co/9CfB2qmpxF", "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQAiRnilUQR9CCmQ&w=130&h=130&url=https%3A%2F%2Fscontent.cdninstagram.com%2Fhphotos-xpt1%2Ft51.2885-15%2Fe35%2F12356359_1063389473681910_481255565_n.jpg&cfs=1", "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQBnHwv2xwY5sRr_&url=https%3A%2F%2Fscontent.cdninstagram.com%2Fhphotos-xpt1%2Ft51.2885-15%2Fe35%2F12356359_1063389473681910_481255565_n.jpg", "id": "893557890760058_951078388341341", "attachments": { "data": [{ "description": "“Mia is getting into the holiday spirit!”", "media": { "image": { "height": 720, "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQBK_FwFz6jdGRU-&w=720&h=720&url=https%3A%2F%2Fscontent.cdninstagram.com%2Fhphotos-xpt1%2Ft51.2885-15%2Fe35%2F12356359_1063389473681910_481255565_n.jpg&cfs=1", "width": 720 } }, "target": { "url": "https://www.facebook.com/l.php?u=https%3A%2F%2Ft.co%2F9CfB2qmpxF&h=5AQE9LgCn&s=1&enc=AZMclT76AI30xjHvYAGLIblyxphSYIwycI12eEpyYBbdye8CU_55KD7Pb8e_0DCtNHs1Xkux8FEUBVFw08hycOUL" }, "title": "@morganmacdonald on Instagram: “Mia is getting into the holiday spirit!”", "type": "square_image_share", "url": "https://www.facebook.com/l.php?u=https%3A%2F%2Ft.co%2F9CfB2qmpxF&h=5AQE9LgCn&s=1&enc=AZMclT76AI30xjHvYAGLIblyxphSYIwycI12eEpyYBbdye8CU_55KD7Pb8e_0DCtNHs1Xkux8FEUBVFw08hycOUL" }] } },
		{ "created_time": "2015-12-06T03:40:26+0000", "message": "Silly girls", "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQA5e3yqjdX6KxAC&w=130&h=130&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2F7EC6DED3641285060475792596992_SW_WEBM_1449356501969188970197a.webm.jpg%3FversionId%3D8RiNEXt1dOcpXQfYrCzOKFhxDp78Hjjb&cfs=1", "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQBKck6_jQLGVkFq&w=720&h=720&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2F7EC6DED3641285060475792596992_SW_WEBM_1449356501969188970197a.webm.jpg%3FversionId%3D8RiNEXt1dOcpXQfYrCzOKFhxDp78Hjjb&cfs=1", "id": "893557890760058_943230272459486", "attachments": { "data": [{ "description": "Vine by Morgan MacDonald", "media": { "image": { "height": 480, "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQBKck6_jQLGVkFq&w=720&h=720&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2F7EC6DED3641285060475792596992_SW_WEBM_1449356501969188970197a.webm.jpg%3FversionId%3D8RiNEXt1dOcpXQfYrCzOKFhxDp78Hjjb&cfs=1", "width": 480 } }, "target": { "url": "https://www.facebook.com/l.php?u=https%3A%2F%2Fvine.co%2Fv%2Fi7mOJnEEVil&h=eAQGza615&s=1&enc=AZNog84Gy9J6bQFzXE6IEqQIn5eo6hnKWe4eJs7h1rT5lwxqgzeloId-EE6iENKw24imLzxAvmIGHwUcsu5NNIqK" }, "title": "Strong \"fetch\" drive, no \"bring it back\" drive...", "type": "video_share_highlighted", "url": "https://www.facebook.com/l.php?u=https%3A%2F%2Fvine.co%2Fv%2Fi7mOJnEEVil&h=eAQGza615&s=1&enc=AZNog84Gy9J6bQFzXE6IEqQIn5eo6hnKWe4eJs7h1rT5lwxqgzeloId-EE6iENKw24imLzxAvmIGHwUcsu5NNIqK" }] } },
		{ "created_time": "2015-12-06T03:39:40+0000", "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQCbp9laoxE3Z79R&w=130&h=130&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2FE28118487D1285098962990313472_SW_WEBM_1449365677820ae59af4524.webm.jpg%3FversionId%3DleHGfU2TxuTQwvW0dn6n9CAGC2vb.CSG&cfs=1", "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQAtWYUKImg44EnZ&w=720&h=720&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2FE28118487D1285098962990313472_SW_WEBM_1449365677820ae59af4524.webm.jpg%3FversionId%3DleHGfU2TxuTQwvW0dn6n9CAGC2vb.CSG&cfs=1", "id": "893557890760058_943230119126168", "attachments": { "data": [{ "description": "Watch Morgan MacDonald's Vine taken on 6 December 2015. It has 0 likes. The entertainment network where videos and personalities get really big, really fast. Download Vine to watch videos, remixes and trends before they blow up.", "media": { "image": { "height": 480, "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQAtWYUKImg44EnZ&w=720&h=720&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2FE28118487D1285098962990313472_SW_WEBM_1449365677820ae59af4524.webm.jpg%3FversionId%3DleHGfU2TxuTQwvW0dn6n9CAGC2vb.CSG&cfs=1", "width": 480 } }, "target": { "url": "https://www.facebook.com/l.php?u=https%3A%2F%2Fvine.co%2Fv%2Fi7Kv3UO11zr&h=rAQH_zQKr&s=1&enc=AZMvjg0utch0rHRRN3ARHw_jX_otFFJBhunRhlOAP13amkaCvKQx11Qt8RQkrakn4UqypUd6Bt6r7Fpxib-OPWUS" }, "title": "Vine by Morgan MacDonald", "type": "video_share_highlighted", "url": "https://www.facebook.com/l.php?u=https%3A%2F%2Fvine.co%2Fv%2Fi7Kv3UO11zr&h=rAQH_zQKr&s=1&enc=AZMvjg0utch0rHRRN3ARHw_jX_otFFJBhunRhlOAP13amkaCvKQx11Qt8RQkrakn4UqypUd6Bt6r7Fpxib-OPWUS" }] } },
		{ "created_time": "2015-12-06T03:05:14+0000", "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQD5y4k_onPjWYRR&w=130&h=130&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2FEE6CE1FC331285119734530097152_SW_WEBM_1449370630366e3fa309f8b.webm.jpg%3FversionId%3D.R9tRrmeI8S9KWu1uHfP24zgGiCN2e9d&cfs=1", "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQDYyQ4_cuLua5xP&w=720&h=720&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2FEE6CE1FC331285119734530097152_SW_WEBM_1449370630366e3fa309f8b.webm.jpg%3FversionId%3D.R9tRrmeI8S9KWu1uHfP24zgGiCN2e9d&cfs=1", "id": "893557890760058_943220805793766", "attachments": { "data": [{ "description": "Vine by Somerled Shelties", "media": { "image": { "height": 480, "src": "https://external.xx.fbcdn.net/safe_image.php?d=AQDYyQ4_cuLua5xP&w=720&h=720&url=https%3A%2F%2Fv.cdn.vine.co%2Fr%2Fvideos%2FEE6CE1FC331285119734530097152_SW_WEBM_1449370630366e3fa309f8b.webm.jpg%3FversionId%3D.R9tRrmeI8S9KWu1uHfP24zgGiCN2e9d&cfs=1", "width": 480 } }, "target": { "url": "https://www.facebook.com/l.php?u=https%3A%2F%2Fvine.co%2Fv%2Fi7AaQDHDrOD&h=EAQF2YwzI&s=1&enc=AZPowvmPbOONiFQeaxxceQLGsMsdJYkyEBxfX_Bv-ap7UgyoEf9dnRU-n3NvhUj1yu0VxHKhIPMHMhO1j_CdaqBL" }, "title": "Newest hopefuls Leo and Mia in the 12+\" of snow!", "type": "video_share_highlighted", "url": "https://www.facebook.com/l.php?u=https%3A%2F%2Fvine.co%2Fv%2Fi7AaQDHDrOD&h=EAQF2YwzI&s=1&enc=AZPowvmPbOONiFQeaxxceQLGsMsdJYkyEBxfX_Bv-ap7UgyoEf9dnRU-n3NvhUj1yu0VxHKhIPMHMhO1j_CdaqBL" }] } },
		{ "created_time": "2015-12-06T02:01:31+0000", "message": "GCH Serenity's Walk in the Park x Somerled's Debutante (born May 12 2015)", "picture": "https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/s130x130/12301727_943206515795195_2736692749598058483_n.jpg?oh=83abc54aa8be9b65b527580d06798d75&oe=57B82B02", "full_picture": "https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/s720x720/12301727_943206515795195_2736692749598058483_n.jpg?oh=548bfd95332db863dd0d580f12a1e2d2&oe=57AC8CFD", "id": "893557890760058_943206602461853", "attachments": { "data": [{ "media": { "image": { "height": 405, "src": "https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/s720x720/12301727_943206515795195_2736692749598058483_n.jpg?oh=548bfd95332db863dd0d580f12a1e2d2&oe=57AC8CFD", "width": 720 } }, "target": { "id": "893557890760058", "url": "https://www.facebook.com/somerledshetlandsheepdogs/" }, "title": "Somerled Shetland Sheepdogs's cover photo", "type": "cover_photo", "url": "https://www.facebook.com/somerledshetlandsheepdogs/" }] } },
		{ "created_time": "2015-12-06T01:59:16+0000", "message": "Multi BISS GCH Raisin's Jr High Crush, \"Flash\". Somerled's first Sheltie, heartdog, and lifelong inspiration", "picture": "https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/s130x130/12342513_943205929128587_3721738958833272531_n.jpg?oh=12e2fe95232ee788992856cfe0d8c354&oe=57E6648F", "full_picture": "https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/s720x720/12342513_943205929128587_3721738958833272531_n.jpg?oh=1a9b1c8d2089e33a0a69e3fce063af0e&oe=57A86170", "id": "893557890760058_943205955795251", "attachments": { "data": [{ "media": { "image": { "height": 575, "src": "https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/s720x720/12342513_943205929128587_3721738958833272531_n.jpg?oh=1a9b1c8d2089e33a0a69e3fce063af0e&oe=57A86170", "width": 720 } }, "target": { "id": "893557890760058", "url": "https://www.facebook.com/somerledshetlandsheepdogs/" }, "title": "Somerled Shetland Sheepdogs", "type": "photo", "url": "https://www.facebook.com/somerledshetlandsheepdogs/" }] } }
	]);

	constructor() {
		fb.getFeed((feed) => {
			console.log(feed.data, typeof feed.data);
			this.feed.next(feed.data);
			console.log('done');
		});
	}
}
