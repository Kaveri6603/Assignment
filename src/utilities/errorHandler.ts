export const handleApiError = (error: Error, option ?: string) => {
    console.error(error.message);
    // You can add more sophisticated error handling logic if needed
    return `Error: ${error.message}`;
  };