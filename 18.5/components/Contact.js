var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement("div", { className: "contactItem" },
      React.createElement("img", { className: "contactImage",
        src: "http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/contacts-icon.png"
      }),
      React.createElement("div", { className: "name-wrapper" },
        React.createElement("p", { className: "contactLabel" }, "Imię: " + this.props.item.firstName),
        React.createElement("p", { className: "contactLabel" }, "Nazwisko: " + this.props.item.lastName),
        React.createElement("a", { className: "contactEmail", href: "mailto:" + this.props.item.email }, this.props.item.email)
      )
    );
  }
});
