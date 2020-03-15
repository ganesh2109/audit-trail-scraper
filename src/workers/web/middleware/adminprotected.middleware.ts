import roles from '../../utils/role.constants';

export default function(req, res, next) {
  let loggedIn = false;

  if (req.session && req.session.passport) {
    let user = res.locals.user || {};
    let userRoles = user.roles || [];

    if (user) {
      loggedIn = userRoles.indexOf(roles.ADMIN) > -1;
    }
  }

  if (loggedIn) {
    next();
  } else {
    res.redirect('/');
  }
}
