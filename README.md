
ts-node-dev bug demonstration of issue [#57](https://github.com/whitecolor/ts-node-dev/issues/57)

Steps to reproduce:

1. `npm install`
2. `npm run watch-buggy`
3. `curl http://localhost:11223/request` --> prints out "BOOM1"
4. Edit `src/app.ts` and change `BOOM1` to `BOOM2`, save --> server restarts
5. `curl http://localhost:11223/request` --> *still* prints out "BOOM1"
6. Edit `src/app.ts` and change `BOOM2` to `BOOM3`, save --> server restarts
7. `curl http://localhost:11223/request` --> now prints out "BOOM3"

When running with `npm run watch-works` it works correctly.
