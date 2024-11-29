import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises
  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  // Map through the results and return the correct structure
  return results.map((result) => {
    if (result.status === 'fulfilled') {
      return {
        status: result.status,
        value: result.value, // for resolved promises
      };
    }
    return {
      status: result.status,
      value: result.reason.toString(), // Return the full error message (Error: ...)
    };
  });
}
