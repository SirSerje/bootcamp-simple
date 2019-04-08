const parser = (x) => {
    const obj = {
        name: x.location.name,
    };
    return JSON.stringify(obj);
};

export default parser;
