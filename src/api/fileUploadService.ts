import axiosInstance from './axiosInstance';

export const uploadFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axiosInstance.post('/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('File uploaded:', response.data.location); // Debugging log
    return response.data.location; 
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
