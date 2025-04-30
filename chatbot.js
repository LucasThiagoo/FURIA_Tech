const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms));

client.on('message', async msg => {
    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        const contact = await msg.getContact();
        const name = contact.pushname;
        await client.sendMessage(msg.from, 'Olá! ' + name.split(" ")[0] + ' Sou o assistente virtual da Furia e-Sports. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Notícias & Resultados\n2 - Agenda de Partidas\n3 - Line-up Atual\n4 - Estatísticas & Rankings');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(5000);
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '📰 Último jogo:\n 🆚 FURIA 0 X 1 The Mongolz\n 🧨 MVP: KSCERATO');
        await delay(3000);
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Sem próximos jogos da FURIA no momento, volte mais tarde.');
        await delay(3000);
       
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '🧠 FalleN\n📛 Gabriel Toledo\n🎯 Função: IGL (In-Game Leader) e suporte\n💥 Estilo: Experiente e estratégico, lidera a equipe com visão tática refinada\n\n🧨 YEKINDAR\n📛 Mareks Gaļinskis\n🎯 Função: Entry fragger\n💥 Estilo: Agressivo e explosivo, busca abrir espaço nas rodadas iniciais\n\n🎯 KSCERATO\n📛 Kaike Cerato\n🎯 Função: Rifler (anchor / lurker)\n💥 Estilo: Consistente e clutch, peça-chave da FURIA desde sempre\n\n🧠 yuurih\n📛 Yuri Santos\n🎯 Função: Rifler (entry/secondary entry)\n💥 Estilo: Equilibrado, preciso e inteligente no mid-round\n\n🎯 molodoy\n📛 Danil Golubenko\n🎯 Função: AWPer\n💥 Estilo: Preciso e frio, traz estabilidade na função de sniper');
        await delay(3000);
        
    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '📊 Ranking Atual: #16 HLTV\nÚltimas 5 partidas: ❌ ❌ ❌ ❌ ❌');
        await delay(3000);
      
    }

    
});
