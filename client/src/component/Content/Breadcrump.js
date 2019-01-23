import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { HomeIcon } from '../Icons/Icon';
 
const routes = {
  '/': `Dashboard`,
  '/Organisations': 'Organisations',
  '/Organisation/': 'Organisations',
  '/Settings': 'Settings',
  '/Staff': 'Staff'
//   '/settings/a/b': 'B',
};

const findRouteName = url => routes[url];

const getPaths = (pathname) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });

  return paths;
};

const BreadcrumbsItem = ({ match }) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return (
      match.isExact ?
      (
        
        <BreadcrumbItem active>
          {routeName}
        </BreadcrumbItem>
      ) :
      (
        <BreadcrumbItem>
          <Link to={match.url || ''}>
            {routeName}
          </Link>
        </BreadcrumbItem>
      )
    );
  }
  return null;
};

const Breadcrumbs = ({  location : { pathname }, match }) => {
  const paths = getPaths(pathname);
  return (
    <Breadcrumb>
      <li className="breadcrumb-item"><HomeIcon color="#000" /></li>
      {paths.map(p => <Route path={p} component={BreadcrumbsItem} />)}
    </Breadcrumb>
  );
};

export default props => (
  <>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </>
);