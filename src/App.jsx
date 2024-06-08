import { useNavigate } from 'react-router-dom'
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import './lang/i18next';
import React, { useState } from 'react';

import AppRoute from "./AppRoute";



function App() {
  const [count, setCount] = useState(0);
  return (

    <MantineProvider withNormalizeCSS withGlobalStyles>
      <ModalsProvider>
        <AppRoute />
      </ModalsProvider>
    </MantineProvider>

  )
}

export default App


