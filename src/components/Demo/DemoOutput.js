import React, { useMemo } from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DEMO RUNNING');

  const { changeRandom } = props;

  // You can also use useMemo to store non-primitive types
  // const listItems = useMemo(() => [5, 3, 4, 1], []);
  const randomNumber = useMemo(() => {
    return (Math.random() * 100).toFixed(2) + ' ' + changeRandom;
  }, [changeRandom]);

  return (
    <MyParagraph>
      {props.show ? `This is new ${randomNumber}!` : ''}
    </MyParagraph>
  );
};

export default React.memo(DemoOutput);
