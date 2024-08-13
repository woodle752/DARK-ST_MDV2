const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Créer une instance du client
const client = new Client();

client.on('qr', (qr) => {
    // Générer un QR code pour l'authentification
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Le bot est prêt à être déployé !');

    // Rejoindre un groupe avec un lien d'invitation
    const inviteLink = 'https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm';
    client.acceptInvite(inviteLink).then((group) => {
        console.log(`Le bot a rejoint le groupe : ${group.name}`);
    }).catch((err) => {
        console.error('Erreur lors de la tentative de rejoindre le groupe :', err);
    });
});

// Démarrer le client
client.initialize();
