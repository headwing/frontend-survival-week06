import Store from './Store';

export type CounterStoreSnapshot = {
  count: number;
}

export default class CounterStore extends Store<CounterStoreSnapshot> {
  private count = 0;

  constructor() {
    super();
    this.takeSnapshot();
  }

  increase(step = 1) {
    this.count += step;

    this.update();
  }

  decrease(step = 1) {
    this.count -= step;

    this.update();
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  private takeSnapshot() {
    this.snapshot = {
      count: this.count,
    };
  }
}
