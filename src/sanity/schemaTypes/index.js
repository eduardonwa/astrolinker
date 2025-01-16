import { authorType } from "./documents/author";
import { categoryType } from "./documents/category";
import { postType } from "./documents/post";
import { blockContentType } from "./objects/blockContent";

export const schema = {
  types: [authorType, categoryType, postType, blockContentType],
};