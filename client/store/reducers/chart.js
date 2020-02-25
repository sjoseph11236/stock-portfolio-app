import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_CHART = 'GET_CHART';

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
  console.log('Taking action ...')
  return { 
    type: GET_CHART,
    chart
  }
}


/**
 * THUNK CREATORS
 */
export const getChartThunk = (symbols = 'aapl,fb,amzn') => {
  console.log('here')

  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/iex/stock/${symbols}`);
      dispatch(getChart(data));
    } catch (error) {
      console.error(error);
    }
  };
}





const chart = (state = initialState, action) => {
  console.log('Taking action in chart reducer ', action, state)

  switch(action.type) {
    case GET_CHART:
      return { ...state, chart: action.chart };
    default:
      return state;
  }
};

export default chart;