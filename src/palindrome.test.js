describe(`Function 'palindrome'`, () => {
  const { palindrome } = require('./palindrome');

  it(`should be declared`, () => {
    expect(palindrome)
      .toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof palindrome('rotator'))
      .toBe('boolean');
  });

  it(`should return a boolean`, () => {
    expect(palindrome('rotator'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'red rum sir is murder'`, () => {
    expect(palindrome('red rum sir is murder'))
      .toBe(true);
  });

  it(`should return 'false' when input is 'home'`, () => {
    expect(palindrome('home'))
      .toBe(false);
  });

  it(`should return 'true' when input is 'eva can i see bees in a cave'`, () => {
    expect(palindrome('eva can i see bees in a cave'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'no lemon, no melon'`, () => {
    expect(palindrome('no lemon, no melon'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'I did, did I'`, () => {
    expect(palindrome('I did, did I'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'f'`, () => {
    expect(palindrome('f'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'ff'`, () => {
    expect(palindrome('ff'))
      .toBe(true);
  });

  it(`should return 'false' when input is 'FO'`, () => {
    expect(palindrome('FO'))
      .toBe(false);
  });

  it(`should return 'true' when input is 'Pop'`, () => {
    expect(palindrome('Pop'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'Was it a rat I saw?'`, () => {
    expect(palindrome('Was it a rat I saw?'))
      .toBe(true);
  });
  
});
