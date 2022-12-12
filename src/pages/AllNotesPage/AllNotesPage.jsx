import { NoteComponent } from '../../components/Note/NoteComponent';

export default function AllNotes({notes}) {

  return (
    <>
      <h1>Notes</h1>
      {notes.length === 1 ?
        <span>no notes yet</span>
        :
        <div>
          {notes.map((n, i) => {
            return <NoteComponent note={n} key={i} />
          })}
        </div>
      }
    </>
  );
}
