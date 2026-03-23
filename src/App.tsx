import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { merge, isEmpty, cloneDeep } from 'lodash';
//interfaces
import { ConfigInterface } from './ts/interfaces/AppInterfaces';
//routes
import { routesConfig } from './ts/routing/routingConstants/routesConfig';
//constants
import { themeOptions, viewsController } from './ts/constants/Constants';
import { configOne } from './ts/constants/LocalConfigurations';
// import { configTwo } from './ts/constants/LocalConfigurations';
// import { configThree } from './ts/constants/LocalConfigurations';
// import { configFour } from './ts/constants/LocalConfigurations';
//selectors
import { getAppConfig } from './ts/store/app/selectors/AppSelectors';
//actions
import { updateAppConfig } from '@/ts/store/app/slices/AppSlice';
//components
import Header from './ts/components/header/Header';

const App = () => {
  const dispatch = useDispatch(),
    { theme } = useSelector(getAppConfig),
    data = configOne;
  // data = configTwo;
  // data = configThree;
  // data = configFour;

  useEffect(() => {
    if (data) {
      let config: ConfigInterface = {};
      if (data.theme) {
        config = { theme: merge(cloneDeep(themeOptions), cloneDeep(data.theme)) };
      }
      if (data.views) {
        config = { ...config, views: merge(cloneDeep(viewsController), cloneDeep(data.views)) };
      }
      if (!isEmpty(config)) {
        dispatch(updateAppConfig(config));
      }
    }
  }, [data, dispatch]);

  return (
    <div
      className="container"
      style={{
        fontSize: theme?.typography?.htmlFontSize,
        backgroundColor: theme?.palette?.background?.default,
      }}
    >
      <Header />
      <main>
        <Routes>
          {routesConfig.map((el) => (
            <Route key={el.path} path={el.path} element={el.element} />
          ))}
          <Route
            path="*"
            element={<p style={{ color: theme?.palette?.danger?.main }}>Page not found</p>}
          />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
};

export default App;
