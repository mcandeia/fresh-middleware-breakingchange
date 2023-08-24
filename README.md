# Reproducing

1. Clone the project
2. Run `deno task start`
3. Open a new terminal tab and run

```sh
curl http://localhost:8000/a/b/c
```

Notice that the following log will appear in the server running terminal

`Passing here` (as the /a/\_middleware.ts was hit)

Now go to `./deno.json` and change the fresh to 1.4.0 version, run again the same request and note that the log will disappear.
