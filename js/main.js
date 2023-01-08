const elList = document.querySelector(".list");

for (item of pokemons) {
  const isItem = document.createElement("li");
  const newId = document.createElement("p");
  const newNum = document.createElement("p");
  const newName = document.createElement("h2");
  const newImg = document.createElement("img");
  const newType = document.createElement("h3");
  const newHeight = document.createElement("p");
  const newWeight = document.createElement("p");
  const newCandy = document.createElement("p");
  const newEgg = document.createElement("p");
  const newSpawn_chance = document.createElement("p");
  const newAwg_spawns = document.createElement("p");
  const newSpawn_time = document.createElement("date");
  const newMultipliers = document.createElement("p");
  const newWeaknesses = document.createElement("p");

  elList.appendChild(isItem);

  newId.texContent = item.id;
  newNum.textContent = item.num;
  newName.textContent = item.name;
  newImg.src = item.img;
  newType.textContent = item.type;
  newHeight.textContent = item.height;
  newWeight.textContent = item.weight;
  newCandy.textContent = item.candy;
  newEgg.textContent = item.egg;
  newSpawn_chance.textContent = item.spawn_chance;
  newAwg_spawns.textContent = item.awg_spawns;
  newSpawn_time.textContent = item.spawn_time;
  newMultipliers.textContent = item.multipliers;
  newWeaknesses.textContent = item.weaknesses;

elList.appendChild(newId);
  isItem.appendChild(newNum);
  isItem.appendChild(newName);
  isItem.appendChild(newImg);
  isItem.appendChild(newType);
  isItem.appendChild(newHeight);
  isItem.appendChild(newWeight);
  isItem.appendChild(newCandy);
  isItem.appendChild(newEgg);
  isItem.appendChild(newSpawn_chance);
  isItem.appendChild(newAwg_spawns);
  isItem.appendChild(newSpawn_time);
  isItem.appendChild(newMultipliers);
  isItem.appendChild(newWeaknesses);
}; 