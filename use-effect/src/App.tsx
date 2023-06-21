import { useEffect, useState } from 'react';
import './App.css';
import { List } from './components/List';
import { PersonCard } from './components/PersonCard';
import { Person, PersonInfo } from './models/Models';

function App() {
  const [personInfo, setPersonInfo] = useState<PersonInfo>();
  const [person, setPerson] = useState<Person>();
  const [personsList, setPersonsList] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!person || personsList.length == 0) {
      fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
        .then(res => res.json())
        .then(res => {
          setPersonsList(res);
          setLoading(false);
        });
    } else {
      setLoading(true);
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${person.id}.json`)
        .then(res => res.json())
        .then(res => {
          setPersonInfo(res);
          setLoading(false);
        });
    }
  }, [person]);

  return (
    <div className="App">
      {personsList.length != 0 &&
        <List persons={personsList} activePerson={person} setPerson={(person) => { setPerson(person); }} />
      }
      {loading && <div>Loading...</div>}
      {!loading && personInfo && <PersonCard info={personInfo} />}
    </div>
  );
}

export default App;
