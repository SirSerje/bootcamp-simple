export default async (link) => {
  try {
    const response = await fetch(link);

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};
