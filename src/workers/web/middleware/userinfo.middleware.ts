import urls from '../../utils/url.constants';
import roles from '../../utils/role.constants';

export default function(req, res, next) {
  res.locals.loggedIn = false;
  res.locals.isAdmin = false;
  res.locals.urls = urls;

  if (req.session && req.session.passport) {
    let user = req.session.passport.user || {};
    let userRoles = user.roles || [];
    res.locals.user = user;
    res.locals.isAdmin = user && userRoles.indexOf(roles.ADMIN) > -1;
    res.locals.loggedIn = !!user;
  }

  next();
}
