const path = require('path');

const bootstrap = require('../../../../db/bootstrap/bootstrap');
const loadTextFile = require('../../../../../common/loadTextFile.js');
const login = require('../../utils/login');
const getClient = require('../../utils/getHttpClient');

const me = loadTextFile(path.join(__dirname, '../../../../../common/graphql/query/me.graphql'));
const notes = loadTextFile(path.join(
  __dirname,
  '../../../../../common/graphql/query/getAllNotes.graphql'
));
const addNote = loadTextFile(path.join(
  __dirname,
  '../../../../../common/graphql/mutation/addNote.graphql'
));


let Cookies;

beforeAll(async () => {
  Cookies = await login();
});

beforeEach(async () => {
  await bootstrap();
});


test('should process me query', async () => {
  const res = await getClient()
    .post('/api/graphql')
    .set('Cookie', Cookies)
    .send({
      query: me
    });

  expect(res.body).toMatchSnapshot();
});

test('should process notes query', async () => {
  const res = await getClient()
    .post('/api/graphql')
    .set('Cookie', Cookies)
    .send({
      query: notes
    });

  expect(res.body).toMatchSnapshot();
});

test('should process addNote Mutation', async () => {
  const res = await getClient()
    .post('/api/graphql')
    .set('Cookie', Cookies)
    .send({
      query: addNote,
      variables: {
        text: 'note text'
      }
    });

  expect(res.body).toMatchSnapshot();
});

