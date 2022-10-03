import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import renderRoutes from './routes';
import './index.css';
import CssVariables, { colors } from './views/shared-components/CssVariables';

function MetaTags() {
  return (
    <Helmet>
      <meta name='theme-color' content={colors.primary} />
    </Helmet>
  );
}

function Index() {
  return (
    <BrowserRouter>
      <MetaTags />
      {renderRoutes()}
      <CssVariables />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
