export type APIResponseType = {
  message: string;
  payload: ItemType | Array<Number>;
};

export type ItemType = {
  by: string;
  id: Number;
  deleted: boolean;
  text: string;
  dead: boolean;
  parent: Number;
  poll: Number;
  url: string;
  score: Number;
  title: string;
  parts: Array<Number>;
  descendants: Number;
  kids: Array<Number>;
  time: Number;
  type: string;
  comments: Array<ItemType>;
};
