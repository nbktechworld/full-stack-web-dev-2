import React from 'react';
import { Link } from 'react-router-dom';

import './messages.css';

export default function Messages() {
  const [newComment, setNewComment] = React.useState('');

  function addMessage(event) {
    event.preventDefault();
    setSubmissionError('');

    const newMessage = { comment: newComment };

    fetch('http://localhost:3001/messages', {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      // check if no problems (response.ok)
      // im gonna assume happy path
      if (!response.ok) {
        throw new Error('There was a problem with the response');
      }

      return response.json();
    }).then((createdPost) => {
      setMessages([
        createdPost,
        ...messages,
      ])
      setNewComment('')
    })
    .catch((error) => {
      setSubmissionError(error.message);
    });
  }

  const [messages, setMessages] = React.useState([]);
  const [submissionError, setSubmissionError] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:3001/messages').then(function(response) {
      return response.json();
    }).then(function(posts) {
      setMessages(posts);

    })

  }, [])

  function onCommentChange(event) {
    setNewComment(event.target.value);
  }

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Messages</h1>
      <form onSubmit={addMessage}>
        <div className="form-group">
          <label htmlFor="message-form-comment">Comment</label>
          <textarea name="comment" id="message-form-comment" value={newComment} onChange={onCommentChange}></textarea>
        </div>
        <button type="submit">Comment</button>
        {submissionError && (
          <div class="submission-error-message">{submissionError}</div>
        )}
      </form>

      <h2>Latest</h2>
      <div id="message-list">
        {messages.map(function(message) {
          return (
            <div className="message-list-item" key={message.id}>{message.comment}</div>
          )
        })}
      </div>
    </>
  );
}
