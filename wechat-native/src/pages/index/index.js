function random(max) {
  return Math.round(Math.random() * 500) % max;
}

const A = [
  'pretty',
  'large',
  'big',
  'small',
  'tall',
  'short',
  'long',
  'handsome',
  'plain',
  'quaint',
  'clean',
  'elegant',
  'easy',
  'angry',
  'crazy',
  'helpful',
  'mushy',
  'odd',
  'unsightly',
  'adorable',
  'important',
  'inexpensive',
  'cheap',
  'expensive',
  'fancy',
];
const C = ['red', 'yellow', 'blue', 'green', 'pink', 'brown', 'purple', 'brown', 'white', 'black', 'orange'];
const N = [
  'table',
  'chair',
  'house',
  'bbq',
  'desk',
  'car',
  'pony',
  'cookie',
  'sandwich',
  'burger',
  'pizza',
  'mouse',
  'keyboard',
];

let nextId = 1;

function buildData(count) {
  const data = new Array(count);
  for (let i = 0; i < count; i++) {
    data[i] = {
      id: nextId++,
      label: `${A[random(A.length)]} ${C[random(C.length)]} ${N[random(N.length)]}`,
    };
  }
  return data;
}

Page({
  data: {
    data: [],
    selected: 0,
  },

  run: function() {
    const startTime = new Date().getTime();
    this.setData({ data: buildData(500), selected: 0 }, () => {
      console.log(`run => 回调时间：${new Date().getTime() - startTime}ms`);
    });
  },

  add: function() {
    const startTime = new Date().getTime();
    this.setData(
      {
        data: this.data.data.concat(buildData(500)),
        selected: this.data.selected,
      },
      () => {
        console.log(`add => 回调时间：${new Date().getTime() - startTime}ms`);
      },
    );
  },

  update: function() {
    const startTime = new Date().getTime();
    const data = this.data.data;
    for (let i = 0; i < data.length; i += 10) {
      const item = data[i];
      data[i] = { id: item.id, label: item.label + ' !!!' };
    }
    this.setData({ data: data }, () => {
      console.log(`update => 回调时间：${new Date().getTime() - startTime}ms`);
    });
  },

  select: function(item) {
    this.setData({ selected: item.id });
  },

  remove: function(item) {
    const data = this.data.data;
    data.splice(data.indexOf(item), 1);
    this.setData({ data: data });
  },

  clear: function() {
    const startTime = new Date().getTime();
    this.setData({ data: [], selected: 0 }, () => {
      console.log(`clear => 回调时间：${new Date().getTime() - startTime}ms`);
    });
  },

  swapRows: function() {
    const data = this.data.data;
    if (data.length > 998) {
      let temp = data[1];
      data[1] = data[998];
      data[998] = temp;
    }
    this.setData({ data: data });
  },
});
