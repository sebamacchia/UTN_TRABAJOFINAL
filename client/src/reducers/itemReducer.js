import uuid from "uuid";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEM_LOADING,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  items: [
    // {
    //   name: "one",
    //   category: "drum",
    //   index1: 1,
    //   index2: 2,
    //   index3: 3,
    //   index4: 4,
    //   index5: 5,
    //   index6: 6,
    //   index7: 7,
    //   index8: 8,
    //   index9: 9,
    //   index10: 1,
    //   index11: 2,
    //   index12: 3,
    //   index13: 4,
    //   index14: 5,
    //   index15: 6,
    //   index16: 7
    // },
    // {
    //   name: "two",
    //   category: "drum",
    //   index1: 1,
    //   index2: 2,
    //   index3: 3,
    //   index4: 4,
    //   index5: 5,
    //   index6: 6,
    //   index7: 7,
    //   index8: 8,
    //   index9: 9,
    //   index10: 1,
    //   index11: 2,
    //   index12: 3,
    //   index13: 4,
    //   index14: 5,
    //   index15: 6,
    //   index16: 7
    // }
  ],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
