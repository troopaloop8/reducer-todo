export const initialTitleState = {
    title: "Welcome to the TO DO L I S  T",
  };
  
  export const initialToDoItemsState = {
    itemsArray: [{ name: "test", id: 534324523, isCompleted: false }]
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        console.log(`adding ${action}`);
        return {
          itemsArray: [...state.itemsArray, action.payload],
        };
      case "REMOVE_ITEM":
        return {
          itemsArray: state.itemsArray.filter((e) => e.id != action.payload.id),
        };
      case "TOGGLE_COMPLETED":
        return {
          itemsArray: state.itemsArray.map((e) => {
            if (e.id === action.payload.id) {
              return { ...e, isCompleted: !e.isCompleted };
            }
            return e;
          }),
        };
      case "CLEAR_ALL":
        return {
          itemsArray: [],
        };
      case "CLEAR_COMPLETED":
        return {
          itemsArray: state.itemsArray.filter((e) => e.isCompleted === false),
        };
  
      default:
        return state;
    }
  };