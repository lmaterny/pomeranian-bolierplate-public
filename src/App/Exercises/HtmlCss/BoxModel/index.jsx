import { useState } from 'react';
import './styles.css';

export function BoxModel() {
  const { isTrue, setIsTrue } = useState(true);

  const clickHandler = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div className="box-model-base">
      <p className="paragraph" onClick={clickHandler}>
        Donec eu eros commodo, malesuada nisi et, gravida ipsum. Nam quis
        pretium est. Mauris convallis augue turpis, non imperdiet arcu feugiat
        quis. Aenean nec aliquam justo, tincidunt imperdiet odio. Pellentesque
        est nulla, ultrices in sem non, vestibulum suscipit lacus. Cras ac ex
        nec lectus placerat vulputate. Proin sed lacus mi. Nulla molestie, elit
        nec vehicula convallis, turpis enim tristique nisl, non auctor turpis
        felis a magna. Praesent imperdiet augue id leo mollis, et tempor magna
        rutrum. Donec vel odio ligula. Nam sem nisl, volutpat eget risus eget,
        condimentum semper leo. Vivamus non luctus mi, sed auctor purus. Quisque
        erat metus, interdum non semper at, pellentesque id ligula. Proin
        venenatis tellus fringilla, posuere lacus ac, pellentesque augue.
        Aliquam leo sapien, posuere finibus molestie nec, finibus id velit. Duis
        porta pharetra mauris ac blandit.
        {/*conditional rendering */}
        {isTrue && <span className="inline-span">Test inlineowy</span>}
      </p>

      <p className="paragraph content-box">
        Donec eu eros commodo, malesuada nisi et, gravida ipsum. Nam quis
        pretium est. Mauris convallis augue turpis, non imperdiet arcu feugiat
        quis. Aenean nec aliquam justo, tincidunt imperdiet odio. Pellentesque
        est nulla, ultrices in sem non, vestibulum suscipit lacus. Cras ac ex
        nec lectus placerat vulputate. Proin sed lacus mi. Nulla molestie, elit
        nec vehicula convallis, turpis enim tristique nisl, non auctor turpis
        felis a magna. Praesent imperdiet augue id leo mollis, et tempor magna
        rutrum. Donec vel odio ligula. Nam sem nisl, volutpat eget risus eget,
        condimentum semper leo. Vivamus non luctus mi, sed auctor purus. Quisque
        erat metus, interdum non semper at, pellentesque id ligula. Proin
        venenatis tellus fringilla, posuere lacus ac, pellentesque augue.
        Aliquam leo sapien, posuere finibus molestie nec, finibus id velit. Duis
        porta pharetra mauris ac blandit.{' '}
        <span className="inline-span">Test inlineowy</span>
      </p>
      <p className="paragraph relative-box">
        Donec eu eros commodo, malesuada nisi et, gravida ipsum. Nam quis
        pretium est. Mauris convallis augue turpis, non imperdiet arcu feugiat
        quis. Aenean nec aliquam justo, tincidunt imperdiet odio. Pellentesque
        est nulla, ultrices in sem non, vestibulum suscipit lacus. Cras ac ex
        nec lectus placerat vulputate. Proin sed lacus mi. Nulla molestie, elit
        nec vehicula convallis, turpis enim tristique nisl, non auctor turpis
        felis a magna. Praesent imperdiet augue id leo mollis, et tempor magna
        rutrum. Donec vel odio ligula. Nam sem nisl, volutpat eget risus eget,
        condimentum semper leo. Vivamus non luctus mi, sed auctor purus. Quisque
        erat metus, interdum non semper at, pellentesque id ligula. Proin
        venenatis tellus fringilla, posuere lacus ac, pellentesque augue.
        Aliquam leo sapien, posuere finibus molestie nec, finibus id velit. Duis
        porta pharetra mauris ac blandit.{' '}
        <span className="inline-span">Test inlineowy</span>
      </p>
      <p className="paragraph relative-box">
        Donec eu eros commodo, malesuada nisi et, gravida ipsum. Nam quis
        pretium est. Mauris convallis augue turpis, non imperdiet arcu feugiat
        quis. Aenean nec aliquam justo, tincidunt imperdiet odio. Pellentesque
        est nulla, ultrices in sem non, vestibulum suscipit lacus. Cras ac ex
        nec lectus placerat vulputate. Proin sed lacus mi. Nulla molestie, elit
        nec vehicula convallis, turpis enim tristique nisl, non auctor turpis
        felis a magna. Praesent imperdiet augue id leo mollis, et tempor magna
        rutrum. Donec vel odio ligula. Nam sem nisl, volutpat eget risus eget,
        condimentum semper leo. Vivamus non luctus mi, sed auctor purus. Quisque
        erat metus, interdum non semper at, pellentesque id ligula. Proin
        venenatis tellus fringilla, posuere lacus ac, pellentesque augue.
        Aliquam leo sapien, posuere finibus molestie nec, finibus id velit. Duis
        porta pharetra mauris ac blandit.{' '}
        <span className="inline-span">Test inlineowy</span>
      </p>
    </div>
  );
}
