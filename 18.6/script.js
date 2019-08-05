var Counter = React.createClass({
  getDefaultProps: function() {
    console.log("Ustawianie domyślnych właściwości");
  },

  getInitialState: function() {
    console.log("Ustawianie początkowych stanów");
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  componentWillMount: function() {
    console.log("wywoływane przed renderowaniem - metoda obecnie przestarzała, oznaczona - UNSAFE_");
  },

  render: function() {
    return React.createElement(
      "div",
      {},
      React.createElement("span", {}, `Licznik   ${this.state.counter}`),
      React.createElement("button", { onClick: this.decrement }, "-"),
      React.createElement("button", { onClick: this.increment }, "+")
    );
  },

  componentDidMount: function() {
    console.log("obsługa AJAX");
  },
  componentWillReceiveProps: function() {
    console.log("przyjęcie nowej właściwości i aktualizacja stanu - - metoda obecnie przestarzała, oznaczona - UNSAFE_");
  },
  shouldComponentUpdate: function(nextState) {
    console.log("porównanie nowych i starych właściwości, w przypadku zmian przerenderowanie");
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  },
  componentWillUpdate: function() {
    console.log("wywoływane przed ponownym renderowaniem - metoda obecnie przestarzała, oznaczona - UNSAFE_");
  },
  componentDidUpdate: function() {
    console.log("aktualizacja stanu");
  },
  componentWillUnmount: function() {
    console.log("czyszczenie przed odmontowaniem komponentu: unieważnienie liczników czasu, anulowanie zapytań sieciowych, czyszczenie subskrypcji");
  }
});

var app = React.createElement("div", {}, React.createElement(Counter), React.createElement(Counter), React.createElement(Counter));

ReactDOM.render(app, document.getElementById("app"));
