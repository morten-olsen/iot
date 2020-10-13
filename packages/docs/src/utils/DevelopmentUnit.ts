import Unit, { Changes } from '@morten-olsen/iot';

class DevelopmentUnit extends Unit {
  private _workers: { [name: string]: WorkerUnit } = {};
  private _timeWarp: number = 0;

  get time() {
    return new Date(new Date().getTime() + this._timeWarp);
  }

  public createUnit = async (name: string, code: string) => {
    const WorkerUnit = await import('worker-loader!./WorkerUnit');
    if (this._workers[name]) {
      this._workers[name].terminate();
    }
    const worker = new WorkerUnit.default();
    worker.postMessage({
      type: 'setup',
      code,
      store: this.store,
      timeWarp: this._timeWarp,
    });
    worker.onmessage = ({ data }: any) => {
      if (data.type === 'change') {
        this.change(data.changes);
      }
    };
    this._workers[name] = worker;
  };

  warp = (time: number) => {
    this._timeWarp += time;
    Object.values(this._workers).forEach((u) => {
      u.postMessage({ type: 'warp', time });
    });
  };

  onChange = async (changes: Changes) => {
    await Promise.all(
      Object.values(this._workers).map((u) =>
        u.postMessage({ type: 'update', changes })
      )
    );
  };
}

export default DevelopmentUnit;
