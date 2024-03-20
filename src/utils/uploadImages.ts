import axios from "axios";

export const uploadImage = async (files: any[]) => {
    const PRESET_NAME: string = 'react_wd18204';
    const CLOUD_NAME: string = '';
    const FOLDER_NAME: string = 'react_image';

    const api: string = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();

    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);
    formData.append("file", files[0]);

    const { data } = await axios.post(api, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log(data);
    return data.secure_url
}

export const deleteImageByURL = async (imageUrl: string) => {
    const CLOUD_NAME: string = '';
    const API_KEY: string = '677898617765499';
    const API_SECRET: string = '4tV6YfM-B8ZBjroFhvwC7zLpJAU';
    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/delete_by_token`, {
            url: imageUrl,
            api_key: API_KEY,
            api_secret: API_SECRET
        });
        console.log('Image deleted:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error deleting image:', error.message);
        throw error;
    }
};