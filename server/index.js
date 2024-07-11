const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json())

const pgClient = new pg.Client({
  database: 'full_stack_db2',
  user: 'full_stack_user2',
  password: 'abc123',
});
//hello
async function setupApp() {
  await pgClient.connect();

  app.get('/messages', function(req, res) {
    pgClient.query('SELECT * FROM messages ORDER BY id DESC;').then(function(result) {
      
      res.send(result.rows);
    });
  });
  
  
  // todo: GET /messages/123
  app.get('/messages/:messageId', function(req, res) {
    // req.params.messageId
    pgClient.query('SELECT * FROM messages WHERE id = $1', [req.params.messageId]).then(function(result) {
      if (result.rows.length === 0) {
        return res.status(404).send();
      }
      else {
        return res.send(result.rows[0]);
      }
    })
    
  })

  // todo: POST /messages
  app.post('/messages', async function(req, res) {
    console.log('POST /messages reqbody:', req.body);

    // todo: filter out undesired properties
    
    // todo: validation. Example: was comment provided?
    // { somethingElsee: '' }
    if (!req.body.comment) {
      return res.status(422).send({ error: 'Comment must be provided' });
    }
    
    // fake since no auth system yet
    const currentUser = {
      id: 1,
    };

    // todo: check for current day... otherwise would go for all time.
    const existingMessageResult = await pgClient.query('SELECT * FROM messages WHERE author_id = $1 AND comment = $2;', [currentUser.id, req.body.comment])
    if (existingMessageResult.rows.length > 0) {
      return res.status(422).send({ error: 'You are messaging too much same thing!!' });
    }

    try {
      const result = await pgClient.query('INSERT INTO messages (id, comment, created_at, author_id) VALUES (DEFAULT, $1, $2, $3) RETURNING *', [req.body.comment, new Date(), currentUser.id])
      
      return res.json(result.rows[0]);
    } catch(error) {
      // report to logging/monitoring systems
      console.error(error);

      return res.status(500).send({error: 'Internal Server Error'})
    }

  });

  // RESTFUL naming convention
  // Retrieve all:     GET /resource
  // Retrieve one:     GET /resource/:resourceId
  // Create one:       POST /resource
  // DElete one:       DELETE /resource/:resourceId
  // Update one:       PUT /resource/:resourceId
  // Partial update:   PATCH /resource/:resourceId
  
  const port = 3001;
  app.listen(port, function() {
    console.log(`Server is running at http://localhost:${port}`)
  });
}

setupApp();
