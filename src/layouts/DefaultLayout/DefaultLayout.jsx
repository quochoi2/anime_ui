import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
          {children}
      </div>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
