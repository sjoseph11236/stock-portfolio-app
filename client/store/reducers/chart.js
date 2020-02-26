import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_CHART = 'GOT_CHART';

/**
 * INITIAL STATE
 */

const initialState = { 
  chart: [],
}

/**
 * ACTION CREATORS
 */

const gotChart = chart => {
  return { 
    type: GOT_CHART,
    chart
  }
}


/**
 * THUNK CREATORS
 */
export const getChartThunk = (symbols = 'aapl,fb,amzn') => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/iex/stock/${symbols}`);
      dispatch(gotChart(data));
    } catch (error) {
      console.error(error);
    }
  };
}

const chart = (state = initialState, action) => {
  console.log('Taking action in chart reducer ', action, state)

  switch(action.type) {
    case GOT_CHART:
      return { ...state, chart: action.chart };
    default:
      return state;
  }
};

export default chart;