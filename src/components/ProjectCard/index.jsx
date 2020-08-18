import React from 'react';
import style from './projects.module.less';

const projectCard = (props) => {
  const { img } = props;
  return (
    <div className={style.projectCard}>
      <div
        className={style.projectImg}
        style={{
          backgroundImage: `url(${img}`,
        }}
      />
    </div>
  );
};

export default projectCard;
