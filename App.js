import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Home from './src/home';
import Route from './src/route';
import Splash from './src/splash';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);
  }, []);

  return isShowSplash ? <Splash /> : <Route />;
};

export default App;
