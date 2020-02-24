import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_CHART = ' GET_CHART';

/**
 * INITIAL STATE
 */

const initialState = { 
  chart: [],
}

/**
 * ACTION CREATORS
 */

const getChart = chart => {
  return { 
    type: GET_CHART,
    chart
  }
}


/**
 * THUNK CREATORS
 */
export const getChartThunk = (symbols = 'aapl,fb,amzn') => async dispactch => {
  try {
    const { data } = await axios.get(`/api/iex/stock/${symbols}`);
    dispactch(getChart(data));
  } catch (error) {
    console.error(error);
  }
};

const stock = (state = initialState, action) => {
  switch(action.type) { 
    case GET_CHART:
      return { ...state, chart: action.chart }
    default:
      return state
  }
};

export default chart;