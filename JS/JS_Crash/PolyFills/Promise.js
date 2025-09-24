class MyPromise {
  constructor(executorFn) {
    this._state = "pending";
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];
    this.value = undefined;
    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  then(cb) {
    if (this._state == "fulfilled") {
      cb(this.value);
      return this;
    }
    this._successCallbacks.push(cb);
    return this;
  }

  catch(cb) {
    if (this._state == "rejected") {
      cb();
      return this;
    }
    this._errorCallbacks.push(cb);
    return this;
  }

  finally(cb) {
    if (this._state != "pending") {
      cb();
      return this;
    }
    this._finallyCallbacks.push(cb);
    return this;
  }
  resolverFunction(value) {
      this.value = value;
    this._state = "fulfilled";
    this._successCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb());
  }
  rejectorFunction(error) {
    this._state = "rejected";
    this._errorCallbacks.forEach((cb) => cb(error));
    this._finallyCallbacks.forEach((cb) => cb());
  }
}

function wait(seconds) {
  const p = new MyPromise((resolve, reject) => {
    // setTimeout(()=>resolve('Deep'),5*1000)
    resolve("deep");
  });
  return p;
}

const p = wait(5);

p.then((e) => console.log(`Promise Resolved After 10sec`, e))
  .catch(() => console.log("Rejected after 10sec"))
  .finally(() => console.log("Meh toh har bar chaluga"));

p.then((e) => console.log(`Promise Resolved After 10sec`, e))
  .catch(() => console.log("Rejected after 10sec"))
  .finally(() => console.log("Meh toh har bar chaluga"));
