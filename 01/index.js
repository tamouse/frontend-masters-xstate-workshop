const elBox = document.querySelector('#box');

// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  /*switch (
    state
    // Add your state/event transitions here
    // to determine and return the next state
  ) {
  }*/
  switch (state) {
    case "inactive":
      switch (event) {
        case "CLICK":
          return "active";
        default:
          return state;
      };
    case "active":
      switch (event) {
        case "CLICK":
          return "inactive";
        default:
          return state;
      };
    default:
      return state;
  }
}

// Keep track of your current state
let currentState = undefined;

function send(event) {
  // Determine the next value of `currentState`
  currentState = transition(currentState, event)
  console.log(currentState)
  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  console.log("clicked...")
  // send a click event
  send("CLICK")
});
