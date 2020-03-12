import { FiltrePipe } from './filtre.pipe';

describe('FiltrePipe', () => {

  let pipe: FiltrePipe;

  beforeEach(() => {
      pipe = new FiltrePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  it('filters array of objects', () => {
        expect(
            pipe.transform(
                [{ value: 1 }, { value: 2 }, { value: 3 }],
                false,
              false,
                { value: 1 }
            )
        ).toEqual([{ value: 1 }]);

        expect(
            pipe.transform(
                [{ value: 'a' }, { value: 'b' }, { value: 'c' }, {value: 'da'}, { value: 'abc' }],
                false,
              false,
                { value: 'a' }
            )
        ).toEqual([{ value: 'a' }, {value: 'da'}, { value: 'abc' }]);

    });

  it('filters array of objects with start option', () => {
        expect(pipe.transform(
            [{ value: 'ab' }, { value: 'ba' }, { value: 'ac' }, { value: 'c' }, { value: 'abc' }],
            true,
          false,
            {value: 'a'}
            )
        ).toEqual([{ value: 'ab' }, { value: 'ac' }, { value: 'abc' }]);
    });

  it('filters array of objects with exact option', () => {
    expect(pipe.transform(
      [{ value: 'ab' }, { value: 'ba' }, { value: 'ac' }, { value: 'c' }, { value: 'abc' }],
      false,
      true,
      {value: 'c'}
      )
    ).toEqual([{ value: 'c' }]);
  });

});
