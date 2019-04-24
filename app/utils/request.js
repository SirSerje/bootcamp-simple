export default async (link) => {
    try {
        return await (await fetch(link)).json();
    } catch (e) {
        console.error('We are falling down with an Error', e);
    }
};

