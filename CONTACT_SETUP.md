# Contact Form Setup Guide

The contact form now integrates with Slack to send you notifications when someone submits a message.

## Setup Instructions

### 1. Create a Slack Incoming Webhook

1. Go to [Slack API: Incoming Webhooks](https://api.slack.com/messaging/webhooks)
2. Click "Create your Slack app"
3. Choose "From scratch"
4. Give your app a name (e.g., "Portfolio Contact Form")
5. Select the workspace where you want to receive notifications
6. In the app settings, go to "Incoming Webhooks"
7. Toggle "Activate Incoming Webhooks" to ON
8. Click "Add New Webhook to Workspace"
9. Select the channel where you want to receive contact form submissions
10. Copy the webhook URL (it looks like: `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXX`)

### 2. Add Webhook URL to Your Project

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add your webhook URL:
   ```
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
   ```
3. Restart your development server

### 3. Test the Integration

1. Go to your portfolio's contact form
2. Fill out and submit the form
3. Check your Slack channel - you should receive a formatted notification with:
   - Name
   - Email
   - Message
   - Timestamp

## Alternative: WhatsApp Integration

If you prefer WhatsApp instead of Slack, you can use:
- **Twilio WhatsApp API**: More reliable but requires payment
- **WhatsApp Business API**: Official but complex setup
- **wa.me links**: Simple approach - just opens WhatsApp with pre-filled message

For a simple WhatsApp solution, you could modify the contact form to open WhatsApp:
```javascript
const whatsappNumber = "923214328875"
const message = `Hi! I'm ${name}\n\nEmail: ${email}\n\nMessage: ${message}`
window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`)
```

## Security Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- The webhook URL should be kept secret
- The API route validates all inputs before sending to Slack

## Customization

You can customize the Slack message format in `/app/api/contact/route.ts` by modifying the `slackMessage` object.
