export const getRandomInt =(min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

export const positionFinder = (direction) => {
  switch (direction) {
    case "under":
      return { name: "top", value: "2.5rem" }
    case "over":
      return { name: "top", value: "-2.5rem" }

    case "left":
      return { name: "left", value: "-2rem" }
    case "right":
      return { name: "left", value: "3rem" }
  }
}