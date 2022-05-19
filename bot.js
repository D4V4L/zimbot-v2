// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮ZimBotInc SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF ZimBotInc SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃ZimBotInc SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃THANKS TO DIKA ARDNT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━

const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//settings
global.owner = ['212693222334',''] //owner number +212693222334
global.pemilik = ['212693222334'] //owner number +212693222334
global.premium = ['212693222334'] //premium number +212693222334
global.pengguna = 'Drips' //username
global.footer = 'ZIM BOT INC'
global.botnma = 'ZIM BOT INC' //bot name
global.ownernma = 'ايانوكوجي' //owner name
global.packname = 'ايــانوكوجــي' //sticker package name
global.author = '🦄' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '🔵' //sp
global.mess = {
    success: 'تم! ',
    admin: '*هذه خاصية المشرفين!*',
    botAdmin: '*على بوت ايانوكوجي ان يكون مشرفا اولا!*',
    owner: '*هذا الأمر خاص لمالك البوت ايانوكوجي*',
    group: '*لا تستعمل الميزة الا في المجموعة!*',
    private: 'لا تستعمل الميزة الا في شات الخاص!',
    bot: 'هذا الأمر خاص بالمالك',
    wait: '*البوت في طور تجهيز🦄*',
    endLimit: '*نقاطك اليومية انتهت انتظر 12 ساعة اخرى*',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./Zimbot/aj.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
