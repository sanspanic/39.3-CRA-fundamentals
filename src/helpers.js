const choice = (items) => {
  const randIdx = Math.floor(Math.random() * items.length);
  console.log(randIdx);
  return items[randIdx];
};

const remove = (items, item) => {
  const index = items.indexOf(item);
  if (index !== -1) {
    items.splice(index, 1);
    return items;
  } else {
    return undefined;
  }
};

export { choice, remove };
