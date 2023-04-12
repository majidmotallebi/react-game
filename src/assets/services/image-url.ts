import noImage from '../no-image-placeholder.webp'
const getImageCroppedUrl=(url:string)=>{
    if(!url) return noImage;

    const target = 'media/';
    const index = url.indexOf(target) + target.length;

    console.log('index',index);
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);

}

export default getImageCroppedUrl;