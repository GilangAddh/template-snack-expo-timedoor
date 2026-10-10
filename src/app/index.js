import TemplateScreen from '@/screens/TemplateScreen';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <TemplateScreen />
    </SafeAreaProvider>
  )
}

export default App;