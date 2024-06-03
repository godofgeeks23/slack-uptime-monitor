# Slack Uptime Monitor

A simple uptime monitor based on HTTP/HTTPS requests. It can be used to monitor the uptime of your website or any other API. It sends a request to the specified URL at a specified interval and logs the response time and status code. It also logs the downtime if the response status code is not 200.

It is intended to be a Slack app to send notifications when the website is down or when it is back up.

Features - 

- Monitor the uptime of your website or API
- Send notifications to Slack when the website is down or back up
- Logs the response time and status code of the request
- Logs the downtime if the response status code is not 200
- Easy to use and configure
- Add multiple URLs to monitor
- Set the interval for each URL
- Set the timeout for each request
