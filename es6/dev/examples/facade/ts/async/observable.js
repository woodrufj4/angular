import { Observable } from 'angular2/core';
var obs = new Observable(obs => {
    var i = 0;
    setInterval(_ => { obs.next(++i); }, 1000);
});
obs.subscribe(i => console.log(`${i} seconds elapsed`));
// #enddocregion
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL2V4YW1wbGVzL2ZhY2FkZS90cy9hc3luYy9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUNPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZTtBQUN4QyxJQUFJLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBUyxHQUFHO0lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vICNkb2NyZWdpb24gT2JzZXJ2YWJsZVxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbnZhciBvYnMgPSBuZXcgT2JzZXJ2YWJsZTxudW1iZXI+KG9icyA9PiB7XG4gIHZhciBpID0gMDtcbiAgc2V0SW50ZXJ2YWwoXyA9PiB7IG9icy5uZXh0KCsraSk7IH0sIDEwMDApO1xufSk7XG5vYnMuc3Vic2NyaWJlKGkgPT4gY29uc29sZS5sb2coYCR7aX0gc2Vjb25kcyBlbGFwc2VkYCkpO1xuLy8gI2VuZGRvY3JlZ2lvblxuIl19