import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotesPage/NewNotePage';
import AllNotesPage from '../AllNotesPage/AllNotesPage';
import NavBar from '../../components/NavBar/NavBar';
import * as notesAPI from '../../utilities/notes-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, [])
  // useEffect(() => {
  //   async function fetchUser() {
  //     const authenticatedUser = await getUser();
  //     setUser(authenticatedUser);
  //   }

  //   fetchUser(); 
  // }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/notes/new" element={<NewNotePage setNotes={setNotes} notes={notes}/>} />
              <Route path="/notes" element={<AllNotesPage notes={notes}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
