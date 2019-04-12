import * as React from "react";
import { connect } from "react-redux";
import { getStockSymbols } from "../../core/api/actions";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import Select from "react-select";
import { history } from "../App";
import Stock from "./Stock";

// TODO: Hookify this!

class Browse extends React.Component {
  state = {
    value: "",
    options: []
  };

  search;
  onSearch$ = new Subject();

  componentDidMount() {
    this.props.getStockSymbols();

    this.search = this.onSearch$.pipe(debounceTime(200)).subscribe(value => {
      const fuzzy = this.props.stocks
        .map(stock => ({ label: stock.name, value: stock.symbol }))
        .filter(stock =>
          stock.label.toLowerCase().startsWith(value.toLowerCase())
        );

      this.setState({
        options: value === "" ? [] : fuzzy
      });
    });
  }

  componentWillUnmount() {
    this.search && this.search.unsubscribe();
  }

  onSearchChange = value =>
    this.setState({ value }, () => this.onSearch$.next(this.state.value));

  onChange = stock => history.push(`/browse/${stock.value}`);

  render() {
    return (
      <Select
        inputValue={this.state.value}
        options={this.state.options}
        onInputChange={this.onSearchChange}
        onChange={this.onChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks.symbols
});

const mapDispatchToProps = { getStockSymbols };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
