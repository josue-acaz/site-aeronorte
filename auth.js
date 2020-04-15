import api from './api';

export default class Auth {

  constructor() {

  }

  async login(email, password, session) {
    const response = await api.post(`/sessions/${session}`, {
      email,
      password,
    });

    localStorage.setItem('session-auth', JSON.stringify({
      auth_data: response.data,
      sessionType: session
    }));
    return response.data;
  }

  isAuthenticated() { return(localStorage.getItem('session-auth') !== null); }
  getUserLogged() {
    const { auth_data } = JSON.parse(localStorage.getItem('session-auth'));
    return auth_data;
  }
  logout() { 
    localStorage.removeItem('session-auth');
  }
  getSessionType() {
    const session = localStorage.getItem('session-auth');

    if(session !== null) {
      const { sessionType } = JSON.parse(session);
      return sessionType;
    }
    
    return null;
  }
}