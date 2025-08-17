import { useEffect, useState } from "react";
import axios from "axios";

const Filter = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      filter shown with{" "}
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

const PersonForm = ({
  persons,
  setPersons,
}: {
  persons: { name: string; number: string; id: number }[];
  setPersons: React.Dispatch<
    React.SetStateAction<{ name: string; number: string; id: number }[]>
  >;
}) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event: React.FormEvent) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    setPersons([
      ...persons,
      { name: newName, number: newNumber, id: persons.length + 1 },
    ]);
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({
  persons,
}: {
  persons: { name: string; number: string; id: number }[];
}) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          <Person person={person} />
        </div>
      ))}
    </>
  );
};

const Person = ({
  person,
}: {
  person: { name: string; number: string; id: number };
}) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState<
    { name: string; number: string; id: number }[]
  >([]);

  const [searchTerm, setSearchTerm] = useState("");

  const filterPersons = searchTerm
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : persons;

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const fetchedPersons = response.data;
      setPersons(fetchedPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons persons={filterPersons} />
    </div>
  );
};

export default App;
