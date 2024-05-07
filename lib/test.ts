import getRecipe from "./getRecipe";

const ingredients = ["ayam", "bawang", "garam", "merica", "minyak"];

getRecipe(ingredients).then((res) => {
  if (res.error) {
    console.error(res);
  } else {
    console.log(res.result);
  }
});
