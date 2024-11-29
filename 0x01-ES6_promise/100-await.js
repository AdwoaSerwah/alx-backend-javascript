import { uploadPhoto, createUser } from './utils';

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

    // Handle photo response
    if (photoResponse.status === 'fulfilled') {
      result.photo = photoResponse.value;
    } else {
      result.photo = null;
    }

    // Handle user response
    if (userResponse.status === 'fulfilled') {
      result.user = userResponse.value;
    } else {
      result.user = null;
    }

  } catch (error) {
    // Catch any other unexpected errors and return null for both
    return {
      photo: null,
      user: null
    };
  }

  return result;
}
