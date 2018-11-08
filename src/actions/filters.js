// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
// No need to set "undefined" as default since if there is no argument, it's going to be undefined anyways
export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});