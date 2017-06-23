import * as container from '../NewNote.container';
import { addNote as addNoteActionCreator } from '../../../redux/modules/newNote.module';


jest.mock('../../../redux/selector/noteForm.selector');
jest.mock('../../../redux/modules/newNote.module');


test('mapDispatchToProps should map dispatch to props correctly', () => {
  expect(container.mapDispatchToProps).toEqual({
    addNoteActionCreator
  });
});

it('propsMapper should map add note mutation', () => {
  const props = {
    mutate: 'mutate',
    addNoteActionCreator: jest.fn()
  };

  const actual = container.propsMapper(props);

  expect(actual).toMatchSnapshot();
});

it('addNote should call addNoteAction', () => {
  const props = {
    mutate: 'mutate',
    addNoteActionCreator: jest.fn()
  };

  const { addNote } = container.propsMapper(props);
  addNote();

  expect(props.addNoteActionCreator).toHaveBeenCalledWith('mutate');
});
