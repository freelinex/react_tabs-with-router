import { HashRouter, Route, Routes } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { App } from './App';
import { PageNotFound } from './components/PageNotFound';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path=":home" element={<PageNotFound />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
