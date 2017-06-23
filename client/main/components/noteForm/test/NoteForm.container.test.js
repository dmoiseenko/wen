import * as container from '../NoteForm.container';


it('should have proper form', () => {
  expect(container.form).toMatchSnapshot();
});
