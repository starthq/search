# Developer Docs

## Overview

StartHQ provides federated search across all your web apps via a [browser extension](https://starthq.com/ext). We expose a Search Provider API that lets developers add support for their favorite services. This document walks you through it.

You may want to [watch a video](https://www.youtube.com/watch?v=WFWxjSOQMVI) of a short talk introducing the API. It's worth noting that since the video was recorded, developer access has been enabled by default on all accounts, so you don't need to explicity request it.

## Quick Start

To get started:

  - In your launcher, click the cog icon (<i class="fa fa-fw fa-cog"></i>) in the upper right on the navbar to go into edit mode.
  - Click the cog icon on the tile of the app you want to add search support for; add the app as you would normally if it's not already in the launcher.
  - Click the Develop tab & paste the code below into it.
  - Click Save, then click the cog in the navbar to save your configuration.
  - Type a search query: you should now see results from GitHub appear in the list. If you already had GitHub in your launcher, the results will be duplicated.

You can use this as a starting point for your own provider. For more info, check out the detailed instructions below.


```
{
  search: [
    {
      type:'link',
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

The key things to note about the provider definition are:

  - The provider definition is an object with the search attribute, which contains an array of objects, each with its own type. Supported type values include `message`, `file`, `contact`, `event`, `organization`, `image`, `audio`, `video`, `answer`& `link`. This allows you to return more than one set of results of the same type per app.
  - In addition to `type`, the following attributes are required: `query` determines the URL to query to generate the search results with `{{term}}` being the placeholder for the search query; `name`, `link` and `description` are used to extract the attributes that make up an individual search result.
  - the `translate` attribute depends on the type of data being parsed: use `parseHTML(response)` for HTML and `parseJSON(response)` for JSON
  - Each of the result attributes consists of two parts: a CSS selector which lists the elements & an expression, which is used to extract a string from each of the elements returned by the selector.

It's worth noting that the JS looking search provider descriptions actually use [JSON5](https://github.com/aseemk/json5), which is a superset of JSON that is easier to edit. It is *not* JavaScript so things like semicolons (;) and var assignments will result in an error.

You can see some debug output in the developer tools console when running a search. If you don't see anything, there's a syntax error in your search provider definition. 

## HTML Providers

The most common type of provider type is HTML - these providers extract search results directly from the HTML source of search result pages.

To get started with implementing your own provider, find the page with the app's search results, this needs to be an HTML page generated on the server, not a single page app where the DOM is built up using JS on the client. A quick way to determine if the page is generated on the server is to "View Source" and search for the search term - e.g. https://mail.google.com/mail/h/aez8fwf893g7/?s=q&q=starthq

If the default version of the web app doesn't generate the HTML on the server, use a User Agent switcher browser extension to access it as if though you were on a mobile device - you should get a mobile web version of the service which will most likely have server generated HTML; note this doesn't always work so you may need to Google for this or try e.g. m.dropbox.com instead of www.dropbox.com.

Make a note of the query parameter entered in the search and replace it with `{{term}}` - this is your "query" string.

The translate string for an HTML provider should be `parseHTML(response)`.

For each of `name`, `description` and `link`, find the CSS selector needed to retrieve the elements you need. The easiest way to do this is using the bookmarklet from http://selectorgadget.com/ - start by clicking the elements you want included, then the ones you want excluded, then included and so on until only the elements you want are included.

Finally, use the [AngularJS expression language](http://docs.angularjs.org/guide/expression) (which is a subset of JavaScript) and the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Node) to retrieve the data you need, e.g.: "element.textContent" to get the textual contents of the element or `element.getAttribute("href")` to get the value of the href attribute.

To test that this works correctly, fire up e.g. Chrome Developer tools (press F12 in Chrome), open the Console tab and type in the following: `var element = document.querySelectorAll‎('.repolist-name a')[0]` where '.repolist-name a' is the selector string above; then on the next line type in e.g. `element.getAttribute("href")` i.e. the Angular expression from above.

Check out the Examples section below for more examples.

## JSON Providers

JSON providers work much like HTML providers, but instead of extracting the results from HTML, you use [JSONSelect](http://jsonselect.org/) to query the JSON data structure directly. Here is an example:

```
{
  search:[
    {
      type:'link',
      query:'https://podio.com/search.json?query={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.data .object .title',
        expression:'element'
      },
      description:{
        selector:'.data .object :root',
        expression:'element.app.item_name + " by " + element.created_by.name + " in " + element.space.name'
      },
      link:{
        selector:'.data .object .link',
        expression:'element'
      }
    }
  ]
}
```

## Examples

### AngelList

```
{
  search: [
    {
      query:'https://angel.co/search?q={{term}}',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      icon:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'app.url|icons'
      },
      name:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'element.textContent'
      },
      link:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'element.getAttribute("href")'
      }
    }
  ]
}
```

### Dropbox

```
{
  search:[
    {
      type: 'link',
      query:'https://www.dropbox.com/m/search?path=%2F&search_string={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.file a',
        expression:'app.url|icons'
      },
      name:{
        selector:'.file h4',
        expression:'element.textContent'
      },
      description:{
        selector:'.file p',
        expression:'element.textContent'
      },
      link:{
        selector:'.file a.ui-link-inherit',
        expression:'element.getAttribute("href")'
      }
    }
  ]
}
```

### Gmail

```
{
  search: [
    {
      type: 'message',
      query:'https://mail.google.com/mail/h/aez8fwf893g7/?s=q&q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.ts',
        expression:'app.url|icons'
      },
      name:{
        selector:'.ts',
        expression:'element.childNodes[1].textContent.trim() || element.childNodes[2].textContent'
      },
      description:{
        selector:'.ts',
        expression:'element.childNodes[element.childNodes[1].textContent.trim() ? 2 : 4].textContent.substr(2)'
      },
      link:{
        selector:'.ts',
        expression:'"https://mail.google.com/mail/u/0/#search/" + term + "/" + $(element.parentNode).attr("href").substr(element.parentNode.getAttribute("href").indexOf("th=") + "th=".length)'
      }
    }
  ]
}
```



## Terms & Feedback

By contributing to StartHQ as a developer you agree to our [terms](https://starthq.com/terms). TLDR; don't break things and if you make something cool, let us know.

Got questions or improvement suggestions? Drop us a line on [Twitter](https://twitter.com/starthq) or via the Feedback form in the navbar.

