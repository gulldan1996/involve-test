import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import ExchangePage from "./Components/ExchangePage/ExchangePage";
import SuccessPage from "./Components/SuccessPage/SuccessPage";
import Loading from "./Components/Loading/Loading";
import { loading, getSuccess } from "./redux/selectors";
import { loadingListMethods } from "./redux/actions";
import "./RouterNav.scss";
import Details from "./Components/Details/Details";

const RouterNav = ({ loading, loadingListMethods, success }) => {
  useEffect(() => {
    fetch("https://involve-it.com/test_front/api/payMethods")
      .then((res) => res.json())
      .then((req) => loadingListMethods(req));
  }, [loadingListMethods]);

  return loading ? (
    <div className="card-container">
      <div className="card">
        <Switch>
          <Route path="/Home" exact>
            <ExchangePage />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/Success">
            <SuccessPage success={success} />
          </Route>
          <Redirect to="/Home" />
        </Switch>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

const mapStateToProps = (state) => ({
  loading: loading(state),
  success: getSuccess(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadingListMethods: (list) => dispatch(loadingListMethods(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterNav);
