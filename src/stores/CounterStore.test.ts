import CounterStore from './CounterStore';

test('CounterStore', () => {
  const counterStore = new CounterStore();

  const handleChange = jest.fn();

  counterStore.addListener(handleChange);

  counterStore.increase(10);

  expect(handleChange).toBeCalled();

  expect(counterStore.getSnapshot()).toEqual({ count: 10 });
});
