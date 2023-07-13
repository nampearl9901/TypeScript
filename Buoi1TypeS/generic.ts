function useState() {
  let state: string | number;
  function getState() {
    return state;
  }
  function setState(x: string | number) {
    state = x;
  }
  return { getState, setState };
}

let like_useState = useState();
like_useState.setState(200);
let like = like_useState.getState();

function useState_generic<T extends number | string>() {
  let state: T;
  function getState() {
    return state;
  }
  function setState(x: T) {
    state = x;
  }
  return { getState, setState };
}
let share_useState = useState_generic<number>();
