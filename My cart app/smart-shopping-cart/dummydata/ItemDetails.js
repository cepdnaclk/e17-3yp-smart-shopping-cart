//for items available in supermarket
class ItemDetails {
  constructor(id, title, type, description, img, price) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.description = description;
    this.img = img;
    this.price = price;
  }
}

const ITEMDETAILS = [
  new ItemDetails(
    "item0",
    "Brown eggs",
    "dairy",
    "Raw organic brown eggs in a basket",
    require("./images/0.jpg"),
    28.1
  ),

  new ItemDetails(
    "item1",
    "Sweet fresh stawberry",
    "fruit",
    "Sweet fresh stawberry on the wooden table",
    require("./images/1.jpg"),
    29.45
  ),

  new ItemDetails(
    "item2",
    "Asparagus",
    "vegetable",
    "Asparagus with ham on the wooden table",
    require("./images/2.jpg"),
    18.95
  ),

  new ItemDetails(
    "item3",
    "Green smoothie",
    "dairy",
    "Glass of green smoothie with quail egg's yolk",
    require("./images/3.jpg"),
    17.68
  ),

  new ItemDetails(
    "item4",
    "Raw legums",
    "vegetable",
    "Raw legums on the wooden table",
    require("./images/4.jpg"),
    17.11
  ),

  new ItemDetails(
    "item5",
    "Baking cake",
    "dairy",
    "Baking cake in rural kitchen - dough",
    require("./images/5.jpg"),
    11.14
  ),

  new ItemDetails(
    "item6",
    "Pesto with basil",
    "vegetable",
    "Italian traditional pesto with basil, chesse and oil",
    require("./images/6.jpg"),
    18.19
  ),

  new ItemDetails(
    "item7",
    "Hazelnut in black ceramic bowl",
    "vegetable",
    "Hazelnut in black ceramic bowl.",
    require("./images/7.jpg"),
    27.35
  ),

  new ItemDetails(
    "item8",
    "Fresh stawberry",
    "fruit",
    "Sweet fresh stawberry on the wooden table",
    require("./images/8.jpg"),
    28.59
  ),

  new ItemDetails(
    "item9",
    "Lemon and salt",
    "fruit",
    "Rosemary, lemon and salt on the table",
    require("./images/9.jpg"),
    15.79
  ),
];

export default ITEMDETAILS;
