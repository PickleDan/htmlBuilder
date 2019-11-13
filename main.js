import buildNode from './buildNode';


const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
    process: (value) => value,
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
    process: (value) => value,
  },
];

const getPropertyAction = (arg) => propertyActions.find(({ check }) => check(arg));

const parse = (data) => {
  const args = data.slice(1)
    .reduce((acc, arg) => {
      const { name, process } = getPropertyAction(arg);
      return { ...acc, [name]: process(arg, parse) };
    }, {
      name: data[0],
      attributes: {},
      body: '',
      children: [],
    });
  return buildNode(args.name, args.attributes, args.body, args.children);
};

console.log(parse(data));

export default parse;
