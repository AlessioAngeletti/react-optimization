import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DEMO RUNNING');

  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default DemoOutput;
