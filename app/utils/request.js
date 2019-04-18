export default async (link) => {
  try {
    return await (await fetch(link)).json();
  }catch (e) {
    //I don't want to get error in runtime, so I try to pass it only
    //through console
    console.error('We are falling down with an Error', e);
  }
};
