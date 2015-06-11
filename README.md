# js-fqdn
Get FQDN (Fully qualified domain name). 

## Usage

```
var fqdn = require('js-fqdn');
fqdn(function (err, hostname) {
  if (err) {
    console.log(err);
  } else {
    console.log(hostname);
  }
});
```

**Only work on Linux.**
