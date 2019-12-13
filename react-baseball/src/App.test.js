test('Does balls increment', () => {
  let balls = 0;
  let endResult = 1;

  if(balls < 4) { 
    balls++;
  } else {
    balls;
  }
   expect(balls).toBe(endResult);
});

test('Does balls reset at a value of 3', () => {
  let balls = 3;
  let endResult = 0;

  if(balls === 3) {
    balls = 0;
  }
   expect(balls).toBe(endResult);
});

test('Does strikes increment', () => {
  let strikes = 0;
  let endResult = 1;

  if(strikes < 3) { 
    strikes++;
  } else {
    strikes;
  }
   expect(strikes).toBe(endResult);
});

test('Does strikes reset', () => {
  let strikes = 4;
  let endResult = 0;

  if(strikes >= 3) { 
    strikes = 0;
  }
   expect(strikes).toBe(endResult);
});
