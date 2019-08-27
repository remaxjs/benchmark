import * as React from 'react';
import { View, Text, Button } from 'remax/wechat';
import './index.css';

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
  'fancy'
];
const C = [
  'red',
  'yellow',
  'blue',
  'green',
  'pink',
  'brown',
  'purple',
  'brown',
  'white',
  'black',
  'orange'
];
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
  'keyboard'
];

let nextId = 1;

function buildData(count) {
  const data = new Array(count);
  for (let i = 0; i < count; i++) {
    data[i] = {
      id: nextId++,
      label: `${A[random(A.length)]} ${C[random(C.length)]} ${
        N[random(N.length)]
      }`
    };
  }
  return data;
}

class Row extends React.Component {
  onSelect = () => {
    this.props.select(this.props.item);
  };

  onRemove = () => {
    this.props.remove(this.props.item);
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.item !== this.props.item ||
      nextProps.selected !== this.props.selected
    );
  }

  render() {
    let { item } = this.props;
    return (
      <View className="r">
        <View className="rt">{item.id}</View>
        <View>
          <Text>{item.label}</Text>
        </View>
        <View className="cl">
          <View>x</View>
        </View>
      </View>
    );
  }
}

function Btn({ id, cb, title }) {
  return (
    <View className="col-sm-6 smallpad">
      <Button
        type="button"
        className="btn btn-primary btn-block"
        id={id}
        onClick={cb}
      >
        {title}
      </Button>
    </View>
  );
}

class Jumbotron extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { run, add, update, clear, swapRows } = this.props;
    return (
      <View className="jumbotron">
        <View className="row">
          <View className="col-md-6">
            <View className="row">
              <Btn id="run" title="Create 500 rows" cb={run} />
              <Btn id="add" title="Append 500 rows" cb={add} />
              <Btn id="update" title="Update every 10th row" cb={update} />
              <Btn id="clear" title="Clear" cb={clear} />
              <Btn id="swaprows" title="Swap Rows" cb={swapRows} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default class Main extends React.Component {
  state = {
    data: [],
    selected: 0
  };

  run = () => {
    this.setState({ data: buildData(500), selected: 0 });
  };

  add = () => {
    this.setState({
      data: this.state.data.concat(buildData(500)),
      selected: this.state.selected
    });
  };

  update = () => {
    const data = this.state.data;
    for (let i = 0; i < data.length; i += 10) {
      const item = data[i];
      data[i] = { id: item.id, label: item.label + ' !!!' };
    }
    this.forceUpdate();
  };

  select = item => {
    this.setState({ selected: item.id });
  };

  remove = item => {
    const data = this.state.data;
    data.splice(data.indexOf(item), 1);
    this.forceUpdate();
  };

  clear = () => {
    this.setState({ data: [], selected: 0 });
  };

  swapRows = () => {
    const data = this.state.data;
    if (data.length > 998) {
      let temp = data[1];
      data[1] = data[998];
      data[998] = temp;
    }
    this.forceUpdate();
  };

  render() {
    return (
      <View className="container">
        <Jumbotron
          run={this.run}
          add={this.add}
          update={this.update}
          clear={this.clear}
          swapRows={this.swapRows}
        />
        <View className="table table-hover table-striped test-data">
          {this.state.data.map(item => (
            <Row
              key={item.id}
              item={item}
              selected={this.state.selected === item.id}
              select={this.select}
              remove={this.remove}
            ></Row>
          ))}
        </View>
      </View>
    );
  }
}
