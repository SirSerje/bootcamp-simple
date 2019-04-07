const parser = (x) => {
  //TODO @MaximGordienko: тут ты уже имеешь объекты в виде например x.current.time_epoch, пример ниже,
  //TODO @MaximGordienko: теперь это надо привести к объекту {name: x.location.name, ... }

  return {name: x.location.name}
};

export default parser;
