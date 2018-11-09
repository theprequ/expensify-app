import React from "react";
import { shallow } from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";

test("should correctly render ExpensesSummary with one expense", () => {
    const wrapper = shallow(<ExpensesSummary 
        expenseCount={1} 
        expensesTotal={5000} 
        />);

    expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary 
        expenseCount={5} 
        expensesTotal={10000} 
        />);

    expect(wrapper).toMatchSnapshot();
});