import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import env from '@/config/env';
import DatauriParser from 'datauri/parser';
cloudinary.config({
    cloud_name: env.cloudinary_cloud_name,
    api_key: env.cloudinary_api_key,
    api_secret: env.cloudinary_api_secret,
});
const parser = new DatauriParser();
const ALLOWED_MIME_TYPES = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'video/mp4',
    'application/pdf',
];
export const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        if (!ALLOWED_MIME_TYPES.includes(file.mimetype))
            return cb(new Error(`Unsupported file type: ${file.mimetype}`));
        cb(null, true);
    },
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});
export const uploadToCloudinary = async (file) => {
    if (!file) {
        throw new Error('Failed to upload file!');
    }
    const { content } = parser.format(file.originalname, file.buffer);
    if (!content) {
        throw new Error('cloudinary err: Server side err!');
    }
    const uploadResult = await cloudinary.uploader
        .upload(content, {
        public_id: file.originalname,
    })
        .catch(err => {
        console.log(err);
    });
    return uploadResult;
};
