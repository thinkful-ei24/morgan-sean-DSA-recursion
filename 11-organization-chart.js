const data = [
  { id: "Zuckerberg", parent: null },
  { id: "Schroepfer", parent: "Zuckerberg" },
  { id: "Bosworth", parent: "Schroepfer" },
  { id: "Steve", parent: "Bosworth" },
  { id: "Kyle", parent: "Bosworth" },
  { id: "Andra", parent: "Bosworth" },
  { id: "Zhao", parent: "Schroepfer" },
  { id: "Richie", parent: "Zhao" },
  { id: "Sofia", parent: "Zhao" },
  { id: "Jen", parent: "Zhao" },
  { id: "Schrage", parent: "Zuckerberg" },
  { id: "VanDyck", parent: "Schrage" },
  { id: "Sabrina", parent: "VanDyck" },
  { id: "Michelle", parent: "VanDyck" },
  { id: "Josh", parent: "VanDyck" },
  { id: "Swain", parent: "Schrage" },
  { id: "Blanch", parent: "Swain" },
  { id: "Tom", parent: "Swain" },
  { id: "Joe", parent: "Swain" },
  { id: "Sandberg", parent: "Zuckerberg" },
  { id: "Goler", parent: "Sandberg" },
  { id: "Eddie", parent: "Goler" },
  { id: "Julie", parent: "Goler" },
  { id: "Annie", parent: "Goler" },
  { id: "Hernandez", parent: "Sandberg" },
  { id: "Rowi", parent: "Hernandez" },
  { id: "Inga", parent: "Hernandez" },
  { id: "Morgan", parent: "Hernandez" },
  { id: "Moissinac", parent: "Sandberg" },
  { id: "Amy", parent: "Moissinac" },
  { id: "Chuck", parent: "Moissinac" },
  { id: "Vinni", parent: "Moissinac" },
  { id: "Kelley", parent: "Sandberg" },
  { id: "Eric", parent: "Kelley" },
  { id: "Ana", parent: "Kelley" },
  { id: "Wes", parent: "Kelley" }
];

function traverse(data, parent, indent) {
  let node = {};
  data.filter(item => item.parent === parent).forEach(item => {
    const spaces = " ".repeat(indent);
    console.log(spaces + item.id);
    node[item.id] = traverse(data, item.id, indent + 4);
  });
  return node;
}

const tree = traverse(data, null, 0);
