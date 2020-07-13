var push = require('web-push');

let vapIdKeys = push.generateVAPIDKeys = {
    publicKey: 'BMeBDoffBxb5D6_TH-BV39aYAESXAKECMj61-ybtf8zQaV3TNGg4odX0GsoW_VIkfdFczQra1-hSLjhvUv_JqPY',
    privateKey: '0JxkdpxbKPJ7nWidTSXoITf1HwUOvZL0bB5dW6hNNOY'
}

push.setVapidDetails('mailto:test@code.co.uk', vapIdKeys.publicKey, vapIdKeys.privateKey)