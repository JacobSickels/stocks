import * as React from "react";
import { connect } from "react-redux";
import { getStockSymbols } from "../../core/api/actions";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import Select from "react-select";
import { history } from "../App";
import { RootState } from "../../core/RootReducer";
import { ValueType } from "react-select/lib/types";

// TODO: Hookify this!

type BrowseProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class Browse extends React.Component<BrowseProps> {
  state = {
    value: "",
    options: []
  };

  search: any;
  onSearch$ = new Subject<string>();

  componentDidMount() {
    this.props.getStockSymbols();

    this.search = this.onSearch$.pipe(debounceTime(200)).subscribe(value => {
      const fuzzy = this.props.stocks
        .map((stock: any) => ({ label: stock.name, value: stock.symbol }))
        .filter((stock: any) =>
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

  onSearchChange = (value: string) =>
    this.setState({ value }, () => this.onSearch$.next(this.state.value));

  onChange = (stock: ValueType<any>) => history.push(`/browse/${stock.value}`);

  render() {
    return (
      <Select
        inputValue={this.state.value}
        options={this.state.options}
        onInputChange={this.onSearchChange}
        onChange={this.onChange}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  stocks: state.stocks.symbols
});

const mapDispatchToProps = { getStockSymbols };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
