module.exports = {
  // pathPrefix: `/zhi-dao`,
  siteMetadata: {
    title: `Zhi Dao - Traditioneel Chinese Geneeskunde - Acupunctuur - Kruiden - Voedingsadviezen`,
    description: `Voedsel-, huisstofmijt-, dier/plantallergieën, astma/bronchitis, hooikoorts, Bewegingsapparaat / spierklachten, Acute spier/peesblessures, gewrichtspijnen, chronische pijnen, reumatische aandoeningen, slijmbeursontsteking, bewegingsbeperking, krachtvermindering, krampen, trillingen, tenniselleboog, RSI, verlammingsklachten bij CVA, Bepaalde onvruchtbaarheidstoornissen, zwangerschapsbegeleiding, bevallingsbegeleiding, postpartum begeleiding, Huidklachten, Transpiratieproblemen, jeuk, droge huid, eczeem, acne, gordelroos, psoriasis, steenpuisten, zweren, Hartritmestoornissen, nier-, long-, leverklachten, klachten van spijsverteringsorganen, Angina Pectoris, ontstekingen,bijwerkingen van chemotherapie, Hoest, verkoudheid, allergieën, astma, eczeem, buikpijn, bedplassen, slaapproblemen, ADHD, hyperactiviteit, oorpijn/ontsteking, Griep, Malaria, Dysenterie, Pfeiffer, Ontstekingsziekten, Chronische verkoudheden, verstopte holtes, astma, bronchitis, brok in de keel, hoest, slijm, stem- en spraakproblemen, afasie, slechte adem, bittere smaak, afwezigheid van smaaksensatie, speekselstoornissen, aften, tandvleesproblemen, Pijnlijke menstruatie, afwijkend bloedverlies,  afwijkende periode, pijnlijke borsten, opvliegers, PMS, witte vloed, Hoofdpijn, migraine, aangezichtspijnen, tandpijn, spierpijn, lage rugpijn, schouder, nek, ledematen, maagpijn, slaapstoornissen, dromen, hyperventilatie, rusteloosheid, angst, flauwvallen, epilepsie, dwangmatig handelen, depressiviteit, burn-out, stress, overspannenheid, dwangmatig gedrag/huilen/lachen, manisch gedrag, anorexia, bolimia, vergeetachtigheid, lusteloosheid, concentratiestoornissen, piekeren, misselijkheid, slechte eetlust, maagzuur, boeren, hikken, braken, galaandoeningen, constipatie, diarree, overgewicht, infecties, incontinentie, blaas, nierstenen, impotentie, vroegtijdige/nachtelijke zaadlozing, prostaatklachten, Eetverslaving, alcoholisme, drugsverslaving, rookverslaving, Hoge bloeddruk, lage bloeddruk, bloedarmoede, oedeem, doorbloedingsproblemen, kouwelijkheid, Voorhoofdsholteontsteking, bijholteontsteking, neusverkoudheid, oogontstekingen, vlekken zien, branderige ogen, tranen, gehoorklachten, oorsuizen, bepaalde doofheidklachten, Misselijkheid, stuitligging, opwekken bevalling, pijn na bevalling, stimuleren borstvoeding, borstontsteking, aambeien`,
    keywords: `Voedsel-, huisstofmijt-, dier/plantallergieën, astma/bronchitis, hooikoorts, Bewegingsapparaat / spierklachten, Acute spier/peesblessures, gewrichtspijnen, chronische pijnen, reumatische aandoeningen, slijmbeursontsteking, bewegingsbeperking, krachtvermindering, krampen, trillingen, tenniselleboog, RSI, verlammingsklachten bij CVA, Bepaalde onvruchtbaarheidstoornissen, zwangerschapsbegeleiding, bevallingsbegeleiding, postpartum begeleiding, Huidklachten, Transpiratieproblemen, jeuk, droge huid, eczeem, acne, gordelroos, psoriasis, steenpuisten, zweren, Hartritmestoornissen, nier-, long-, leverklachten, klachten van spijsverteringsorganen, Angina Pectoris, ontstekingen,bijwerkingen van chemotherapie, Hoest, verkoudheid, allergieën, astma, eczeem, buikpijn, bedplassen, slaapproblemen, ADHD, hyperactiviteit, oorpijn/ontsteking, Griep, Malaria, Dysenterie, Pfeiffer, Ontstekingsziekten, Chronische verkoudheden, verstopte holtes, astma, bronchitis, brok in de keel, hoest, slijm, stem- en spraakproblemen, afasie, slechte adem, bittere smaak, afwezigheid van smaaksensatie, speekselstoornissen, aften, tandvleesproblemen, Pijnlijke menstruatie, afwijkend bloedverlies,  afwijkende periode, pijnlijke borsten, opvliegers, PMS, witte vloed, Hoofdpijn, migraine, aangezichtspijnen, tandpijn, spierpijn, lage rugpijn, schouder, nek, ledematen, maagpijn, slaapstoornissen, dromen, hyperventilatie, rusteloosheid, angst, flauwvallen, epilepsie, dwangmatig handelen, depressiviteit, burn-out, stress, overspannenheid, dwangmatig gedrag/huilen/lachen, manisch gedrag, anorexia, bolimia, vergeetachtigheid, lusteloosheid, concentratiestoornissen, piekeren, misselijkheid, slechte eetlust, maagzuur, boeren, hikken, braken, galaandoeningen, constipatie, diarree, overgewicht, infecties, incontinentie, blaas, nierstenen, impotentie, vroegtijdige/nachtelijke zaadlozing, prostaatklachten, Eetverslaving, alcoholisme, drugsverslaving, rookverslaving, Hoge bloeddruk, lage bloeddruk, bloedarmoede, oedeem, doorbloedingsproblemen, kouwelijkheid, Voorhoofdsholteontsteking, bijholteontsteking, neusverkoudheid, oogontstekingen, vlekken zien, branderige ogen, tranen, gehoorklachten, oorsuizen, bepaalde doofheidklachten, Misselijkheid, stuitligging, opwekken bevalling, pijn na bevalling, stimuleren borstvoeding, borstontsteking, aambeien`,
    author: `Pim van Schayik`,
    meta: [
      { name: "msapplication-TileColor", content: "#ea4040" },
      { name: "theme-color", content: "#ff0000" },
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,    
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/news`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            variants: [`300`, `300i`, `400`, `400i`, `700`, `700i`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
