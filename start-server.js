import app from './server';
import dotenv from 'dotenv'

dotenv.config()

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
