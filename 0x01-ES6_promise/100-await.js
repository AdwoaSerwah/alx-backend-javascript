// 100-await.js
import { uploadPhoto, createUser } from './utils';  // Import the functions

export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null
  };

  try {
    // Wait for both promises to settle
    const [photoResponse, userResponse] = await Promise.allSettled([
      uploadPhoto(),
      createUser()
    ]);

    // Check if the photo upload promise is fulfilled
    if (photoResponse.status === 'fulfilled') {
      result.photo = photoResponse.value;
    } else {
      result.photo = null; // If it failed, set to null
    }

    // Check if the createUser promise is fulfilled
    if (userResponse.status === 'fulfilled') {
      result.user = userResponse.value;
    } else {
      result.user = null; // If it failed, set to null
    }

  } catch (error) {
    // If there is an error, we just return the initial result
    return {
      photo: null,
      user: null
    };
  }

  return result;
}
