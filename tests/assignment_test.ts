Feature('과제 테스트');

Scenario('카운터', ({ I }) => {
  I.amOnPage('/');

  I.see('Hello, world!');

  I.see('Count: 0');

  I.click('Increase');
  I.see('Count: 1');

  I.click('Increase 10');
  I.see('Count: 11');

  I.click('Decrease');
  I.see('Count: 10');

  I.click('Decrease 10');
  I.see('Count: 0');
});
