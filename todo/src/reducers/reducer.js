



export let toDos = [{
    item: 'Make Coffee and drink it',
    completed: false,
    id: 3892987588
  },
  {
    item: 'Stretch and some light calisthenics',
    completed: false,
    id: 65875643835672456
  },
  {
    item: 'Sumbit my lambda form',
    completed: false,
    id: 234562457572456
  }];

export const reducer = (state, action) => {
    switch (action.type) {
      case `ADD_TODO`:
        let idTag = new Date();
        return [...state, {
          item: action.payload,
          completed: false,
          id: idTag.getTime()
        }];
      case `TOGGLE_TODO`:
        return state.map(toDo => {
          if (toDo.item === action.payload) {
              toDo.completed = toDo.completed ? false : true;
          }
          return toDo;
        });
      case `CLEAR_TODOS`:
        return state.filter(toDo => toDo.completed === false);
        default:
            return state;
    }
  };