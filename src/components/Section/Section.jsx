import PropTypes from 'prop-types';
import './Section.css';
export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h1> {title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
