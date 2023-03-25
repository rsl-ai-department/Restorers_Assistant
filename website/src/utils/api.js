async function processPhotos(formData) {
  try {
    const response = await fetch('http://backend-api-url.com/process-photos', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to process photos');
    }

    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to process photos');
  }
}

export { processPhotos };

