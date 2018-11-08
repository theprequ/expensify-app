import moment from "moment";
import { create } from "domain";

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // BEFORE S11L110
        // if typeof startDate/endDate is not a number -> evaluate them to true -> show all expenses regardless of the date
        // if typeof startDate/endDate is a number -> check if the current expense's createdAt value is bigger/smaller than startDate/endDate -> return true
        // const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;

        // AFTER S11L110
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // if every three filters are evaluated as true, only then return the current expense
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1
        }
    })
};