# Stock Portfolio App:
  A full-stack web application that allows users to purchase public stocks using the [IEX Cloud API](https://iexcloud.io/console/).

  ![Homepage](/public/home.png)

  [Visit Here](https://tttp-stock-app.herokuapp.com/)

# Image Walk-through:

**Register**

User begins by clicking the `Register` button, and filling out some basic info: 
  <p align="center">
    <img src="https://media.giphy.com/media/WTorPTEAMoWv3szjCY/giphy.gif">
  </p>
  
**Update Portfolio**

Next, a user navigates to their `Portfolio` to purchase stocks with valid ticker names and see the updated portfolio in real time with stock data from [IEX Cloud API](https://iexcloud.io/console/): 
  <p align="center">
    <img src="https://media.giphy.com/media/J2mxtNq79qx4EQBZfl/giphy.gif">
  </p>

**Transactions History**

After, user can click on the `Transactions` to view transaction history. 
  <p align="center">
    <img src="https://media.giphy.com/media/VEas4fWbs1J7dc5Kpy/giphy.gif">
  </p>

Visit the site and try it out for yourself to see of these features in action: [Visit Here](https://tttp-stock-app.herokuapp.com/)

# Take Aways: 
  - Integrated IEX API for stock data to give minute-by-minute price and percent change updates for any stocks showing on screen.
  - Integrated user authentication using Node and PostgreSQL and secured user data by hashing password entries.

# Resources:
React, Redux, Express, Sequelize, Postgres, Heroku, IEX Cloud API.

# Local Setup: 
  From the terminal run:

  ``` 
  git clone https://github.com/sjoseph11236/stock-portfolio-app
  cd stock-portfolio
  createdb stock_portfolio
  npm install
  npm run start:dev
  ```

  Runs the app in the development mode.
  Open http://localhost:3000 to view it in the browser.

# Sources:  
  [IEX Cloud](https://iexcloud.io/docs/api/)