import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import SuccessfulPage from "./Components/SuccessfulPage/SuccessfulPage";
import ConfirmationPage from "./Components/ConfirmationPage/ConfirmationPage";
import ExchangePage from "./Components/ExchangePage/ExchangePage";
import Loading from "./Components/Loading/Loading";
import { loading } from "./redux/selectors";
import { loadingListMethods } from "./redux/actions";

const RouterNav = ({ loading, loadingListMethods }) => {
  useEffect(() => {
    fetch("https://involve-it.com/test_front/api/payMethods")
      .then((res) => res.json())
      .then((req) => loadingListMethods(req));
  }, [loadingListMethods]);

  return loading ? (
    <Switch>
      <Route path="/Exchange" exact>
        <ExchangePage />
      </Route>
      <Route path="/Confirmation">
        <ConfirmationPage />
      </Route>
      <Route path="/Successful">
        <SuccessfulPage />
      </Route>
      <Redirect to="/Exchange" />
    </Switch>
  ) : (
    <Loading />
  );
};

const mapStateToProps = (state) => ({
  loading: loading(state)
});
const mapDispatchToProps = (dispatch) => ({
  loadingListMethods: (list) => dispatch(loadingListMethods(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterNav);
