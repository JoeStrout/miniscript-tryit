# miniscript-tryit

### Online editor/runner/tutorial for basic MiniScript code

## Dependencies

This project builds on [the Ace code editor](https://github.com/JoeStrout/ace) and [miniscript-web-term](https://github.com/JoeStrout/miniscript-web-term).  Both of those involve build steps and output a much smaller set of files that are actually needed by client projects, like this one.

So, we've just included the build products here.  You should be able to just clone this repo and immediately run it.  (You will need an actual web server; `python -m http.server` is a convenient way to launch one locally for testing purposes.)

### Updating miniscript-web-term

1. Clone [miniscript-web-term](https://github.com/JoeStrout/miniscript-web-term) to your local machine.

2. In the miniscript-web-term directory, do
```
npm run build
```

3. Copy the newly built files in the `dist` subdirectory to the `miniscript-web-term` subdirectory of this repo, overwriting the old files there.


### Updating Ace

- ToDo


