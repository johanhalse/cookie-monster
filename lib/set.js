function set(name, value, days = null, path = '/', domain = null, secure = false) {
  const date = new Date();
  const type = typeof(value);

  let expires = '';
  let valueToUse = '';
  let secureFlag = '';
  let domainFlag = '';

  if (days) {
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }

  if (type === 'object' && type !== 'undefined') {
    valueToUse = encodeURIComponent(JSON.stringify({ value }));
  } else {
    valueToUse = encodeURIComponent(value);
  }

  if (secure) {
    secureFlag = '; secure';
  }

  if (domain) {
    domainFlag = `; domain=${encodeURIComponent(domain)}`;
  }

  document.cookie = `${name}=${valueToUse}${expires}; path=${path}${secureFlag}${domainFlag}`;
}

export default set;
