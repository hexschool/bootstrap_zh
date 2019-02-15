// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(function () {
  'use strict'

  if (!window.docsearch) {
    return
  }

  var inputElement = document.getElementById('search-input')
  var siteDocsVersion = inputElement.getAttribute('data-docs-version')

  function getOrigin() {
    var location = window.location
    var origin = location.origin

    if (!origin) {
      var port = location.port ? ':' + location.port : ''

      origin = location.protocol + '//' + location.hostname + port
    }

    return origin
  }
  console.log('aaa')
  window.docsearch({
    apiKey: 'ef316997b6983b7e641cb5ed2a6683d1',
    indexName: 'hexschool',
    inputSelector: '#search-input',
    algoliaOptions: {
      facetFilters: ['version:' + siteDocsVersion]
    },
    transformData: function (hits) {
      return hits.map(function (hit) {
        var siteurl = getOrigin()
        var urlRE = /^https?:\/\/bootstrap\.hexschool\.com/

        // When in production, return the result as is,
        // otherwise remove our url from it.
        hit.url = siteurl.match(urlRE) ? hit.url : hit.url.replace(urlRE, '')

        // Prevent jumping to first header
        if (hit.anchor === 'content') {
          hit.url = hit.url.replace(/#content$/, '')
          hit.anchor = null
        }
        console.log(hit);

        return hit
      })
    },
    debug: false // Set debug to true if you want to inspect the dropdown
  })
}())
// docsearch({
//   apiKey: 'ef316997b6983b7e641cb5ed2a6683d1',
//   indexName: 'hexschool',
//   inputSelector: '#search-input',
//   handleSelected: function (input, event, suggestion) {
//     var url = suggestion.url
//     url = suggestion.isLvl1 ? url.split('#')[0] : url
//     // If it's a title we remove the anchor so it does not jump.
//     window.location.href = url
//   },

//   debug: false // Set debug to true if you want to inspect the dropdown
// })
