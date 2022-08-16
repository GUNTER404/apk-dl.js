/*
  it's my frist nodejs mudole
  APK DOWNLOADER API MODULE
  2022-08-12
  @GUNTER404/apk-dl
*/
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import tools from './config.js'

let apkcombo = {
  search: async function(args) {
    let res = (await fetch(tools.Proxy(tools.api(1, '/search/' + encodeURIComponent(args.replace(' ', '-'))))))
    let ress = []
    res = (await res.text())
    let $ = cheerio.load(res)
    let link = []
    let name = []
    $('div.content-apps > a').each(function(a, b) {
      let nem = $(b).attr('title')
      name.push(nem)
      link.push($(b).attr('href').replace('https://apkcombo-com.translate.goog/', 'https://apkcombo.com/').replace('/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp', ''))
    })
    for(i=(name.length||link.length);i<(name.length||link.length);i++){
      ress.push({name:name[i],link:link[i]})
    }
    return ress
  },
  download: async function(url) {
    let res = (await fetch(url))
    res = (await res.text())
    let $ = cheerio.load(res)
    let img = $('div.app_header.mt-14 > div.avatar > img').attr('data-src')
    let developer = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.author > a').html()
    let appname = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.app_name > h1').text()
    let link1 = 'https://apkcombo.com' + $('div.container > div > div.column.is-main > div.button-group.mt-14.mb-14.is-mobile-only > a').attr('href')
    res = (await fetch(link1))
    res = (await res.text())
    $ = cheerio.load(res)
    let link = $('#best-variant-tab > div:nth-child(1) > ul > li > ul > li > a').attr('href') + '&fp=945d4e52764ab9b1ce7a8fba0bb8d68d&ip=160.177.72.111'
    return {
      img,
      developer,
      appname,
      link
    }
  }
}

let apkdl = {
  search: async function(args) {
    let res = (await fetch(tools.Proxy(tools.api(2, '/search', {
      q: args
    }))))
    res = (await res.text())

    let $ = cheerio.load(res)

    let link = []
    let name = []
    $('a.title').each(function(a, b) {
      let nem = $(b).text()
      name.push(nem)
      link.push($(b).attr('href').replace('https://apk--dl-com.translate.goog/','https://apk-dl.com/').replace('?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp',''))
    })
    for(i=(name.length||link.length);i<(name.length||link.length);i++){
      ress.push({name:name[i],link:link[i]})
    }
    return ress
  },
  download: async function(url) {
    let res = (await fetch(tools.Proxy(url)))
    res = (await res.text())
    let $ = cheerio.load(res)
    let img = $('div.logo > img').attr('src')
    let developer = $('div.developer > a').attr('title')
    let appname = $('div.heading > h1 > a').attr('title')
    let link2 = $('div.download-btn > div > a.mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.fixed-size.mdl-button--primary').attr('href')
    res = (await fetch(link2))
    res = (await res.text())
    $ = cheerio.load(res)
    let link1 = $('head > meta:nth-child(11)').attr('content')
    link1 = link1.replace('0; url=', '')
    res = (await fetch(link1))
    res = (await res.text())
    $ = cheerio.load(res)
    let link = 'https:' + $('body > div.mdl-layout.mdl-js-layout.mdl-layout--fixed-header > div > div > div > div > div > div:nth-child(1) > div:nth-child(3) > a').attr('href')
    return {
      img,
      developer,
      appname,
      link
    }
  }
}

let aptoide = {
  search: async function(args) {
    let res = (await fetch(tools.api(5, '/apps/search', {
      query: args,
      limit: 1000
    })))

    let ress = {}
    res = (await res.json())
    ress = res.datalist.list.map(v => {
      return {
        name: v.name,
        id: v.package
      }
    })
    return ress
  },
  download: async function(id) {
    let res = (await fetch(tools.api(5, '/apps/search', {
      query: id,
      limit: 1
    })))

    res = (await res.json())
    return {
      img: res.datalist.list[0].icon,
      developer: res.datalist.list[0].store.name,
      appname: res.datalist.list[0].name,
      link: res.datalist.list[0].file.path
    }
  }
}

let apk_dl = {apkdl,apkcombo,aptoide}
export default apk_dl