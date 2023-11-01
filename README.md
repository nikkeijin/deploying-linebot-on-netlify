## Deploying LINE BOT on Netlify
     
Create your own repository in your github account with all these example files and after setting the CHANNEL SECRET & CHANNEL ACCESS TOKEN from your LINE Messaging API you can deploy from GitHub to Netlify. You can see below an explanation of how to do so if you have any doubts about.

## Dependencies
        
These are the dependencies we used.

```
express
@line/bot-sdk
serverless-http
netlify-lambda
dotenv
```

## CHANNEL SECRET & CHANNEL ACCESS TOKEN
        
Set your .env with the CHANNEL SECRET & CHANNEL ACCESS TOKEN from your LINE Messaging API.      

```
CHANNEL_SECRET=xxxxxxxxxxx
CHANNEL_ACCESS_TOKEN=xxxxxxxxxxx
```

## Webhook URL
        
Set your Webhook URL for the LINE Messaging API using the example below     

```
https://<your-id>.netlify.com/.netlify/functions/server/webhook
```   
          
## How to deploy a website from GitHub on Netlify
        
1. Sign up for an account on Netlify (if you haven't already) at https://app.netlify.com/signup.        
2. Once logged in to Netlify, click on the "New site from Git" button on the dashboard.     
3. Select the "GitHub" option to connect your GitHub account to Netlify.        
4. Authorize Netlify to access your GitHub repositories.        
5. Choose the repository that contains your website code from the list of repositories.     
6. Specify the branch you want to deploy. The default branch is usually set to "main" or "master," but you can choose a different branch if needed.     
7. Configure the build settings. Netlify will automatically detect common build settings for popular frameworks, but you can customize them if necessary.       
8. Click on the "Deploy site" button to start the deployment process. Netlify will fetch your code from GitHub and build your website.      
9. Once the build is complete, Netlify will provide you with a unique URL for your deployed website. You can customize this URL in the site settings if desired.   
10. You can also set up custom domains, SSL certificates, and other advanced settings in the site settings on Netlify.      
11. Netlify will automatically deploy updates whenever you push changes to the connected GitHub repository. You can monitor the deployment status and view deployment logs on the Netlify dashboard.   
          
## How to enable LINE Messaging API
    
1. Create a LINE Developers Account: Go to the LINE Developers website (https://developers.line.biz) and create an account if you don't have one already.
2. Create a Channel: Once you have logged in to your LINE Developers account, create a new channel for your Messaging API. Click on the "Create new channel" button and select the Messaging API option.
3. Fill in the Channel Information: Provide the necessary information about your channel, including the channel name, description, and category.
4. Configure Messaging API Settings: In the Channel settings, go to the "Messaging API" tab and configure the necessary settings for your bot. You can set the basic settings such as default language, time zone, and other options.
5. Generate Channel Access Token: In the "Messaging API" tab, scroll down to the "Channel access token" section and click on the "Issue" button to generate a new channel access token. This token will be used to authenticate your bot when making API requests.   
        
## How to set Webhook URL for the LINE Messaging API
       
1. Go to the LINE Developers Console at https://developers.line.biz/.       
2. Log in with your LINE account.       
3. Select the provider and the channel that you want to set the webhook URL for.        
4. On the channel settings page, navigate to the "Messaging API" tab.        
5. Scroll down to the "Webhook settings" section.       
6. Enable the webhook by toggling the switch to "Enabled."          
7. Enter the URL where you want to receive webhook events in the "Webhook URL" field.           
This URL should be able to receive HTTP POST requests.      
8. Click on the "Verify" button to verify that the provided URL is valid and can receive webhook events. LINE will send a verification request to the specified URL.        
9. Ensure that your server is ready to handle webhook events and respond to the verification request correctly. The verification request includes a verification code that your server needs to respond with to complete the verification process.      
10. Once the verification is successful, click on the "Save" button to save the webhook settings.       
        
Note: Scroll down and remember to DISABLE these settings since we are going to use our bot:       
1. Allow bot to join group chats        
2. Auto-reply messages      
3. Greeting messages             
