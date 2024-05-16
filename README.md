# miniscript-tryit

### Online editor/runner/tutorial for basic MiniScript code

This is a project to rewrite the [MiniScript Try-It! page](https://miniscript.org/tryit/) with one that runs entirely in the browser, using [miniscript-web-term](https://github.com/JoeStrout/miniscript-web-term) (cloned from [@Sebnozzi's amazing code](https://github.com/sebnozzi/miniscript-web-term)).

**Try it now** by going to [https://joestrout.github.io/miniscript-tryit/](https://joestrout.github.io/miniscript-tryit/).

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


