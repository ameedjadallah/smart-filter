import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";

//components
import Header from '../Header';

const useStyles = makeStyles({
  container: {
    paddingTop: 100,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
    maxWidth: 1440,
    margin: '0 auto'
  },
});

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className="flex">
      <Header />
      <div className={classes.container}>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
