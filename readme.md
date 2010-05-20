# Object.toQueryString Plugin for Prototype

The built in `Object.toQueryString` can't handle nested dicts, so this plugin can. We override the built in function so that `Ajax.Request` and other functions that use it Just Work™. It behaves the same as the built in function for single dimensional dicts.

## Usage

	Object.toQueryString({"foo": "bar"}) // => "foo=bar"
	Object.toQueryString({"qux": {"corge": "grault"}, "garply": "waldo"}) // => "qux%5Bcorge%5D=grault&garply=waldo"

## Tests

Open `spec/dom.html` in your browser to run the test suite.

## Licence

(The MIT License)

Copyright (c) 2010 Brightbox Ltd <hello@brightbox.co.uk>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
