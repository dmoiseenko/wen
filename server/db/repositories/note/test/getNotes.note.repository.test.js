const noteMapper = require('../../../mappers/note.mapper');
const commonMapper = require('../../../mappers/common.mapper');
const { findAll } = require('../getNotes.note.repository');


describe('findAll', () => {
  it('should pass proper query', async () => {
    const noteModel = {
      findAll: jest.fn()
    };

    await findAll(noteModel)();

    expect(noteModel.findAll).toHaveBeenCalledWith({
      raw: true,
      where: {
        [noteMapper.deleted]: false
      },
      attributes: [noteMapper.text, commonMapper.id]
    });
  });
});
