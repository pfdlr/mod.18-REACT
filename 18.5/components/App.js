var contacts = [
  {
    id: 1,
    firstName: "Jan",
    lastName: "Nowak",
    email: "jan.nowak@example.com"
  },
  {
    id: 2,
    firstName: "Adam",
    lastName: "Kowalski",
    email: "adam.kowalski@example.com"
  },
  {
    id: 3,
    firstName: "Zbigniew",
    lastName: "Koziol",
    email: "zbigniew.koziol@example.com"
  }
];

var contactForm = {
  firstName: "",
  lastName: "",
  email: ""
};

var App = React.createClass({
  render: function() {
    return (
      <div className={"app"}>
        <h3 className={"form-header"}>Contact form</h3>
        <ContactForm contact={contactForm} />
        <Contacts items={contacts} />
      </div>
    );
  }
});
