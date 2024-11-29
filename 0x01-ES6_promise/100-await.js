// 100-await.js
import { uploadPhoto, createUser } from './utils'; // Import both functions from utils.js

export default async function asyncUploadUser() {
  try {
    // Wait for both promises to settle
    const [photoResponse, userResponse] = await Promise.allSettled([
      uploadPhoto(),
      createUser(),
    ]);

    // Construct the result object
    return {
      photo: photoResponse.status === 'fulfilled' ? photoResponse.value : null,
      user: userResponse.status === 'fulfilled' ? userResponse.value : null,
    };
  } catch (error) {
    // Return empty object if there's an error
    return {
      photo: null,
      user: null,
    };
  }
}
