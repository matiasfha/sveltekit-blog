import cloudinary from 'cloudinary';

cloudinary.v2.config({
	cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
	api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
	api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET
});

async function getOgImage({ cloudName, text }) {
	const url = cloudinary.v2.url('example_og_image.jpg', {
		transformation: [
			{ width: 1200, height: 627, crop: 'fill', quality: 'auto', format: 'auto' },
			{
				crop: 'fit',
				width: 700,
				x: 480,
				y: 254,
				gravity: 'south_west',
				color: 'white',
				effect: 'shadow:40',
				overlay: {
					font_family: 'roboto',
					font_size: 54,
					font_weight: 'bold',
					text: encodeURIComponent(text)
				}
			},
			{
				crop: 'fit',
				width: 700,
				x: 480,
				y: 154,
				gravity: 'south_west',
				color: 'white',
				overlay: {
					font_family: 'roboto',
					font_size: 34,
					font_weight: 'bold',
					text: encodeURIComponent('This is a subtitle')
				}
			}
		]
	});

	return url;
}

export default getOgImage;
