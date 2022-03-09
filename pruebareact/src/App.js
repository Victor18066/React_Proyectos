import './App.css'
import React from 'react'
import { Link, Route } from "wouter"
import Home from './pages/Home/home'
import SearchResults from './pages/SearchResults/search'
import Detail from './pages/Detail/detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

export default function App() {

  return (
    <StaticContext.Provider value = {{name: 'victor', bool: true}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'> 
            <img className="App-logo" src= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAABnCAMAAADi1hE0AAAA81BMVEX///8AAAAAxf//W1sE/46OLv//8VLf39/39/cvLy8KAACDg4Mr/5kV/5IWFha6urpLS0vm5ubFxcVZWVkDrN/28P+FCf+ZmZl/NNugoKAeHh6ZkTHf00iTNTVxKChVHJn/UFD/x8f/Xlff9F/+5eXy1NT/wMCPMoyLi4uTHf8xr/8Awf//8mXKg0mGfyv/S0tUI5AC0ewqyv/s+///8/PNzc2urq5paWlzc3NjY2M4ODhcHqX/Pz/V1dUnJydVVVXWkE2cmTHy8l3W9WrBd0b+tbX4pKQ1NTVBFxdvJx6PNYSNFpP37v5eJaMA/4WDJNgTqf8X7Yj4AAAI2ElEQVR4nO2daYPaNhCGvU1STGl2gW1DWXqkNz3TC5YlYbfpld7t//81xRw+5HlnRsayTNHzFUuW9WBbx0iOPn/Ziu/vpTx+NwocC3aan38RNB8lVponk6D5OLHR/DxoPlYsNE8mQfOxotc8CZqPF7XmSdB8xGg1T4LmY0apeRI0HzU/WFluSHPcGc7Ho9F0OhqN58PVwNmJTgaV5tSy++GRzry3PCuxXMyD60P48f2MNwFfZvyU0/zzBxlxHWWJL67LhjN6Mzb1oENSPIg+hmCguyKQuEKamL2K7ADrjDeV8Or9hylcHe94617O85OUZx+qKoXl4lI+/Yi51gWdpHjQueIaU5aL8Yyv3JhO2OfSDOg0F9tfR7A0l1IFDmHS87XmlIevyFee15w3fqjmGF9ekR6s9x64wgJd5WkylqMOfb5Nsek0rBFec4RLMhTqEKectUNzPJXPnDIFmTjSvKY7hwWnExyieQaLcc7lCp9maxZRKzSP5fMWoP/W7jSfwf+WA82MrhGX7QoXPmqD5s6tfFqDayofp5rPzsg72oVm5uHLNRSuYKqk5epds/alXIR4XzrWfLYk2s9ONOOm1A3OFb/2esnPnjXHffmcJOWby7Vm6mXhRHN0A0sAu5Qg0zVXm9/9ah5YdXAK9My83GsuvxzdaAa5nu2dERBDSjtWm9+9au7IJ8SYT7AGNJdaYm40RxewAGM6T9yI3ZXYp2amcajBGIRoQrN5PzvSHN3BApCtMHz73+6O8Kj5oHs5ofjXbkRz0YYzzdgb2cnA/4p9U7Umzb98lKFyzF2KEuMJ2ozms0J725XmaA7PT7TC8DM+ffjUo/ne44xn36ksMx09HWZ7qCHNt/nsnGnGbarbco6wrC/SQ2rSnOOJTjPuNegoNUYa0lz4e7nTjHtIpQvHw2bZk8eXZvxU0lFucjalOd8KcqeZGTYyWmF4EDxXR5404z+rDmLosTHNuR67Q824qEYrDJZzmTvIk2bcNtxyN50PZ6vVbDjvUeNkpTqJGtScu51casYdkZV82Qn5xqIfzXjYds351BixXo2M2Q3KcoOas4ehS814mLqbOwj/GQoPPD+amTHOLjnNuMqHD3mYiCyQNXadasZ9kZxBeEHFwSMvmpn2F5zBH6RNczB+f4jmUgTWao7br7n5Mbea8Shh+trAo5zFhpoXzTD7Wy5YbtekRLM0h2im8ovxWy/tU7nVjLtKCz6vcnYONP/JXWQCHLVhQ+WibV97hX6sWzPTgrjbH+FYM74fdrUAp3HNEtSk+b0M+W5+ATJfSgnXnUlo2YFm/H/cH+BaM/yjbce38MvPnOGw1Pzr2yS//f5xyh/S3Qwbh4rQaOYQB5rhUN3+3eJacwQD1+f47FRmlpoRX72z5+mj17mLhD6Y0AgdLjSjd9++re9cMzYZM+PF5WmsujU/fSBqVpfNDhea0ctv3x9wrhm/NxbM4EM5m5o1P30gakbdhEPX5zjRDEaW901t95ojuBZlBQcfiHGFejWvLYuaQc0t+FQyTjSDO2Y/1d2AZvtpeaoma9WcWBY1g5lUZgmLDieawaNnP3vRgGb7uTwqkzo1byyLmukMunwiBU40g17BIZpBGqgZd45pyC5njZq3liXN4P4wY0GGOnKjZk40g8lc4aFdBazZbtK2FNi8oT7NO8uSZvAMMv6D2vrLDYE70QxKKzTBqoA1W60xA+vpatO8tyxpBr1m4yht/V1IGR+oGXRNhQ5VFRjNTLB9CTBKWJfm1LKkmX7TvDCOaolmVAxheKQKnGb9YxutCq5J818PtJrpSVSzE9ASzWjAThjsrAKnWb2ekAj73FKT5jfUmun0ylUrJdxqhhO+tsVUwGrWRjvDXmnTmkHFmNEErdAM51jSCdPGNOtWqOB17k1rVg4OtEEzbuBKYQVV4DUzkX0ZzERuSzSbw7BNa44NBjNuO5SVbTEVCJo1eyAxoTdNawZPH8+aLbEupgJJM4663wMWxQbNFZlaF1OBpJlZQ7OFjbBqyUPb87vZjoF1MRWImpmtZzawE7kt0ey5pW3FjX0xFcia2TUMOPLZi+Z29putGNgXU4GsmV1EescnbYlmM0KoxZoXFYqpQKGZO5sQe9O4ZnqzN3OLnBZrrlJMBQrNzLYEUurGNYNJcuPf2F7NsyrFVKDRDBeSirvzNq4ZDOcYParWah5VKqYClWZ0PjFcsnHNYKLenKIiIkVmRGx605qNYjatGbRs4K5wKY1rRqM5imskxh8b1mxuOQc0L8cMYBT1f6YZ3QCKy/SuuRRn1URkZwE6bQs1o5pWhHb61lwegQiaIWhKTdrj37fmW2LOPmiGoDE7YY//yLNmcv4naLYtKoowzuFRM4jLCJoxcM2u9Nj2pbnf5CdNeOi0rdSMZ1qEdVReNN9w37MLmq3LmsB7blZz924xuhA+WRg0MzBRx+zFEvETrlddCATN9pWzYQGHZwfCro5BM4MPzXw06pgUvaLn1IPmhJZqFkb8F8ZmM/FsisJXg+aElmpmPo61o9/b78A7veYWlgTNCW3VLEUpqgmaE1qrWQ4u1xE0J7RWsxhcriRoTmivZhD6Z0tucX7QzOBN86Ffu9iQr8+gmcGb5lpez/kudtDM4E8zE3WspVA1QTODR80Hf4uqOEEdNDP41Cws/pIwFuQEzQxeNR/0aV8zsjtoZvCrOYotN6TMKIXtBM0MnjXrt7wyKO9mFzQzeNdMzyMLUFtGB80M/jWvW2KWI2J9MpYoaGZog+Z1F9pi89FLsPto0Mzw8O+U+wdo/ueTlEfi58YoVsq5jCkMwlNt7QvmrquUOAFoZneIcKBZLv/XOV6rzqcZ/1a4mzcMJdNXU/yxsXVbrk9h1Ph4RFKxxFG8JE/KfrdjQKZZymuLNhdJwu0ItuWbl2qnquY1nfk1CAfqTy8O/bTNKVO/5s8O0JwQd4bj6eKm3729uuouL697o/lMCJcOSDjQ/K3vawqUCJpPgqD5JAiaT4Kg+SQImk+CoPkkCJpPgqD5FPgPO6RZx05atisAAAAASUVORK5CYII=' /> 
          </Link>
          <GifsContextProvider>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={SearchResults} /> {/* ListOfGifs */}
          <Route path='/gif/:id' component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}










