<h2>Express TypeScript For Tatum.io</h2>
<p>NFT minting on polygon</p>
<p>Node fetch instead of tatum's http code that looked ugly</p>
<p>Test with:</p>
<code>npm run test:unit</code>

<h3>Start dev server</h2>
<code>npm run dev</code>

<h3>Docker build</h3>
<code>docker build -t visyfy .</code>

<h3>Docker run</h3>
<code>docker run -p 8070:8070 -d --name container_name visyfy -e PORT=8070 -e NODE_ENV=development</code>

If doesn't work, try to run:
<code>docker build .</code>
