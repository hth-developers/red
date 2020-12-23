import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/rootStack';
import NavigationService from './src/utils/navigation';

const App = () => {
  return (
    <NavigationContainer
      ref={(navigationRef) =>
        NavigationService.setTopLevelNavigator(navigationRef)
      }>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
