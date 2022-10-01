import React from 'react';
import css from './Statistics.module.css'
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const Statistics = ({title,stats}) => {
  return (
    <section className={css.statistics}>
      {title &&  <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat =>(
          <li key={stat.id} className={css.item} style={{ backgroundColor: getRandomHexColor()}}>
            <span>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
  stats:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.number,
  }))
}
