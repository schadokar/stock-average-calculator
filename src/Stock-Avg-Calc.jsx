import React, { Component } from "react";
import {
  Segment,
  Form,
  Input,
  Button,
  Icon,
  Label,
  Menu,
  Table,
} from "semantic-ui-react";
import calc from "./calculate.js";

class StockAvgCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avgPrice: "",
      qty: "",
      desired: "",
      ltp: "",
      extraQty: "",
      newAmt: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  calculate = () => {
    const { avgPrice, ltp, qty, desired } = this.state;
    const res = JSON.parse(
      calc(parseInt(avgPrice), parseInt(ltp), parseInt(qty), parseInt(desired))
    );
    console.log(res);

    this.setState({
      extraQty: res.extraQty,
      newAmt: res.newAmt,
    });
  };

  render() {
    return (
      <Segment.Group horizontal>
        <Segment>
          <Form>
            <Form.Field>
              <Input
                label="Avg. Price"
                labelPosition="left"
                type="number"
                name="avgPrice"
                value={this.state.avgPrice}
                onChange={this.onChange}
                placeholder="Avg. Price of stock purchased"
              />
            </Form.Field>
            <Form.Field>
              <Input
                label="Quantity"
                labelPosition="left"
                type="number"
                name="qty"
                value={this.state.qty}
                onChange={this.onChange}
                placeholder="Avg. Price of stock purchased"
              />
            </Form.Field>
            <Form.Field>
              <Input
                label="Current Price"
                labelPosition="left"
                type="number"
                name="ltp"
                value={this.state.ltp}
                onChange={this.onChange}
                placeholder="Current Price/LTP of stock"
              />
            </Form.Field>
            <Form.Field>
              <Input
                label="Desired Price"
                labelPosition="left"
                type="number"
                name="desired"
                value={this.state.desired}
                onChange={this.onChange}
                placeholder="Desired Avg Price of investment"
              />
            </Form.Field>
            <Button primary onClick={this.calculate}>
              Calculate
            </Button>
          </Form>
        </Segment>
        <Segment size="large">
          <Table celled inverted selectable>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Extra Amount to invest</Table.Cell>
                <Table.Cell>
                  {parseInt(this.state.extraQty) * parseInt(this.state.ltp) ||
                    0}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Final Amount</Table.Cell>
                <Table.Cell>{this.state.newAmt}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Extra Quantity to purchase at {this.state.ltp}
                </Table.Cell>
                <Table.Cell>{this.state.extraQty}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Total Quantity</Table.Cell>
                <Table.Cell>
                  {parseInt(this.state.extraQty) + parseInt(this.state.qty) ||
                    0}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Invested Amount</Table.Cell>
                <Table.Cell>{this.state.avgPrice * this.state.qty}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Average Price</Table.Cell>
                <Table.Cell>{this.state.avgPrice}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Quantity</Table.Cell>
                <Table.Cell>{this.state.qty}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Current Price</Table.Cell>
                <Table.Cell>{this.state.ltp}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Desired Price</Table.Cell>
                <Table.Cell>{this.state.desired}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Segment.Group>
    );
  }
}

export default StockAvgCalculator;
