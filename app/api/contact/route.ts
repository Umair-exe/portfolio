import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Slack webhook URL - You need to set this in your environment variables
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL

    if (!slackWebhookUrl) {
      console.error('SLACK_WEBHOOK_URL not configured')
      // Still return success to user, but log the error
      return NextResponse.json(
        { message: 'Message received! Will get back to you soon.' },
        { status: 200 }
      )
    }

    // Format message for Slack
    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📬 New Contact Form Submission',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Name:*\n${name}`,
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${email}`,
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${message}`,
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Submitted at: ${new Date().toLocaleString()}`,
            },
          ],
        },
        {
          type: 'divider',
        },
      ],
    }

    // Send to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    })

    if (!slackResponse.ok) {
      throw new Error('Failed to send message to Slack')
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
