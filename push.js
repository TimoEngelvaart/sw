var push = require('web-push');

let vapIdKeys = push.generateVAPIDKeys = {
    publicKey: 'BMeBDoffBxb5D6_TH-BV39aYAESXAKECMj61-ybtf8zQaV3TNGg4odX0GsoW_VIkfdFczQra1-hSLjhvUv_JqPY',
    privateKey: '0JxkdpxbKPJ7nWidTSXoITf1HwUOvZL0bB5dW6hNNOY'
}

push.setVapidDetails('mailto:test@code.co.uk', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/fa5LJhA0Ypg:APA91bE1lcZW096anFgJtPDBWQNx6CceHuvrHmnF4N02uYQPOtV5iVRQSCr9r_URYpA4Pn4lscAMK6aggNnlMUUBv1d37AdxjQy3pqb6MliOlh03ZyOzVegv8yUiQeZ7_H39cwY0Xr6B","expirationTime":null,"keys":{"p256dh":"BKP162-bETnsjyxQa87hQbjodmK4ZSexcYwS_ELsr_hDDi8zL5WTt6NKuO_f_va1YT31G98fdYU-56tHig3vfIc","auth":"vnmOqXBW0xzWhvNJVIVWMQ"}}

push.sendNotification(sub, 'test message');