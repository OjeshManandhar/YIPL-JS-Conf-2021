const KEY = 'token';

class Token {
  #token = null;

  constructor() {
    // checks whether we are on client / browser or server.
    if (typeof window === 'undefined') return;

    const token = window.localStorage.getItem(KEY);

    if (token && typeof token === 'string') {
      this.#token = token;
    }
  }

  retrieve() {
    return this.#token;
  }

  save(token) {
    if (token && typeof token === 'string') {
      window.localStorage.setItem(KEY, token);
      this.#token = token;
    } else {
      window.localStorage.removeItem(KEY);
      this.#token = null;
    }
  }
}

export default new Token();
