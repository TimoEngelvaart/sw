var push = require('web-push');

let vapIdKeys = push.generateVAPIDKeys = {
    publicKey: 'BMeBDoffBxb5D6_TH-BV39aYAESXAKECMj61-ybtf8zQaV3TNGg4odX0GsoW_VIkfdFczQra1-hSLjhvUv_JqPY',
    privateKey: '0JxkdpxbKPJ7nWidTSXoITf1HwUOvZL0bB5dW6hNNOY'
}

push.setVapidDetails('mailto:test@code.co.uk', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/djZpowCk1ZQ:APA91bFtZHS86qb5mWj4-Rxrut2nO58uj2P_V6tzbOL-XmI2VfEnacivMvJVGey8cy5Y8xmNv47d8nY78tGH5tuRxPfd3wMt3PHIyCNcny9Z8NP4ht5Uzm-nEAxd2yeOR2huxr8JI7Gz","expirationTime":null,"keys":{"p256dh":"BC2POtIJ-O7dWa0NUjxZlWzQaG0X3OsTwxWVapRiYZWY3G08mkIVOnqsHiFGYSjkvpwbTxbfGe572b-4ZwEOK2Q","auth":"RHd96dGYxBQzxEvjNWwXWA"}}

push.sendNotification(sub, 'test message');