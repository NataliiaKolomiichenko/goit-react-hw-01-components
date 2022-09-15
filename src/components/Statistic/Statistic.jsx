import PropTypes from "prop-types"
import css from "./Statistic.module.css"

const createColor = () => {
    const color =
        'rgba(' +
        Math.round(Math.random() * 255) +
        ',' +
        Math.round(Math.random() * 255) +
        ',' +
        Math.round(Math.random() * 255) +
        ',' +
        0.5 +
        ')';

    return color;
};

const Statistic = ({ title, stats } ) => (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
    {stats.map(({ id, label, percentage }) => (
        <li key={id} className={css.item} style={{ backgroundColor: createColor() }}>
            <span>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
        </li>
    ))}
  </ul>
</section>
)

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Statistic;

