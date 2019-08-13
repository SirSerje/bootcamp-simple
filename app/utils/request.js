export default async (link) => {
  try {
    const response = await fetch(link);
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
};
