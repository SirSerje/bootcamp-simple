export default async (link) => {
  try {
    return await (await fetch(link)).json();
  } catch (e) {
    throw new Error(e);
  }
};
