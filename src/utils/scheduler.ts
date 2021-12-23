type Task<T> = () => Promise<T>;

/**
 * ## 示例
 * ```js
   const timeout = (time) =>
     new Promise((resolve) => {
       setTimeout(resolve, time);
     });
 
   const scheduler = new Scheduler(2);
   const addTask = (time, order) => {
     scheduler.add(() => timeout(time)).then(() => console.log(order));
   };
 
   addTask(1000, "1");
   addTask(500, "2");
   addTask(300, "3");
   addTask(400, "4");
 
   // output: 2 3 1 4
   // 一开始，1、2两个任务进入队列
   // 500ms时，2完成，输出2，任务3进队
   // 800ms时，3完成，输出3，任务4进队
   // 1000ms时，1完成，输出1
   // 1200ms时，4完成，输出4
 * ```
 */
export class Scheduler {
  onGoing = 0; // 正在进行的任务数
  tasks: Task<unknown>[] = []; //  任务队列
  maxTaskCount: number;

  /** 任务最大并发数 */
  constructor(maxTaskCount: number) {
    this.maxTaskCount = maxTaskCount;
  }

  add<T>(task: Task<T>) {
    const thisTaskIsDone = new Promise<T>((resolve, reject) => {
      // 返回当前任务完成时才 resolve 的 promise
      this.tasks.push(() =>
        // 推进队列
        task()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.onGoing--; // 调整进行任务数
            this.executeNext(); // 调用下一个任务
          })
      );
    });

    this.executeNext(); // 一开始的时候需要尝试调用一下下一个

    return thisTaskIsDone; // 1. 返回
  }

  executeNext() {
    if (this.onGoing >= this.maxTaskCount || this.tasks.length == 0) {
      // 如果正在执行的任务有最大并发数个或者没有后续了就不再继续了
      return;
    }

    this.onGoing++; // 标记现在又有任务了

    const fn = this.tasks.splice(0, 1)[0]; // 出队一个任务
    fn(); // 并执行他
  }
}
