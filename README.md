restify-boilerplate
===================

Node Restify Boilerplate

To run:

```
npm run {environment}
```

```environment``` can be ```production``` or ```development```

The difference is the NODE_ENV parameter, it will set based on ```environment``` parameters

## Package.json

To modify the port, you can modify the ```package.json```, on ```scripts.development``` or ```scripts.production```

## Forever Watch / Auto Restarts

Forever watch all the directories of the project, and will auto restarts if changes happens. So you don't need to do manual restarts each time you modify some codes.

## Modules Used

* node-restify
* mongoskin
* async
* underscore
* forever
* moment
* require-directory

# License

Copyright (c) 2014 Tian Permana

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
