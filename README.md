# StartHQ Provider API

## Overview

[StartHQ](https://starthq.com) provides federated search across all your web apps via a [browser extension](https://starthq.com/ext). This README describes how to implement your own search provider and requires that you have a StartHQ account with developer features enabled. To get this, simply sign up via the link above and then drop us a line requesting access via the "Feedback" item in the dropdown menu in the upper right.

A screencast of the search functionality is available [here](https://www.dropbox.com/s/04rrwxuuvkzpyrp/starthq.mp4) - search demo is towards the end.

You can also [watch a video](https://www.youtube.com/watch?v=WFWxjSOQMVI) of a short talk introducing the API.

## Quick Start

There is one provider per app in the StartHQ [app directory](https://starthq.com/apps/). Below is an example of the provider definition for GitHub:


```
{
  search: [
    {
      query:'https://github.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.repolist-name a',
        expression:'element.textContent'
      },
      link:{
        selector:'.repolist-name a',
        expression:'"https://github.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.description',
        expression:'element.textContent'
      }
    }
  ]
}
```

The key things to note are:

  - The provider definition is an object with the search attribute, which contains an array of objects, each with its own type. Supported type values include `message`, `answer`, `video`, `app` & `link`. This allows you to return more than one set of results of the same type per app.
  - In addition to `type`, the following attributes are required: `query` determines the URL to query to generate the search results with `{{term}}` being the placeholder for the search query; `name`, `link` and `description` are used to extract the attributes that make up an individual search result.
  - Each of the result attributes consists of two parts: a CSS selector which is uses to list the elements & and an expression, which is used to to extract a string from each of the elements returned by the selector.

To get started:

  - Sign into StartHQ after having developer access enabled.
  - In your launcher, click the cog icon in the upper right on the navbar to go into edit mode.
  - Remove all but one of the tiles from your launcher by clicking X in the corner of each tile.
  - Click the cog icon on one the remeaining tile to edit it.
  - Click the Develop tab & paste the code above into it.
  - Click Save, then click the cog in the navbar to save your configuration.
  - Type a search query: you should now see results from GitHub appear in the list.

For more info, check out the detailed instructions below.

## HTML Providers

The most common type of provider type is HTML - these providers extract search results directly from the HTML source of search result pages.

To get started with implementing your own provider, find the page with the app's search results, this needs to be an HTML page generated on the server, not a single page app where the DOM is built up using JS on the client; quick way to determine if the page is generated on the server is to "View Source" and search for the search term - e.g. https://mail.google.com/mail/h/aez8fwf893g7/?s=q&q=starthq

If the default version of the web app doesn't generate the HTML on the server, use a User Agent switcher browser extension to access it as if though you were on a mobile device - you should get a mobile web version of the service which will most likely have server generated HTML; note this doesn't always work so you may need to Google for this or try e.g. m.dropbox.com instead of www.dropbox.com.

Make a note of the query parameter entered in the search and replace it with `{{term}}` - this is your "query" string.

The translate string for an HTML provider should be "parseHTML(response)".

For each of `name`, `description` and `link`, find the CSS selector needed to retrieve the elements you need. The easiest way to do this is using the bookmarklet from http://selectorgadget.com/ - start by clicking the elements you want included, then the ones you want excluded, then included and so on until only the elements you want are included.

Finally, use the [AngularJS expression language](http://docs.angularjs.org/guide/expression) (which is a subset of JavaScript) and the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Node) to retrieve the data you need, e.g.: "element.textContent" to get the textual contents of the element or element.getAttribute("href") to get the value of the href attribute.

To test that this works correctly, fire up e.g. Chrome Developer tools (press F12 in Chrome), open the Console tab and type in the following: var element = document.querySelectorAll‎('.repolist-name a')[0] where '.repolist-name a' is the selector string above; then on the next line type in e.g. element.getAttribute("href") i.e. the Angular expression from above.

Check out the [examples directory](https://github.com/starthq/search/blob/master/examples) for more examples.

## Terms & Feedback

By contributing to StartHQ as a developer you agree to our [terms](https://starthq.com/terms). TLDR; don't break things and if you make something cool, let us know.

Got questions or improvement suggestions? Drop us a line at doreply@starthq.com, via the "Feedback" form in the navbar dropdown or send a pull request.

## License

(The MIT License)

Copyright (c) 2013+ StartHQ

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
