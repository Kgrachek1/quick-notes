export const NoteComponent = ({ user, note }) => {
    return (
      <div>
        <div>{note.text}</div>
        <div>{note.createdAt}</div>
      </div>
    )
  }