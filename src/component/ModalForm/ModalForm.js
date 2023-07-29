import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./modal-form.css";
import { v4 as uuid } from "uuid";
import { useVideoContext } from "../../context/VideoContext";

import PlaylistsLists from "../PlaylistsLists/PlaylistsLists";

function ModalForm({
  notes,
  playlist,
  editNote,
  setEditedNotes,
  allNotes,
  createPlaylist,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setInput("");
    setEdit("");
    setPlaylistTitle("");
    setPlaylistDesc("");
  };
  const handleShow = () => setShow(true);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(editNote?.note);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");
  const { videoState, videoDispatch } = useVideoContext();

  const handleAddNotes = () => {
    notes((prevNotes) => [...prevNotes, { id: uuid(), note: input }]);
    handleClose();
  };
  const handleEditedNotes = () => {
    setEditedNotes(
      allNotes.map((note) => {
        if (note.id === editNote.id) {
          return { id: editNote.id, note: edit };
        } else {
          return note;
        }
      })
    );
    handleClose();
  };

  const createNewPlaylist = () => {
    const newPlaylist = {
      id: uuid(),
      title: playlistTitle,
      desc: playlistDesc,
      img: playlist
        ? playlist.thumbnail
        : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
      videos: playlist ? [playlist] : [],
    };
    videoDispatch({ type: "ADD_PLAYLIST", playlist: newPlaylist });
    handleClose();
  };
  console.log(videoState);
  console.log(videoState.playlists.map((playlist) => playlist));
  return (
    <>
      {createPlaylist && (
        <i class="fas fa-plus-circle" onClick={handleShow}></i>
      )}
      {editNote && <i class="fas fa-pen" onClick={handleShow}></i>}
      {playlist && <i class="fas fa-sliders-h" onClick={handleShow}></i>}
      {playlist && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add to playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter title of your playlist"
                  onChange={(e) => {
                    setPlaylistTitle(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write a description"
                  onChange={(e) => {
                    setPlaylistDesc(e.target.value);
                  }}
                />
              </Form.Group>
              <div className="playlist-btn">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={createNewPlaylist}>
                  Create new playlist
                </Button>
              </div>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <PlaylistsLists video={playlist} handleClose={handleClose} />
          </Modal.Footer>
        </Modal>
      )}
      {notes && <i class="fas fa-edit" onClick={handleShow}></i>}
      {notes && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Write a note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  value={editNote ? editNote : input}
                  as="textarea"
                  rows={3}
                  placeholder="new notes"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddNotes}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {editNote && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  value={edit}
                  as="textarea"
                  rows={3}
                  placeholder="new notes"
                  onChange={(e) => {
                    setEdit(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEditedNotes}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {createPlaylist && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create new playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter title of your playlist"
                  onChange={(e) => {
                    setPlaylistTitle(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write a description"
                  onChange={(e) => {
                    setPlaylistDesc(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={createNewPlaylist}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ModalForm;
